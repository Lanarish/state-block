import React, { useState, useEffect } from "react";

// componentDidMount

// useEffect(() => {
//     // Код, который нужно выполнить после монтирования компонента
//   }, []);

// // componentDidUpdate

// useEffect(() => {
//     // Код, который нужно выполнить при каждом обновлении конкретной зависимости
//   }, [dependencies]);

// // // useEffect без зависимостей, срабатывает при каждом обновлении компонента
// useEffect(() => {

//   });

// // componentWillUnmount

// useEffect(() => {
//     // Добавляем обработчик событий или другой побочный эффект

//     return () => {
//       // Здесь чистим все подписки и обработчики
//     };
//   }, []); // Эффект будет активирован однократно, при монтировании компонента

//Examples

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // пустой массив зависимостей для выполнения только при монтировании

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         if (selectedUserId !== null) {
//           const response = await fetch(
//             `https://jsonplaceholder.typicode.com/users/${selectedUserId}`
//           );
//           const data = await response.json();
//           setSelectedUser(data);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchUser();
//   }, [selectedUserId]);

//   const handleUserClick = (userId) => {
//     console.log(userId);
//     setSelectedUserId(userId);
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => {
//           console.log(user);
//           return (
//             <li key={user.id} onClick={() => handleUserClick(user.id)}>
//               {user.name}

//             </li>
//           );
//         })}
//       </ul>
//       {selectedUser && selectedUserId && (
//         <div>
//           <h1>{selectedUser.name}</h1>
//           <p>Phone: {selectedUser.phone}</p>
//           <p>Email:{selectedUser.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserList;

const useDataFetching = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

const UserList = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useDataFetching("https://jsonplaceholde.typicode.com/users");
  return (
    <div>
      {isLoading ? (
        <p>Loading process ....</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li>{user.name}</li> 
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
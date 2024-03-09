import React, { useState} from "react";

const Table = ({ cards }) => {
  return (
    <div>
      <table border='1'>
        <tr>
          <th>N/N</th>
          <th>Name</th>
          <th>Price</th>
          <th>Speed</th>
          <th>Buttons</th>
        </tr>
        {cards.map((card) => {
          return <TableRow rowData={card} key={card.id} />;
        })}
      </table>
    </div>
  );
};

export default Table;

const TableRow = ({ rowData }) => {
  const { id, name, price, speed } = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id:id,
    name:name,
    price:price,
    speed:speed,
  });


  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }
  function handleSave() {
    setValue({...value});
    setIsSelected(!isSelected);
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }
 
  return isSelected ? (
    <tr>
      <td>
        <td>{id}</td>
      </td>
      <td>
        <input
          type='text'
          value={value.name}
          name={'name'}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type='text'
          value={value.price}
          name={'price'}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type='text'
          value={value.speed}
          name={'speed'}
          onChange={handleChange}
        />
      </td>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClose}>Close</button>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.name}</td>
      <td>{value.price}</td>
      <td>{value.speed}</td>
      <td>
        <td>
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
        </td>
      </td>
    </tr>
  );
};



const CardWrapper=()=>{

  
  return(
    <>
    <button>Next</button>
    <Card />
    <button>Previous</button>
    
    </>
  )
}




const Card =({english})=>{
  return(
    <div>{english}</div>
  )
}
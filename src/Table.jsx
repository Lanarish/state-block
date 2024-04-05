import React, { useState } from "react";
import styles from "./Table.module.css";

const Table = ({ data, handleSaveNewWord }) => {
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
        {data.map((card) => {
          return (
            <TableRow
              rowData={card}
              key={card.id}
              handleSaveNewWord={handleSaveNewWord}
            />
          );
        })}
      </table>
    </div>
  );
};

export default Table;

const TableRow = ({ rowData, handleSaveNewWord }) => {
  const { id, name, price, speed } = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id: id,
    name: name,
    price: price,
    speed: speed,
  });

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }
  function handleEdit() {
    setIsSelected(!isSelected);
  }
  const [errors, setErrors] = useState({
    name: false,
    price: false,
    speed: false,
  });
  function handleSave() {
    if (value.name.match(/[a-zA-Z]/gm)) {
      setErrors({ ...errors, name: "Just russian letters" });
    } else {
      handleSaveNewWord(value, rowData.id);
      setIsSelected(!isSelected);
    }
  }
  function handleChange(event) {
    setValue({ ...value, [event.target.name]: event.target.value });

    setErrors({
      ...errors,
      [event.target.name]:
        event.target.value.trim() === "" ? "Field cannot be empty" : false,
    });
  }

  const isBtnDisabled = Object.values(errors).some((elem) => elem);

  return isSelected ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type='text'
          value={value.name}
          name={"name"}
          onChange={handleChange}
          className={errors.name ? styles.error_border : ""}
        />
        <p>{errors.name && errors.name}</p>
      </td>
      <td>
        <input
          type='text'
          value={value.price}
          name={"price"}
          onChange={handleChange}
          className={errors.price ? styles.error_border : ""}
        />
      </td>

      <td>
        <input
          type='text'
          value={value.speed}
          name={"speed"}
          onChange={handleChange}
          className={errors.speed ? styles.error_border : ""}
        />
      </td>
      <button onClick={handleSave} disabled={isBtnDisabled}>
        Save
      </button>
      <button onClick={handleClose}>Close</button>
    </tr>
  ) : (
    <tr>
      <td>{rowData.id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{speed}</td>
      <td>
        <td>
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
        </td>
      </td>
    </tr>
  );
};

// const CardWrapper=()=>{

//   return(
//     <>
//     <button>Next</button>
//     <Card />
//     <button>Previous</button>

//     </>
//   )
// }

// const Card =({english})=>{
//   return(
//     <div>{english}</div>
//   )
// }

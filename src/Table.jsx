import React, { useState, useContext } from "react";
import { WordsContext } from "./WordsContext";

const Table = () => {
  const { words, setWords } = useContext(WordsContext);
  console.log("words",words)
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
        {words.map((word) => {
          return <TableRow rowData={word} key={word.id} />;
        })}
      </table>
    </div>
  );
};

export default Table;

const TableRow = ({ rowData }) => {
  const {handleSave} = useContext(WordsContext);
  const { id, english, transcription, russian } = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id: id,
    english,
    transcription,
    russian,
  });

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }
  function handleSaveWord() {
    handleSave(value,value.id)
    setValue({ ...value });
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
          value={value.english}
          name={"english"}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type='text'
          value={value.transcription}
          name={"transcription"}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type='text'
          value={value.russian}
          name={"russian"}
          onChange={handleChange}
        />
      </td>
      <button onClick={handleSaveWord}>Save</button>
      <button onClick={handleClose}>Close</button>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td>
        <td>
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
        </td>
      </td>
    </tr>
  );
};

// const CardWrapper = () => {
//   return (
//     <>
//       <button>Next</button>
//       <Card />
//       <button>Previous</button>
//     </>
//   );
// };

// const Card = ({ english }) => {
//   return <div>{english}</div>;
// };

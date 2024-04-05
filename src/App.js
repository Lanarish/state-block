import React, { useState } from "react";
import "./App.css";

import { Card } from "./Card";
import Table from "./Table";
import { Carousel } from "./Carousel";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./useEffect";

function App() {
  const cardsData = [
    {
      id: 1,
      name: "Безлимитный 300",
      price: "300 руб/мес",
      speed: "до 10 Мбит/сек",
    },
    {
      id: 2,
      name: "Безлимитный 450",
      price: "450 руб/мес",
      speed: "до 50 Мбит/сек",
    },
    {
      id: 3,
      name: "Безлимитный 550",
      price: "550 руб/мес",
      speed: "до 100 Мбит/сек",
    },
    {
      id: 4,
      name: "Безлимитный 1000",
      price: "1000 руб/мес",
      speed: "до 200 Мбит/сек",
    },
  ];
  const [cards, setCards] = useState(cardsData);
  //   function getColor(index) {
  //     switch (index) {
  //       case 0:
  //         return "green";
  //       case 1:
  //         return "pink";
  //       case 2:
  //         return "purple";
  //       case 3:
  //         return "grey";
  //       default:
  //         return "blue";
  //     }
  //   }

  const handleSaveNewWord = (value, id) => {
    console.log(value, id);
    const newState = cards.map((card) => {
      console.log("card", card);
      if (card.id === id) {
        return value;
      } else {
        return card;
      }
    });
    console.log("Updated cards:", newState); // Отладочный вывод
    setCards(newState);
  };

  return (
    <div className='App'>
      {/* <UserList /> */}
      <Router>
        <div>
          <nav>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li style={{ listStyleType: "none" }}>
                <Link to='/'>Home</Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to='/table'>Table</Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to='/game'>Carousel</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path='/table'
              element={
                <Table data={cards} handleSaveNewWord={handleSaveNewWord} />
              }
            />
            <Route path='/' element={<Home />} />
            {/* <Route path='/game' element={<Carousel cards={cards} />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

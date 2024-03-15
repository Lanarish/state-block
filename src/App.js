import "./App.css";
import { Card } from "./Card";
import Table from "./Table";
import { Carousel } from "./Carousel";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const cards = [
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
function App() {
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
  return (
    <div className='App'>
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
            <Route path='/table' element={<Table cards={cards} />} />
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Carousel cards={cards} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

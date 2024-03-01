import "./App.css";
import { Card } from "./Card";

const cards = [
  {
    name: "Безлимитный 300",
    price: "300 руб/мес",
    speed: "до 10 Мбит/сек",
    text: "Объем включенного трафика не ограничен",
  },
  {
    name: "Безлимитный 450",
    price: "450 руб/мес",
    speed: "до 50 Мбит/сек",
    text: "Объем включенного трафика не ограничен",
  },
  {
    name: "Безлимитный 550",
    price: "550 руб/мес",
    speed: "до 100 Мбит/сек",
    text: "Объем включенного трафика не ограничен",
  },
  {
    name: "Безлимитный 1000",
    price: "1000 руб/мес",
    speed: "до 200 Мбит/сек",
    text: "Объем включенного трафика не ограничен",
  },
];
function App() {
  function getColor(index) {
    switch (index) {
      case 0:
        return "green";
      case 1:
        return "pink";
      case 2:
        return "purple";
      case 3:
        return "grey";
      default:
        return "blue";
    }
  }
  return (
    <div className='App'>
      {cards.map((card, index) => {
        return <Card card={card} color={getColor(index)} key={card.name} />;
      })}
    </div>
  );
}

export default App;

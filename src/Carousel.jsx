import React, { useState } from "react";
import { Card } from "./Card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Carousel = ({ cards }) => {
  const [position, setPosition] = useState(0);

  function showPrevious() {
    if (position === 0) {
      setPosition(cards.length - 1);
    } else {
      setPosition(position - 1);
    }
  }
  function showNext() {
    if (position === cards.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }
  return (
    <div>
      <CardWrapper
        onShowPrevious={showPrevious}
        onShowNext={showNext}
        position={position}
        cards={cards}
        cardsLength={cards.length}
      />
        {/* <Table/> */}
        {/* <Card name={cards[position].name} speed={cards[position].speed} /> */}
      {/* </CardWrapper> */}
    </div>
  );
};

const CardWrapper = ({
  children,
  onShowPrevious,
  onShowNext,
  position,
  cards,
  cardsLength,
}) => {
  console.log(cards);
  return (
    <>
      <div style={{ display: "flex" }}>
        <button style={{ fontSize: "22px" }} onClick={onShowPrevious}>
      
       <ArrowBackIcon/>
        </button>
        {/* {children} */}
        <Card name={cards[position].name} speed={cards[position].speed} />
        <button className='rightArrow' onClick={onShowNext}>
       <ArrowForwardIcon/>
        </button>
      </div>
      <p className='number_of_card'>
        {position+1}/{cardsLength}
      </p>
    </>
  );
};

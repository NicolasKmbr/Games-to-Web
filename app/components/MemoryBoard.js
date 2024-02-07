"use client";
import Card from "@/components/Card";
import { createCardDeck } from "@/utils/createCardDeck";
import { useEffect, useState } from "react";
import Button from "./Button";

function MemoryBoard() {
  const [cards, setCards] = useState(createCardDeck(8, { duplicate: true, includeMatchable: true }));
  const [revealed, setRevealed] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (cards.every((card) => card.matched === true)) {
      alert("You won!");
    }
  } , [cards]);

  useEffect(() => {
    console.log("revealed: ", revealed);
    console.log("revealed.length: ", revealed.length);
    console.log("cards[]: ", cards);
    const [first, second] = revealed;
    if (revealed.length === 2) {
      if (
        cards[first].rank === cards[second].rank &&
        cards[first].suit === cards[second].suit
      ) {
        setScore(score + 1);
        // Remove the cards from the board
        setCards((currentCards) => {
          const newCards = [...currentCards];
          newCards[first].matched = true;
          newCards[second].matched = true;
          return newCards;
        });
      }
    }
  }, [revealed]);


  const handleCardClick = (index) => {
    // If the card is already revealed, do nothing
    if (revealed.includes(index) || cards[index].matched) {
      return;
    }else{
      setRevealed([...revealed, index]);
    }
    console.log("index: ", index);
    if (revealed.length >= 2) {
      setRevealed((currentArray) => currentArray.slice(2));
    }
  };

  const handleReset = () => {
    setCards(createCardDeck(8, { duplicate: true, includeMatchable: true }));
    setRevealed([]);
    setScore(0);
  }


  return (
    <>
    <div className="relative grid grid-cols-4 w-fit m-auto gap-3">
    {cards.map((card, index) => {
  console.log(card.matched);
  return (
    <Card
      revealed={revealed.includes(index)}
      key={index}
      src={card.imagePath}
      alt="Memory Card"
      handleCardClick={() => handleCardClick(index)}
      className={`${card.matched ? "transition-opacity opacity-0 duration-700" : ""}`} //Fade out matched cards
    />
  );
})}
    </div>
    <p className="mt-5 w-fit m-auto text-center rounded-md bg-blue-300">{score}</p>
    <Button onClick={handleReset}>Reset</Button>
    </>
  );
}

export default MemoryBoard;

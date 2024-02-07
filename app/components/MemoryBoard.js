"use client";
import Card from "@/components/Card";
import { createCardDeck } from "@/utils/createCardDeck";
import { useEffect, useState } from "react";

function MemoryBoard() {
  const [cards, setCards] = useState(createCardDeck(8, true));
  const [revealed, setRevealed] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (cards.every((card) => card.imagePath === "")) {
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
        setCards(
          cards.map((card, index) => {
            if (index === first || index === second) {
              return { ...card, imagePath: "" };
            }
            return card;
          })
        );
      }
    }
  }, [revealed]);


  const handleCardClick = (index) => {
    console.log("index: ", index);
    // If the card is already revealed, do nothing
    if (revealed.includes(index)) {
      return;
    }else{
      setRevealed([...revealed, index]);
    }
    if (revealed.length >= 2) {
      setRevealed((currentArray) => currentArray.slice(2));
    }
  };

  return (
    <>
    <div className="relative grid grid-cols-4 w-fit m-auto gap-3">
      {cards.map((card, index) =>
        card.imagePath ? (
          <Card
            revealed={revealed.includes(index)}
            key={index}
            src={card.imagePath}
            alt="Memory Card"
            handleCardClick={() => handleCardClick(index)}
          />
        ) : (
          <div className='w-fit'></div>
        )
      )}
    </div>
    <p className="mt-5 w-12 m-auto text-center rounded-md bg-blue-300">{score}</p>
    </>
  );
}

export default MemoryBoard;

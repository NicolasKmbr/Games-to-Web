"use client";
import Card from "@/components/Card";
import { createCardDeck } from "@/utils/createCardDeck";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Dialog from "./Dialog";
function MemoryBoard() {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    handleReset();
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.cardsState = cards;
    }
  }, [cards]);

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
    } else {
      setRevealed([...revealed, index]);
    }
    console.log("index: ", index);
    if (revealed.length >= 2) {
      setRevealed((currentArray) => currentArray.slice(2));
    }
  };

  /**
   * The handleReset function resets the game by creating a new card deck, clearing the revealed cards,
   * and resetting the score.
   */
  const handleReset = () => {
    setCards(createCardDeck(8, { duplicate: true, includeMatchable: true }));
    setRevealed([]);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative grid grid-cols-4 w-fit m-auto gap-3">
        {cards.map((card, index) => {
          console.log(card.matched);
          console.log(card);
          return (
            <Card
              data-cy={`card-${card.rank}-${card.suit}`}
              revealed={revealed.includes(index)}
              key={index}
              src={card.imagePath}
              alt="Memory Card"
              handleCardClick={() => handleCardClick(index)}
              className={`${
                card.matched ? "transition-opacity opacity-0 duration-700" : ""
              }`} //Fade out matched cards
              data-revealed={revealed.includes(index) ? "true" : "false"}
            />
          );
        })}
      </div>
      <p className="w-12 m-auto text-center rounded-md bg-blue-300">{score}</p>
      <Button
        buttonStyle="bg-slate-400 w-16 rounded-md"
        handleButtonClick={handleReset}
      >
        Reset
      </Button>
      <Dialog
        isOpen={
          cards.every((card) => card.matched === true) && cards.length > 0
        }
        title="You won!"
      >
        Test
      </Dialog>
    </div>
  );
}

export default MemoryBoard;

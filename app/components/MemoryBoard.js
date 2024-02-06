"use client"
import Card from '@/components/Card'
import { createCard } from '@/utils/CreateCard'
import { getRandomSuit } from '@/utils/getRandomSuit'
import { getRandomCardRank } from '@/utils/getRandomCardRank'
import { addUniqueObject } from '@/utils/addUniqueObject'
import { useEffect, useState } from 'react'



function MemoryBoard() {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const allCards = [];
    while (allCards.length < 8) {
      const suit = getRandomSuit();
      const rank = getRandomCardRank();
      const newCard = createCard(rank, suit);
      addUniqueObject(newCard, allCards);
    }
    setCards(allCards.concat(allCards));
  }
  , []);

  useEffect(() => {
    console.log('revealed: ', revealed);
    console.log('revealed.length: ', revealed.length);
    const [first, second] = revealed;
    if (revealed.length === 2) {

      if (cards[first].rank === cards[second].rank && cards[first].suit === cards[second].suit) {
        setScore(score + 1);
      }
      setTimeout(() => {
        setRevealed([]);
      }, 1000);
    }
  } , [revealed]);

  const handleCardClick = (index) => {
    console.log('index: ', index);
    setRevealed([...revealed, index]);
  };


  //console.log(cards);



  return (
    <div className='grid grid-cols-4 w-fit m-auto gap-3'>
      {cards.map((card, index) => (
                <Card revealed={revealed.includes(index)} key={index} src={card.imagePath} alt='Memory Card' handleCardClick={() => handleCardClick(index)} />
            ))}
      <p>{score}</p>
    </div>
  )
}


export default MemoryBoard
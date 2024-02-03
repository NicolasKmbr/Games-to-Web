"use client"
import Card from '@/components/Card'
import { createCard } from '@/utils/CreateCard'
import { getRandomSuit } from '@/utils/getRandomSuit'
import { getRandomCardRank } from '@/utils/getRandomCardRank'
import { addUniqueObject } from '@/utils/addUniqueObject'
import { useEffect, useState } from 'react'



function MemoryBoard() {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState([]);

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
    setFlip(Array(cards.length).fill(false));
  }, [cards]);


  

  const handleCardClick = (index) => {
    const newFlip = [...flip];
    newFlip[index] = !newFlip[index];
    setFlip(newFlip);
  };

  console.log(cards);
  console.log("flip array = " + flip);




  return (
    <div className='grid grid-cols-4 w-fit m-auto gap-3'>
      {cards.map((card, index) => (
                <Card revealed={flip[index]} key={index} src={card.imagePath} alt='Memory Card' handleCardClick={() => handleCardClick(index)} />
            ))}
    </div>
  )
}


export default MemoryBoard
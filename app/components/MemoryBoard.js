import React from 'react'
import Card from '@/components/Card'
import { GetAssetPaths } from '@/utils/GetAssetPaths'
import { createCard } from '@/utils/CreateCard'
import { getRandomSuit } from '@/utils/getRandomSuit'
import { getRandomCardRank } from '@/utils/getRandomCardRank'
import { addUniqueObject } from '@/utils/addUniqueObject'



async function MemoryBoard() {
const cards =  new Array()

while (cards.length < 8) {
  const card = createCard(getRandomCardRank(), getRandomSuit())
  addUniqueObject(card, cards)
}

console.log("Cards = " + cards)
console.log("Cards length = " + cards.length)
const allCards = cards.concat(cards);

  return (
    <div className='grid grid-cols-4 w-fit m-auto'>
      {allCards.map((card, index) => (
                <Card key={index} src={card.imagePath} alt='Memory Card' />
            ))}
    </div>
  )
}


export default MemoryBoard
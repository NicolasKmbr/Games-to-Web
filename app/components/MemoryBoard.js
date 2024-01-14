import React from 'react'
import Card from '@/components/Card'
import { GetAssetPaths } from '@/utils/GetAssetPaths'



async function MemoryBoard() {

const cards = await GetAssetPaths("/Deck_of_Cards")
console.log(cards)

  return (
    <div>
      {cards.map((card, index) => (
                <Card key={index} src={card} alt='Memory Card' />
            ))}

    </div>
  )
}


export default MemoryBoard
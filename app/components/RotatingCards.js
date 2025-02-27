"use client";

import Card from "./Card";
import styles from "../styles/rotatingcards.module.css";

const CARD_COUNT = 15; // Number of cards

export default function RotatingCards() {
  return (
    <div className="flex items-center justify-center h-[200px] w-full">
      <h1 className="absolute text-6xl font-bold z-10 fit-content">
        Games to Web
      </h1>
      {Array.from({ length: CARD_COUNT }).map((_, index) => (
        <Card
          key={index}
          className={`${styles.item} absolute`}
          imageStyle={styles.image}
          cardStyle={{
            animationDelay: `${-index * 0.5}s`, // Delay each card animation to offset the cards in circle
          }}
          alt="Card Background"
        />
      ))}
    </div>
  );
}

{
  /* <Card
        className={styles.item}
        imageStyle={styles.image}
        alt="Card Background"
      /> */
}

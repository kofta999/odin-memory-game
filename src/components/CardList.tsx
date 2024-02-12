import React, { SetStateAction, useState } from "react";
import type { ICard, IScoreBoard } from "../App";
import Card from "./Card";

interface CardListProps {
  initialCards: ICard[];
  setScores: React.Dispatch<SetStateAction<IScoreBoard>>;
}

export default function CardList({ initialCards, setScores }: CardListProps) {
  const initialClicked: Record<string, boolean> = initialCards.reduce(
    (obj, card) => ({ ...obj, [card._id]: false }),
    {},
  );

  const [cards, setCards] = useState(initialCards);
  const [clicked, setClicked] = useState(initialClicked);

  const resetGame = () => {
    setClicked(initialClicked);
    setScores(({ score, bestScore }) => ({
      score: 0,
      bestScore: Math.max(score, bestScore),
    }));
  };

  const randomizeCards = () => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }

    return shuffledCards;
  };

  const handleCardClick = (id: string) => () => {
    setCards(randomizeCards());
    if (clicked[id] === true) {
      resetGame();
      return;
    }

    setClicked({ ...clicked, [id]: true });
    setScores(({ score, ...rest }) => ({ ...rest, score: score + 1 }));
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,16rem)] gap-16 p-10 justify-center items-center">
      {cards.map((card) => (
        <Card
          key={card._id}
          imageUrl={card.photoUrl}
          name={card.name}
          setClicked={handleCardClick(card._id)}
        />
      ))}
    </div>
  );
}

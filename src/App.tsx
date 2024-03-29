import { useEffect, useState } from "react";
import { fetchChars } from "./util";
import CardList from "./components/CardList";
import ScoreBoard from "./components/ScoreBoard";

export interface ICard {
  _id: string;
  photoUrl: string;
  name: string;
  [key: string]: string;
}

export interface IScoreBoard {
  score: number;
  bestScore: number;
}

export default function App() {
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [scores, setScores] = useState({ score: 0, bestScore: 0 });

  useEffect(() => {
    let ignore = false;
    setCards(null);
    fetchChars().then((cards) => {
      if (!ignore && cards) {
        setCards(cards);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="flex h-screen flex-col bg-gradient-to-tl from-blue-500 to-blue-300">
      <ScoreBoard {...scores} />
      {cards ? (
        <CardList initialCards={cards} setScores={setScores} />
      ) : (
        <h1 className="mb-auto mt-auto flex justify-center text-6xl">
          Loading...
        </h1>
      )}
    </div>
  );
}

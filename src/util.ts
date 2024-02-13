import { ICard } from "./App";

const apiUrl =
  "https://api-blue-archive.vercel.app/api/character/random?count=10";

export async function fetchChars(): Promise<ICard[] | null> {
  const res = await fetch(apiUrl);
  if (res.ok) {
    const data = await res.json();
    console.log(data);

    return data.data;
  } else {
    return null;
  }

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve([
  //       {
  //         _id: "1",
  //         name: "Yuuka (Sportswear) 1",
  //         photoUrl:
  //           "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
  //       },
  //       {
  //         _id: "2",
  //         name: "Yuuka (Sportswear) 2",
  //         photoUrl:
  //           "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
  //       },
  //       {
  //         _id: "3",
  //         name: "Yuuka (Sportswear) 3",
  //         photoUrl:
  //           "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
  //       },
  //       {
  //         _id: "4",
  //         name: "Yuuka (Sportswear) 4",
  //         photoUrl:
  //           "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
  //       },
  //     ]);
  //   }, 10000);
  // });
}

export const randomizeCards = (cards: ICard[]) => {
  const shuffledCards = [...cards];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  return shuffledCards;
};

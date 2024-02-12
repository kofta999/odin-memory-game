import { ICard } from "./App";

const apiUrl =
  "https://api-blue-archive.vercel.app/api/character/random?count=10";

export async function fetchChars(): Promise<ICard[]> {
  // const res = await fetch(apiUrl);
  // if (res.ok) {
  //   const data = await res.json();
  //   console.log(data);

  //   return data.data;
  // } else {
  //   return null;
  // }

  return [
    {
      _id: "1",
      name: "Yuuka (Sportswear) 1",
      photoUrl:
        "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
    },
    {
      _id: "2",
      name: "Yuuka (Sportswear) 2",
      photoUrl:
        "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
    },
    {
      _id: "3",
      name: "Yuuka (Sportswear) 3",
      photoUrl:
        "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
    },
    {
      _id: "4",
      name: "Yuuka (Sportswear) 4",
      photoUrl:
        "https://static.miraheze.org/bluearchivewiki/thumb/6/60/Yuuka_%28Sportswear%29.png/266px-Yuuka_%28Sportswear%29.png",
    },
  ];
}

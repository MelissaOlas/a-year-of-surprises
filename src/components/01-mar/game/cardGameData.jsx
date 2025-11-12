const baseCards = [
  {
    id: "1",
    name: "photo1",
    img: "/assets/cardGame/first.jpg",
    matched: false,
  },
  {
    id: "2",
    name: "photo2",
    img: "/assets/cardGame/second.jpg",
    matched: false,
  },
  {
    id: "3",
    name: "photo3",
    img: "/assets/cardGame/third.jpg",
    matched: false,
  },
  {
    id: "4",
    name: "photo4",
    img: "/assets/cardGame/fourth.jpg",
    matched: false,
  },
  {
    id: "5",
    name: "photo5",
    img: "/assets/cardGame/fifth.jpg",
    matched: false,
  },
  {
    id: "6",
    name: "photo6",
    img: "/assets/cardGame/sixth.jpg",
    matched: false,
  },
  {
    id: "7",
    name: "photo7",
    img: "/assets/cardGame/seventh.jpg",
    matched: false,
  },
  {
    id: "8",
    name: "photo8",
    img: "/assets/cardGame/eighth.jpeg",
    matched: false,
  },
];

const cardGameData = [
  ...baseCards,
  ...baseCards.map((card) => ({
    ...card,
    id: card.id + "-duplicate",
  })),
];

export default cardGameData;

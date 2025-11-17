import { supabase } from "../../../api/supabaseClient";

function getImageUrl(filename) {
  const { data } = supabase.storage
    .from("images")
    .getPublicUrl(`mars/${filename}`);
  return data.publicUrl;
}

const baseCards = [
  {
    id: "1",
    name: "photo1",
    img: getImageUrl("first.jpg"),
    matched: false,
  },
  {
    id: "2",
    name: "photo2",
    img: getImageUrl("second.jpg"),
    matched: false,
  },
  {
    id: "3",
    name: "photo3",
    img: getImageUrl("third.jpg"),
    matched: false,
  },
  {
    id: "4",
    name: "photo4",
    img: getImageUrl("fourth.jpg"),
    matched: false,
  },
  {
    id: "5",
    name: "photo5",
    img: getImageUrl("fifth.jpg"),
    matched: false,
  },
  {
    id: "6",
    name: "photo6",
    img: getImageUrl("sixth.jpg"),
    matched: false,
  },
  {
    id: "7",
    name: "photo7",
    img: getImageUrl("seventh.jpg"),
    matched: false,
  },
  {
    id: "8",
    name: "photo8",
    img: getImageUrl("eighth.jpeg"),
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

// const baseCards = [
//   {
//     id: "1",
//     name: "photo1",
//     img: "/assets/cardGame/first.jpg",
//     matched: false,
//   },
//   {
//     id: "2",
//     name: "photo2",
//     img: "/assets/cardGame/second.jpg",
//     matched: false,
//   },
//   {
//     id: "3",
//     name: "photo3",
//     img: "/assets/cardGame/third.jpg",
//     matched: false,
//   },
//   {
//     id: "4",
//     name: "photo4",
//     img: "/assets/cardGame/fourth.jpg",
//     matched: false,
//   },
//   {
//     id: "5",
//     name: "photo5",
//     img: "/assets/cardGame/fifth.jpg",
//     matched: false,
//   },
//   {
//     id: "6",
//     name: "photo6",
//     img: "/assets/cardGame/sixth.jpg",
//     matched: false,
//   },
//   {
//     id: "7",
//     name: "photo7",
//     img: "/assets/cardGame/seventh.jpg",
//     matched: false,
//   },
//   {
//     id: "8",
//     name: "photo8",
//     img: "/assets/cardGame/eighth.jpeg",
//     matched: false,
//   },
// ];

// const cardGameData = [
//   ...baseCards,
//   ...baseCards.map((card) => ({
//     ...card,
//     id: card.id + "-duplicate",
//   })),
// ];

// export default cardGameData;

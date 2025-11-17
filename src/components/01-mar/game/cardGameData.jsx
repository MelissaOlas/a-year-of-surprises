import { supabase } from "../../../api/supabaseClient";

export async function getPicture(filename) {
  const { data, error } = await supabase.storage
    .from("images")
    .createSignedUrl(`march/${filename}`, 3600);

  if (error) {
    console.error("Erreur de lien signé:", error);
    return null;
  }

  return data.signedUrl;
}

const baseCards = [
  {
    id: "1",
    name: "photo1",
    filename: "first.jpg",
    matched: false,
  },
  {
    id: "2",
    name: "photo2",
    filename: "second.jpg",
    matched: false,
  },
  {
    id: "3",
    name: "photo3",
    filename: "third.jpg",
    matched: false,
  },
  {
    id: "4",
    name: "photo4",
    filename: "fourth.jpg",
    matched: false,
  },
  {
    id: "5",
    name: "photo5",
    filename: "fifth.jpg",
    matched: false,
  },
  {
    id: "6",
    name: "photo6",
    filename: "sixth.jpg",
    matched: false,
  },
  {
    id: "7",
    name: "photo7",
    filename: "seventh.jpg",
    matched: false,
  },
  {
    id: "8",
    name: "photo8",
    filename: "eighth.jpeg",
    matched: false,
  },
];

export async function getCardGameData() {
  const cardsWithUrls = await Promise.all(
    baseCards.map(async (card) => {
      const imageUrl = await getPicture(card.filename);
      return {
        ...card,
        img: imageUrl,
      };
    })
  );

  const cardGameData = [
    ...cardsWithUrls,
    ...cardsWithUrls.map((card) => ({
      ...card,
      id: card.id + "-duplicate",
    })),
  ];

  return cardGameData;
}

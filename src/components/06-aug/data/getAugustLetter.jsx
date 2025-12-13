import { supabase } from "../../../api/supabaseClient";

async function getAugustLetter() {
  const { data, error } = await supabase
    .from("letters")
    .select("created_at, title, content, month");

  if (error) {
    console.error("Erreur lors de la récupération des lettres:", error);
    throw error;
  }

  return data;
}

export default getAugustLetter;

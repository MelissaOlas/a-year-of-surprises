import { supabase } from "../../../api/supabaseClient";

export const getMessage = async (level) => {
  try {
    const { data, error } = await supabase
      .from("messages_game")
      .select("message")
      .eq("level", level)
      .single();

    if (error) {
      console.error("Erreur Supabase:", error);
      throw error;
    }

    return data.message;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération du message niveau ${level}:`,
      error
    );
    // default message if error
    return "Un message spécial pour toi... ❤️";
  }
};

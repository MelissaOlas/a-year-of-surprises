import { supabase } from "../../../api/supabaseClient";

async function listAprilFiles() {
  const { data, error } = await supabase.storage.from("images").list("april", {
    sortBy: { column: "name", order: "asc" },
  });

  if (error) {
    console.error("Erreur lors de la liste des fichiers:", error);
    return [];
  }

  return data.map((file) => file.name);
}

export async function getAprilPictures(filename) {
  const { data, error } = await supabase.storage
    .from("images")
    .createSignedUrl(`april/${filename}`, 3600);

  if (error) {
    console.error("Erreur de lien pour le fichier", filename, ":", error);
    return null;
  }

  return data.signedUrl;
}

export async function getAprilImageData() {
  const fileNames = await listAprilFiles();

  const finalImageData = await Promise.all(
    fileNames.map(async (filename, index) => {
      const imageUrl = await getAprilPictures(filename);
      return {
        id: String(index + 1),
        img: imageUrl,
      };
    }),
  );

  return finalImageData.filter((item) => item.img !== null);
}

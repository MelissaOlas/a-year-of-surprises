import { useState, useEffect } from "react";
import { getJulyImageData } from "./data/getJulyPictures";
import { Loader, View } from "reshaped";
import "./july.scss";

function July() {
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const imageData = await getJulyImageData();

        setLyrics(imageData);
      } catch (err) {
        console.error("Erreur récupération des images:", err);
        setError("Impossible de charger les images.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-container">loading...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  const spotifyLink =
    "https://open.spotify.com/playlist/5VaFbxLVGaJWP0JAlGvKNV?si=2432606d9f364d37";

  const handleSpotifyClick = () => {
    window.open(spotifyLink, "_blank");
  };

  return (
    <div>
      <p className="july_text">
        <div>
          It's summertime and my birthday is right around the corner. Special
          enough (monsieur, enough!) to make you a playlist.
        </div>
        <div>Read through the lyrics that made me think of you 💝</div>
        <button className="music_button" onClick={handleSpotifyClick}>
          <span class="material-symbols-outlined">music_note_2</span>
        </button>
      </p>
      <div className="july-container">
        {lyrics.map((item) => (
          <div key={item.id} className="july_img_container">
            {item.img ? (
              <img src={item.img} alt={item.name} className="july_img" />
            ) : (
              <p>Image non chargée (URL manquante)</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default July;

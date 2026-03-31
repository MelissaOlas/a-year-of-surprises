import { useState, useEffect } from "react";
import { getAprilImageData } from "./data/getAprilPictures";
import "./april.scss";

function April() {
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const imageData = await getAprilImageData();

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
      <div className="april-text">
        <div className="april-paragraph">
          Honey, it's already been too long since I last saw you but it seems
          like you're always with me somehow, especially since every love song
          is about you now. That's why I made you this playlist.
          <div>
            Click the button and read through the lyrics that made me think of
            you
          </div>
        </div>
        <button className="music-button" onClick={handleSpotifyClick}>
          <span className="material-symbols-outlined">music_note_2</span>
        </button>
      </div>
      <div className="april-container">
        {lyrics.map((item) => (
          <div key={item.id} className="april-img-container">
            {item.img ? (
              <img src={item.img} alt={item.name} className="april-img" />
            ) : (
              <p>Image non chargée (URL manquante)</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default April;

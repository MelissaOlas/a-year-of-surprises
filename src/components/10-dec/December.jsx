import AudioPlayer from "./audioPlayer/AudioPalyer";
import "./december.scss";

function December() {
  return (
    <div className="december-container">
      <AudioPlayer
        audioSrc={process.env.PUBLIC_URL + "/assets/henry-hypnotized.mp3"}
      />
    </div>
  );
}

export default December;

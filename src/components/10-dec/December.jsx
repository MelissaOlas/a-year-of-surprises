import AudioPlayer from "./audioPlayer/AudioPalyer";
import "./december.scss";

function December() {
  return (
    <div className="december-container">
      <AudioPlayer audioSrc={"./assets/henry-hypnotized.mp3"} />
    </div>
  );
}

export default December;

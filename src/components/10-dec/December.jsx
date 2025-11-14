import AudioPlayer from "./audioPlayer/AudioPalyer";
// import Snowfall from "react-snowfall";
import "./december.scss";

function December() {
  return (
    <div className="december-container">
      {/* <Snowfall /> */}
      <AudioPlayer audioSrc={"./assets/henry-hypnotized.mp3"} />
    </div>
  );
}

export default December;

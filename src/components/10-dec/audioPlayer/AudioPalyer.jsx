import { useState, useRef, useEffect } from "react";
import Snowfall from "react-snowfall";
import "./audioPlayer.scss";
import { supabase } from "../../../api/supabaseClient";

async function getImage(filename) {
  const { data, error } = await supabase.storage
    .from("images")
    .createSignedUrl(`december/${filename}`, 60);

  if (error) {
    console.error("Erreur de lien signé:", error);
    return null;
  }

  return data.signedUrl;
}
const picture = await getImage("hellevator.jpeg");

const AudioPlayer = ({ audioSrc }) => {
  const [isPaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [snowFall, setSnowFall] = useState(false);

  const audioRef = useRef(null);

  // seek a specific time in the audio
  const handleSeek = (event) => {
    const time = event.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // update current time and duration
  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setCurrentTime(current);
    setDuration(dur);
  };

  // format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setSnowFall(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setSnowFall(false);
  };

  // handle play/pause
  const handlePlayPause = () => {
    if (isPaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <div className="player-card">
      <img src={picture} alt="fake album cover" className="album-cover" />
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
      <audio ref={audioRef} src={audioSrc} />

      <div className="track-duration">
        <p>{formatTime(currentTime)}</p>
        <p>{formatTime(duration)}</p>
      </div>

      <button className="pause-play-button" onClick={handlePlayPause}>
        <span className="material-symbols-outlined">
          {isPaying ? "pause" : "play_arrow"}
          {snowFall && <Snowfall />}
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;

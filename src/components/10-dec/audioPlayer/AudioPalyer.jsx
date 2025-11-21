import { useState, useRef, useEffect } from "react";
import Snowfall from "react-snowfall";
import "./audioPlayer.scss";
import { supabase } from "../../../api/supabaseClient";

async function getImage(filename) {
  const { data, error } = await supabase.storage
    .from("images")
    .createSignedUrl(`december/${filename}`, 600);

  if (error) {
    console.error("Erreur:", error);
    return null;
  }

  return data.signedUrl;
}

const AudioPlayer = ({ audioSrc }) => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [isPaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [snowFall, setSnowFall] = useState(false);

  const audioRef = useRef(null);

  // pre load image to avoid rendering issues
  useEffect(() => {
    let isMounted = true;

    async function loadImage() {
      setLoading(true);
      const url = await getImage("hellevator.jpeg");

      if (isMounted && url) {
        const img = new Image();
        img.onload = () => {
          if (isMounted) {
            setImageUrl(url);
            setLoading(false);
          }
        };
        img.onerror = () => {
          if (isMounted) {
            console.error("Erreur de chargement de l'image");
            setLoading(false);
          }
        };
        img.src = url;
      } else if (isMounted) {
        setLoading(false);
      }
    }

    loadImage();

    return () => {
      isMounted = false;
    };
  }, []);

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
    if (!audio) return;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [loading]);

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

  if (loading) {
    return (
      <div className="loading">
        <p>Chargement de l'image...</p>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Chargement de l'image...</div>;
  }

  return (
    <div className="player-card">
      {imageUrl && (
        <img src={imageUrl} alt="fake album cover" className="album-cover" />
      )}
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

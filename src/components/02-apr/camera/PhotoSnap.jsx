import { useRef, useEffect, useState } from "react";
import "./photoSnap.scss";

export default function PhotoSnap() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const streamRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1920, height: 1080 },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;

        await videoRef.current.play();
      }
    } catch (err) {
      console.error("Erreur d'accès à la caméra:", err);
    }
  };

  const takePhoto = () => {
    // Vérification de sécurité
    if (!videoRef.current || !photoRef.current) {
      console.error("Refs non disponibles");
      return;
    }

    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  const closePhoto = () => {
    if (!photoRef.current) return;

    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <>
      <div className={`snap-container ${hasPhoto ? "hidden" : ""}`}>
        <div className="camera-screen">
          <video ref={videoRef}></video>
        </div>
        <button className="snap-button" onClick={takePhoto}>
          <span className="material-symbols-outlined">photo_camera</span>
        </button>
      </div>

      <div className={`result ${hasPhoto ? "hasPhoto" : ""}`}>
        <canvas ref={photoRef}></canvas>
        <button className="snap-button" onClick={closePhoto}>
          CLOSE
        </button>
      </div>
    </>
  );
}

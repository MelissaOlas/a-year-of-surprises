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
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    setHasPhoto(false);

    ctx.clearRect(0, 0, photo.width, photo.height);
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
    <div className="snap-container">
      <div className="camera">
        <video ref={videoRef}></video>
        <button className="snap-button" onClick={takePhoto}>
          SNAP!
        </button>
      </div>
      <div className={"result" + hasPhoto ? "hasPhoto" : ""}>
        <canvas ref={photoRef}></canvas>
        <button className="snap-button" onClick={closePhoto}>
          CLOSE
        </button>
      </div>
    </div>
  );
}

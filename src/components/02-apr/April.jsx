import { useState } from "react";

import PhotoSnap from "./camera/PhotoSnap";
import PhotoCapture from "./camera/PhotoCapture";
import "./april.scss";

function April() {
  const [showCamera, setShowCamera] = useState(true);
  const handleHideCamera = () => {
    setShowCamera(false);
  };
  const handleShowCamera = () => {
    setShowCamera(true);
  };

  return (
    <div className="april-container">
      {!showCamera ? (
        <div className="photo-snap">
          <PhotoSnap />
          <button onClick={handleShowCamera}>Reopen Camera</button>
        </div>
      ) : (
        <PhotoCapture onClickHandler={handleHideCamera} />
      )}
    </div>
  );
}

export default April;

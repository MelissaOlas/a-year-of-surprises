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
    <div>
      {!showCamera ? (
        <div className="photo-snap">
          <PhotoSnap />
          <button className="go-back" onClick={handleShowCamera}>
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
      ) : (
        <div className="april-container">
          <PhotoCapture onClickHandler={handleHideCamera} />
        </div>
      )}
    </div>
  );
}

export default April;

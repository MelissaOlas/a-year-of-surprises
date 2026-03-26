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
      <div>
        It's summertime and my birthday is right around the corner. Special
        enough (monsieur, enough!) to ask you for a little souvenir you could
        send to me.
      </div>
      {!showCamera ? (
        <div className="photo-snap">
          <PhotoSnap />
          <button className="go-back" onClick={handleShowCamera}>
            <span className="material-symbols-outlined">arrow_back</span>
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

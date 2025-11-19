import { useState } from "react";

import PhotoSnap from "./camera/PhotoSnap";
import PhotoCapture from "./camera/PhotoCapture";

function April() {
  const [showCamera, setShowCamera] = useState(true);
  const handleHideCamera = () => {
    setShowCamera(false);
  };
  const handleShowCamera = () => {
    setShowCamera(true);
  };

  return (
    <>
      {!showCamera ? (
        <div>
          <PhotoSnap />
          <button onClick={handleShowCamera}>Reopen Camera</button>
        </div>
      ) : (
        <PhotoCapture onClickHandler={handleHideCamera} />
      )}
    </>
  );
}

export default April;

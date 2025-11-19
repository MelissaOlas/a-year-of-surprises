import "./photoCapture.scss";

const PhotoCapture = ({ onClickHandler }) => {
  return (
    <div className="camera" onClick={onClickHandler}>
      <div className="top">
        <div className="button-1"></div>
        <div className="button-2"></div>
        <div className="button-3">
          <div className="box"></div>
        </div>
        <div className="button-4"></div>
      </div>
      <div className="camera-body">
        <div className="bar">
          <div className="small-glass"></div>
          <div className="flash">
            <div className="box-1"></div>
            <div className="box-2"></div>
          </div>
        </div>

        <div className="center">
          <div className="dot"></div>
          <div className="lens">
            <div className="inner-lens"></div>
          </div>
        </div>

        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default PhotoCapture;

import { useState } from "react";
import getAugustLetter from "./data/getAugustLetter";
import "./august.scss";

function August({
  title = "UNA NOTA",
  subtitle1 = "ESPECIAL,",
  subtitle2 = "SOLO para ti",
  letterContent,
  signature = "Te amo infinitamente ❤️",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  getAugustLetter();

  const defaultContent = [
    {
      text: "lorem ipsum",
      bold: "looorem iiipsum",
    },
    {
      text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];

  const content = letterContent || defaultContent;

  return (
    <div className="love-letter-card">
      {/* <div className="header">
        <h2 className="title">
          {title.split(" ")[0]}{" "}
          <span className="highlight">{title.split(" ")[1]}</span>
        </h2>
        <h3 className="subtitle">{subtitle1}</h3>
        <h3 className="subtitle-italic">
          {subtitle2.split(" ")[0]}{" "}
          <span className="italic">
            {subtitle2.split(" ").slice(1).join(" ")}
          </span>
          <span className="heart">♥</span>
        </h3>
      </div>

      <div
        className={`envelope-container ${isOpen ? "open" : ""}`}
        onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
        onClick={handleToggle}
      >
        <div className="letter">
          {content.map((paragraph, index) => (
            <p key={index} className="letter-text">
              {paragraph.text.split(paragraph.bold)[0]}
              {paragraph.bold && <strong>{paragraph.bold}</strong>}
              {paragraph.bold && paragraph.text.split(paragraph.bold)[1]}
              {!paragraph.bold && paragraph.text}
            </p>
          ))}
          <p className="letter-signature">{signature}</p>
        </div>

        <div className="envelope">
          <div className="envelope-flap"></div>
          <div className="envelope-body"></div>
          <div className="wax-seal">
            <span className="seal-icon">♥</span>
          </div>
        </div>

        {/* Indicateur pour mobile
        <div className="tap-indicator">
          {isOpen ? "Tap pour fermer" : "Tap pour ouvrir"}
        </div>
      </div> */}
    </div>
  );
}

export default August;

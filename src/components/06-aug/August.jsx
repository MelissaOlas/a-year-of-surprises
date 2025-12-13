import { useState, useEffect } from "react";
import getAugustLetter from "./data/getAugustLetter";
import "./august.scss";

function August({ title = "Almost there", signature = "love, always 💚" }) {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchLetters() {
      const data = await getAugustLetter();
      setLetters(data);
      setLoading(false);
    }
    fetchLetters();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="love-letter-card">
      <div className="header">
        <h2 className="title">
          {title.split(" ")[0]}{" "}
          <span className="highlight">{title.split(" ")[1]}</span>
        </h2>
        <h3 className="subtitle">
          <span className="heart">♥</span>
        </h3>
      </div>

      <div
        className="content-wrapper"
        onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
        onClick={() => window.innerWidth < 768 && setIsOpen(!isOpen)}
      >
        {/* envelope */}
        <div className={`envelope ${isOpen ? "hidden" : ""}`}>
          <div className="envelope-back"></div>
          <div className="envelope-front"></div>

          <div className="wax-seal">
            <span className="seal-icon">♥</span>
          </div>
        </div>

        {/* letter */}
        <div className={`letter ${isOpen ? "visible" : ""}`}>
          <div className="letter-content">
            {letters.map((letter) => (
              <div key={letter.id} className="letter-item">
                <h4 className="letter-title">{letter.title}</h4>
                <p className="letter-text">{letter.content}</p>
              </div>
            ))}
            <p className="letter-signature">{signature}</p>
          </div>
        </div>

        {/* Indicateur mobile */}
        <div className="tap-indicator">
          {isOpen ? "Tap to close" : "Tap to open"}
        </div>
      </div>
    </div>
  );
}

export default August;

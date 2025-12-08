import { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import "./june.scss";

const data = {
  across: {
    3: {
      clue: "The first game we played together",
      answer: "CARDS",
      row: 6,
      col: 5,
    },
    7: {
      clue: "A city we both have in our hearts",
      answer: "TOULOUSE",
      row: 9,
      col: 2,
    },
    9: {
      clue: "The first thing we drank together",
      answer: "WINE",
      row: 12,
      col: 0,
    },
    10: {
      clue: "Another way to call me",
      answer: "SPOUSE",
      row: 12,
      col: 6,
    },
    12: {
      clue: "Something I love to do for you",
      answer: "COOK",
      row: 17,
      col: 1,
    },
    13: {
      clue: "Choko-together 🍫",
      answer: "TONYS",
      row: 3,
      col: 5,
    },
    14: {
      clue: "Our favorite driver",
      answer: "HAMILTON",
      row: 1,
      col: 10,
    },
  },
  down: {
    1: {
      clue: "Where we had our first date",
      answer: "LABELLEEQUIPE",
      row: 0,
      col: 11,
    },
    2: {
      clue: "The month we met",
      answer: "JANUARY",
      row: 1,
      col: 7,
    },
    4: {
      clue: "We were NOT the first time you came to my place",
      answer: "SOBER",
      row: 6,
      col: 9,
    },
    5: {
      clue: "My favorite drink to have with you",
      answer: "COFFEE",
      row: 8,
      col: 3,
    },
    6: {
      clue: "What I am and want to be",
      answer: "YOURS",
      row: 8,
      col: 6,
    },
    8: {
      clue: "The first gift you gave me",
      answer: "LIPSTICK",
      row: 11,
      col: 1,
    },
    11: {
      clue: "The city where we met",
      answer: "PARIS",
      row: 12,
      col: 7,
    },
  },
};

function June() {
  const [cellBackground, setCellBackground] = useState("#fdcdd9");
  const [isComplete, setIsComplete] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCorrect = (direction, number, answer) => {
    console.log(`✅ Correct! ${direction} ${number}: ${answer}`);
    setCellBackground("#a1dbc3");
    setTimeout(() => {
      setCellBackground("#fdcdd9");
    }, 700);
  };

  const handleCrosswordCorrect = () => {
    if (!isComplete) {
      setIsComplete(true);
      setShowMessage(true);
    }
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <div className="june-container">
      {showMessage && (
        <>
          <div className="message-box">
            <h2 className="message-title">Well done ! ✨</h2>
            <p className="message-content">
              I hope you enjoyed revisiting these moments as much as I did
              creating this crossword for you. I love you 💙
            </p>
            <button onClick={handleClose} className="message-close-button">
              Fermer
            </button>
          </div>

          <div className="overlay" onClick={handleClose} />
        </>
      )}

      <Crossword
        className="crossword"
        data={data}
        theme={{
          columnBreakpoint: "767px",
          gridBackground: "#258963",
          cellBackground: cellBackground,
          cellBorder: "#258963",
          textColor: "#000",
          numberColor: "rgba(37, 137, 99, 1)",
          focusBackground: "#c0f7e0",
          highlightBackground: "#a1dbc3",
        }}
        onCorrect={handleCorrect}
        onCrosswordCorrect={handleCrosswordCorrect}
      />
    </div>
  );
}

export default June;

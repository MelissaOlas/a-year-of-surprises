import { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import "./june.scss";

const data = {
  across: {
    3: {
      clue: "The first game we played together",
      answer: "CARDS",
      row: 6,
      col: 6,
    },
    7: {
      clue: "A city we she share",
      answer: "TOULOUSE",
      row: 9,
      col: 3,
    },
    9: {
      clue: "The first thing we drank together",
      answer: "WINE",
      row: 12,
      col: 1,
    },
    10: {
      clue: "Another way to call me",
      answer: "SPOUSE",
      row: 12,
      col: 7,
    },
    12: {
      clue: "Something I love to do for you",
      answer: "COOK",
      row: 17,
      col: 2,
    },
    13: {
      clue: "Choko-together (or something like that)",
      answer: "TONYS",
      row: 3,
      col: 6,
    },
    14: {
      clue: "Our favorite drive",
      answer: "HAMILTON",
      row: 1,
      col: 11,
    },
  },
  down: {
    1: {
      clue: "Our first date",
      answer: "LABELLEEQUIPE",
      row: 0,
      col: 12,
    },
    2: {
      clue: "The month we met",
      answer: "JANUARY",
      row: 1,
      col: 8,
    },
    4: {
      clue: "We were not the first time you came to my place",
      answer: "SOBER",
      row: 6,
      col: 10,
    },
    5: {
      clue: "My favorite drink to have with you",
      answer: "COFFEE",
      row: 8,
      col: 4,
    },
    6: {
      clue: "What I want to be",
      answer: "YOURS",
      row: 8,
      col: 7,
    },
    8: {
      clue: "The first gift you gave me",
      answer: "LIPSTICK",
      row: 11,
      col: 2,
    },
    11: {
      clue: "The city where we met",
      answer: "PARIS",
      row: 12,
      col: 8,
    },
  },
};

function June() {
  const [cellBackground, setCellBackground] = useState("#fdcdd9");
  const handleCorrect = (direction, number, answer) => {
    console.log(`✅ Correct! ${direction} ${number}: ${answer}`);

    setCellBackground("#a1dbc3");

    setTimeout(() => {
      setCellBackground("#fdcdd9");
    }, 700);
  };
  return (
    <div style={{ width: "95%", maxWidth: "800px", margin: "0 auto" }}>
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
        onCrosswordComplete={() => {
          // add front congrats message
          console.log("Mots croisés terminés !");
        }}
      />
    </div>
  );
}

export default June;

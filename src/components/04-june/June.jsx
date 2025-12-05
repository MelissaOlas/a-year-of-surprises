import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    3: {
      clue: "The first game we played together",
      answer: "CARDS",
      row: 6,
      col: 5,
    },
    7: {
      clue: "A city we she share",
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
      clue: "Choko-together (or something like that)",
      answer: "TONYS",
      row: 3,
      col: 5,
    },
    14: {
      clue: "Our favorite drive",
      answer: "HAMILTON",
      row: 1,
      col: 10,
    },
  },
  down: {
    1: {
      clue: "Our first date",
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
      clue: "We were not the first time you came to my place",
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
      clue: "What I want to be",
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
  return (
    <div style={{ width: "95%", maxWidth: "800px", margin: "0 auto" }}>
      <Crossword
        data={data}
        theme={{
          columnBreakpoint: "768px",
          gridBackground: "#fff",
          cellBackground: "#fff",
          cellBorder: "#000",
          textColor: "#000",
          numberColor: "rgba(0,0,0, 0.25)",
          focusBackground: "#ff0",
          highlightBackground: "#ffcc00",
        }}
        onCorrect={(direction, number, answer) => {
          console.log(`Correct! ${direction} ${number}: ${answer}`);
        }}
        onCrosswordComplete={() => {
          console.log("Mots croisés terminés !");
        }}
      />
    </div>
  );
}

export default June;

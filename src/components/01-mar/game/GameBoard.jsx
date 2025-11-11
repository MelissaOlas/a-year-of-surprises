import { useState, useEffect } from "react";
import Card from "./Card";
import cardGameData from "./cardGameData";

function GameBoard() {
  const [cardsArray, setCardsArray] = useState([]);
  const [moves, setMoves] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [won, setWon] = useState(0);

  function NewGame() {
    setTimeout(() => {
      const randomOrderArray = cardGameData.sort(() => 0.5 - Math.random());
      setCardsArray(randomOrderArray);
      setMoves(0);
      setFirstCard(null);
      setSecondCard(null);
      setWon(0);
    }, 1200);
  }

  //handling cards 1 and 2 selection
  function handleSelectedCards(item) {
    console.log(typeof item);
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  }

  // if two selected check if the images are the same,
  //if true, stop the flipping ability
  // else they turn back
  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true };
            } else {
              return unit;
            }
          });
        });
        setWon((preVal) => preVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  //empty the firstCard and secondCard comp if same
  function removeSelection() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  }

  //starts the game for the first time.
  useEffect(() => {
    NewGame();
  }, []);

  return (
    <div className="gameBoardContainer">
      <div className="gameBoardHeader"></div>
      <div className="gameBoardBoard">
        {cardsArray.map((item) => (
          <Card
            item={item}
            key={item.id}
            handleSelectedCards={handleSelectedCards}
            toggled={
              item === firstCard || item === secondCard || item.matched === true
            }
            stopflip={stopFlip}
          />
        ))}
      </div>

      {won !== 6 ? (
        <div className="gameBoardComments">Moves : {moves}</div>
      ) : (
        <div className="gameBoardComments">
          ???????? You Won in {moves} moves ????????
        </div>
      )}
      <button className="gameBoardButton" onClick={NewGame}>
        New Game
      </button>
    </div>
  );
}

export default GameBoard;

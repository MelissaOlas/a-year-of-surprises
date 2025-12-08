import { useState, useEffect } from "react";
import Card from "./Card";
import { getCardGameData } from "./cardGameData";
import { useNavigate } from "react-router-dom";

function GameBoard() {
  const [cardsArray, setCardsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [won, setWon] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const navigate = useNavigate();

  async function NewGame() {
    setLoading(true);

    const cardGameData = await getCardGameData();

    setTimeout(() => {
      const randomOrderArray = cardGameData.sort(() => 0.5 - Math.random());

      setCardsArray(randomOrderArray);
      setFirstCard(null);
      setSecondCard(null);
      setWon(false);
      setLoading(false);
    }, 1200);
  }

  function handleSelectedCards(item) {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
    if (stopFlip || item.matched) {
      return;
    }
  }

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
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  function removeSelection() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
  }

  useEffect(() => {
    if (cardsArray.length > 0 && cardsArray.every((card) => card.matched)) {
      setWon(true);
    }
  }, [cardsArray]);

  useEffect(() => {
    NewGame();
  }, []);

  function handleGoToMenu() {
    navigate("/home");
  }

  if (loading) {
    return <div>loading...</div>;
  }

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

      {won && (
        <button
          className="gameBoardWin victory-message"
          onClick={handleGoToMenu}
        >
          Well done sweetheart! 🤠 <br />
          🔙
        </button>
      )}

      <button className="gameBoardButton" onClick={NewGame}>
        New Game
      </button>
    </div>
  );
}

export default GameBoard;

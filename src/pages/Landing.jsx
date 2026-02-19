import "./styles/landing.scss";
import "../App.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cardsData } from "../data/cardsData";

const Landing = () => {
  const navigate = useNavigate();
  const isUnlocked = (month) => {
    const today = new Date("2027-04-01");
    const year = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    console.log("year:", year, "currentMonth:", currentMonth, "month:", month);
    if (month <= 2) return year > 2026;
    return year > 2026 || (year === 2026 && currentMonth >= month);
  };

  useEffect(() => {
    if (localStorage.getItem("auth") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const handleNavi = (month) => {
    navigate(`/${month}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="surprises-container">
          <div className="months-grid">
            {cardsData.map((months) => (
              <button
                key={months.id}
                className={`month-button ${!isUnlocked(months.month) ? "locked" : ""}`}
                onClick={() =>
                  isUnlocked(months.month) &&
                  handleNavi(months.title.toLowerCase())
                }
                disabled={!isUnlocked(months.month)}
              >
                {months.title}
                {!isUnlocked(months.month) && " 🔒"}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "12px 24px",
            margin: "5%",
            background: "rgba(253, 205, 217, 0.2)",
            color: "#fdcdd9",
            border: "2px solid #fdcdd9",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            fontFamily: '"JetBrains Mono", monospace',
          }}
        >
          Se déconnecter
        </button>
      </header>
    </div>
  );
};

export default Landing;

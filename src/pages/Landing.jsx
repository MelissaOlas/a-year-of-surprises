import "./styles/landing.scss";

const Landing = () => {
  // loop on months array and delete this one:
  const months = [
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
    "Janvier",
    "Février",
  ];

  return (
    <div className="surprises-container">
      <div className="months-grid">
        {months.map((month, index) => (
          <button
            key={index}
            className="month-button"
            // add click logic
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Landing;

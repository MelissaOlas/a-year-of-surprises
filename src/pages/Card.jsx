import "./styles/cards.scss";

function Card({ title }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

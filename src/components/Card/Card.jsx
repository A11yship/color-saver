import "./Card.css";

export default function Card({ colorCode }) {
  return (
    <div className="card" style={{ backgroundColor: colorCode }}>
      <button type="button"> {colorCode} </button>
    </div>
  );
}

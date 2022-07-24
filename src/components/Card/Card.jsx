import "./Card.css";

export default function Card({ colorCode }) {
  return (
    <div className="card" style={{ backgroundColor: colorCode }}>
      <button type="button" className="delete">
        {" "}
        ⓧ{" "}
      </button>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(colorCode);
        }}
      >
        {" "}
        {colorCode}{" "}
      </button>
    </div>
  );
}

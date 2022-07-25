import "./Card.css";

export default function Card({ color, onDelete }) {
  return (
    <div className="card" style={{ backgroundColor: color.colorCode }}>
      <button
        type="button"
        className="delete"
        onClick={() => {
          onDelete(color.id);
        }}
      >
        {" "}
        ⓧ{" "}
      </button>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(color.colorCode);
        }}
      >
        {" "}
        {color.colorCode}{" "}
      </button>
    </div>
  );
}

import "./Card.css";

export default function Card({ color, onDelete, onEdit }) {
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

      <input
        type="text"
        className="changeColor"
        value={color.colorCode}
        onChange={onEdit}
      />

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

import "./Form.css";

export default function Form({ onAddColor, onSelectingColor, currentColor }) {
  return (
    <form className="form" onSubmit={onAddColor}>
      <input
        type="color"
        className="form__input"
        name="newColor"
        onInput={onSelectingColor}
        value={currentColor}
      />
      <input
        type="text"
        className="form__input"
        name="newColor"
        onInput={onSelectingColor}
        value={currentColor}
      />
      <button type="submit" className="form__input">
        Add
      </button>
    </form>
  );
}

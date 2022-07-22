import "./App.css";
import { nanoid } from "nanoid";
import Card from "./components/Card/Card";

const colors = [
  { id: nanoid(), colorCode: "#0D3B66" },
  { id: nanoid(), colorCode: "#FAF0CA" },
  { id: nanoid(), colorCode: "#F4D35E" },
  { id: nanoid(), colorCode: "#EE964B" },
  { id: nanoid(), colorCode: "#F95738" },
  { id: nanoid(), colorCode: "#4EFFEF" },
  { id: nanoid(), colorCode: "#73A6AD" },
  { id: nanoid(), colorCode: "#9B97B2" },
  { id: nanoid(), colorCode: "#D8A7CA" },
  { id: nanoid(), colorCode: "#C7B8EA" },
  { id: nanoid(), colorCode: "#7899D4" },
];

function App() {
  return (
    <>
      <h1> Color-Saver </h1>
      <form className="form">
        <input type="color" />
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <div className="color_cards">
        {colors.map((color) => (
          <Card key={color.id} colorCode={color.colorCode} />
        ))}
      </div>
    </>
  );
}

export default App;

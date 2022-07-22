import "./App.css";
import { nanoid } from "nanoid";
import Card from "./components/Card/Card";

const colors = [
  { id: nanoid(), colorCode: "0d3b66" },
  { id: nanoid(), colorCode: "faf0ca" },
  { id: nanoid(), colorCode: "f4d35e" },
  { id: nanoid(), colorCode: "EE964B" },
  { id: nanoid(), colorCode: "F95738" },
  { id: nanoid(), colorCode: "4EFFEF" },
  { id: nanoid(), colorCode: "73A6AD" },
  { id: nanoid(), colorCode: "9B97B2" },
  { id: nanoid(), colorCode: "D8A7CA" },
  { id: nanoid(), colorCode: "C7B8EA" },
  { id: nanoid(), colorCode: "7899D4" },
];

function App() {
  return (
    <>
      <h1> Color-Saver </h1>
      <div className="color_cards">
        <Card />
      </div>
    </>
  );
}

export default App;

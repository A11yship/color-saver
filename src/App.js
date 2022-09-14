import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

function App() {
  const [colors, setColors] = useState([
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
  ]);
  const [newColor, setNewColor] = useState("#8A2BE2");

  function handleSubmit(event) {
    event.preventDefault();
    setColors([...colors, { id: nanoid(), colorCode: newColor }]);
  }

  function handleSelectingColor(event) {
    setNewColor(event.target.value);
  }

  function handleDelete(currentId) {
    console.log(currentId);
    setColors(colors.filter((color) => color.id !== currentId));
  }

  function handleEdit() {
    setColors(colors.map);
  }

  return (
    <div className="app">
      <h1> Color-Saver </h1>
      <Form
        onAddColor={handleSubmit}
        onSelectingColor={handleSelectingColor}
        currentColor={newColor}
      />
      <div className="color_cards">
        {colors.map((color) => (
          <Card
            key={color.id}
            color={color}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

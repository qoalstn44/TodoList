import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Item } from "./types/type";
import InsertItem from "./components/InsertItem";
import ItemList from "./components/ItemList";

function App() {
  const saveItems = localStorage["todos"]
    ? JSON.parse(localStorage.getItem("todos") || "")
    : [];
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  });

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>{"Todo List"}</h1>
        </div>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;

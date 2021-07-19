import { useState } from "react";

import "./App.css";

import shoppingIcon from "./assets/shopping-icon.svg";

function App() {
  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>
    </>
  );
}

export default App;

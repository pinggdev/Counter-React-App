/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable multiline-ternary */
/* eslint-disable no-undef */
/* eslint-disable semi */
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/index";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";

import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu ultra", count: 1 },
    { title: "Tahu sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank list!");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditonCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      // Selama jumlah count masih di atas 0
      // Bisa lakuin pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      // Kalo udah 0 dan masih dikurangin juga
      // hapus array value dengan index yang sesuai
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />

      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <div className="info">
          <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
          </div>

          <div className="info-total">
            <p>{`Total Counts: ${getTotalCounts()}`}</p>
          </div>

          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete All List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length === index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}

                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button
                      onClick={() => handleSubstractionCount(index)}
                      className="todo-action-button"
                    >
                      <img src={minusIcon} alt="minus icon" />
                    </button>

                    <button
                      onClick={() => handleAdditonCount(index)}
                      className="todo-action-button"
                    >
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </Container>
    </>
  );
}

export default App;

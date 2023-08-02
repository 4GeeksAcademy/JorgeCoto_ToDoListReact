import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Limpiar el input después de agregar la tarea
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const tasksRemaining = todos.length;

  return (
    <div className="container">
      <h1>Rutina {inputValue}</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="Agregar tareas"
          />
        </li>
        {todos.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "#c800ff", cursor: "pointer" }}
              onClick={() => handleDeleteTask(index)}
            />
          </li>
        ))}
      </ul>
	  <div>Quedan {tasksRemaining} más por hacer</div>
    </div>
  );
};

export default Home;
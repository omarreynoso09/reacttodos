import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [importance, setImportance] = useState("low");

  return (
    <div
      style={{ border: "1px solid white", padding: "1% ", marginTop: "80px" }}
    >
      <input
        placeholder="Title"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "black",
          fontSize: "16px",
          fontFamily: "monospace",
        }}
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <input
        placeholder="Description"
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "black",
          fontSize: "16px",
          fontFamily: "monospace",
        }}
        type="text"
        value={description}
        onChange={(e) => {
          const newDescription = e.target.value;
          setDescription(newDescription);
        }}
      ></input>
      <select
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "black",
          fontSize: "16px",
          fontFamily: "monospace",
        }}
        onChange={(e) => {
          const newImportance = e.target.value;
          setImportance(newImportance);
        }}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        style={{
          margin: "10px",
          padding: "1% ",
          textAlign: "center",
          color: "black",
          fontSize: "16px",
          fontFamily: "monospace",
        }}
        onClick={(e) => {
          const newToDo = { title, description, importance };
          setToDoList([...toDoList, newToDo]);

          setTitle("");
          setDescription("");
        }}
      >
        Submit
      </button>
      <hr />
      <div>
        {toDoList.map((element) => {
          return (
            <div>
              <p
                style={{
                  textTransform: "uppercase",
                  marginBottom: "0px",
                  fontFamily: "monospace",
                }}
              >
                {element.title}
              </p>
              <p
                style={{
                  textTransform: "uppercase",
                  marginBottom: "0px",
                  fontFamily: "monospace",
                }}
              >
                Description: {element.description}
              </p>
              <p
                style={{
                  textTransform: "uppercase",
                  marginBottom: "0px",
                  fontFamily: "monospace",
                }}
              >
                Importance: {element.importance}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

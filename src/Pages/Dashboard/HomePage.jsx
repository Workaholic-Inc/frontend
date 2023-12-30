import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import { EndPoints } from "../../Utils/EndPoints";
import { decodedToken, formatDate } from "../../Utils/HelperFunctions";

const HomePage = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated") || false
  );
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const backend = new EndPoints();
  const verifyToken = decodedToken();

  useEffect(() => {
    const loginUser = sessionStorage.getItem("authenticated");
    if (loginUser) {
      setAuthenticated(loginUser);
    }
  }, []);

  useEffect(() => {
    gettodo();
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("authenticated");
    setAuthenticated(false);
  };

  async function gettodo() {
    let d1 = await backend.getAllTodos();
    let response = await d1.json();
    if (d1.status === 401) {
      setTodos([]);
      navigate("/signin");
    } else {
      setTodos(response);
    }
  }

  async function handleCheck(e) {
    const datapase = {
      id: Number(e.target.id),
    };
    e.target.checked = true;
    const giga = await backend.completeTask(datapase);
    let response = await giga.json();
    setTodos(response);
  }

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      const gigi = await backend.createTodo({
        title: newTodo,
      });
      setTodos(await gigi.json());
      event.target.value = "";
    }
  }

  const handleInput = (event) => {
    setNewTodo(event.target.value);
  };

  async function handleDelete(event) {
    const res = await backend.deleteTask({
      id: Number(event.target.id),
    });
    setTodos(await res.json());
  }

  if (!authenticated) {
    return <Navigate replace to="/signin" />;
  } else {
    return (
      <>
        <div className="main-con">
          <div className="home-back">
            <img src="backhome.jpeg" alt="back" />
          </div>
          <div className="todo-con">
            <div className="head">
              <h1>Welcome {verifyToken.name}!</h1>
              <p>These are the tasks waiting for you...</p>
              <h1>TASK MANAGEMENT</h1>
            </div>
            <Input
              id="2"
              class="hm-input"
              placeholder="Create a new Todo"
              handleInput={handleInput}
              handleKeyDown={handleKeyDown}
            />
            <div className="todo-list">
              {todos.map((todo) => (
                <div className="chb-div">
                  <Checkbox
                    id={todo.id}
                    label={todo.title}
                    class="chb"
                    handleCheck={handleCheck}
                    checked={todo.is_completed}
                    dateLabel={formatDate(todo.created_at)}
                  />
                  <div className="del-btn" id={todo.id} onClick={handleDelete}>
                    🚮
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-t">
          <p>Have A Productive Day!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </>
    );
  }
};

export default HomePage;

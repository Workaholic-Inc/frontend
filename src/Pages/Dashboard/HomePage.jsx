import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import { EndPoints } from "../../Utils/EndPoints";
import { decodedToken, formatDate } from "../../Utils/HelperFunctions";
import ButtonC from "../../Components/Button/Button";
import { MdDelete } from "react-icons/md";

const HomePage = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated") || false
  );
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filterTodo, setFilterTodo] = useState("all");

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
    if (response.status === 401) {
      // setTodos([]);
      navigate("/signin");
    } else {
      setTodos(response);
    }
  }

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      newTodo === "" ? window.alert("please Enter Todo") : createTodo();
      async function createTodo() {
        const gigi = await backend.createTodo({
          title: newTodo,
        });
        setTodos(await gigi.json());
        event.target.value = "";
        setNewTodo("");
      }
    }
  }

  const handleInput = (event) => {
    setNewTodo(event.target.value);
  };

  async function handleSubmit(event) {
    if (newTodo === "") {
      window.alert("please Enter Todo");
    } else {
      const gigi = await backend.createTodo({
        title: newTodo,
      });
      setTodos(await gigi.json());
      setNewTodo("");
      let dester = document.getElementsByClassName("hm-input");
      dester[0].value = "";
    }
  }

  async function handleDelete(event) {
    const obj = {
      id: Number(event.target.id),
    };
    console.log(event.target);
    const res = await backend.deleteTask(obj);
    setTodos(await res.json());
  }

  async function handleFilter(event) {
    // setFilterTodo(event.target.value);
    let x = event.target.value;
    let data = await backend.getAllTodos();
    let response = await data.json();
    if (x === "Completed") {
      setTodos(response.filter((x) => x.is_completed));
    } else if (x === "Uncompleted") {
      setTodos(response.filter((x) => !x.is_completed));
    } else {
      setTodos(response);
    }
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
            <div className="actions">
              <Input
                id="2"
                class="hm-input"
                placeholder="Create a new Todo"
                handleInput={handleInput}
                handleKeyDown={handleKeyDown}
              />
              <div className="cte-btn">
                <ButtonC label="Create" handleSubmit={handleSubmit} class="ctn-btnn" />
              </div>
            </div>
            <div className="todo-filter">
              <select name="Filter" id="todo-filter" onChange={handleFilter}>
                <option value="">Filter Todos</option>
                <option className="select-op" value="Completed">
                  Completed
                </option>
                <option className="select-op" value="Uncompleted">
                  Uncompleted
                </option>
              </select>
            </div>
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
                  <div onClick={handleDelete}>
                    <span
                      class="material-symbols-outlined del-btn"
                      id={todo.id}
                    >
                      delete
                    </span>
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

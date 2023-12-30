import { REACT_APP_BACKEND_URL } from "./HelperFunctions";

const backendURL = REACT_APP_BACKEND_URL();
export class EndPoints {
  constructor() {}

  async createTodo(data) {
    // Default options are marked with *
    return await fetch(`${backendURL}/todo/create-task`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
  }
  async getAllTodos(data) {
    // Default options are marked with *
    return await fetch(`${backendURL}/todo/get-all-todos`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      //   body: JSON.stringify(data),
    });
  }

  async completeTask(data) {
    // Default options are marked with *
    return await fetch(`${backendURL}/todo/complete-task`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
  }
  async deleteTask(data) {
    // Default options are marked with *
    return await fetch(`${backendURL}/todo/delete-task`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
  }

  // Authentication
  async userLogin(data) {
    // Default options are marked with *
    return await fetch(`${backendURL}/auth/signin`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
  }

  async userSignUp(data) {
    // Default options are marked with *
    const response = await fetch(`${backendURL}/auth/signup`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response;

    // history.push("/signin");
  }
}

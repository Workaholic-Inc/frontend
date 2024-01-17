import { jwtDecode } from "jwt-decode";

export const REACT_APP_BACKEND_URL = () => "http://localhost:9000";
// export const REACT_APP_BACKEND_URL = () => "https://workaholic.onrender.com";

export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year:
      date.getFullYear() === new Date().getFullYear() ? undefined : "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export const decodedToken = () => {
  return jwtDecode(localStorage.getItem("token"));
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

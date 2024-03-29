import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/Authentication/SignUp";
import SignIn from "./Pages/Authentication/SignIn";
import HomePage from "./Pages/Dashboard/HomePage";
import Alert from "./Components/Alert/Alert";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/alert" element={<Alert />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

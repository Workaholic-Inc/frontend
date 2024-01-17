import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import ButtonC from "../../Components/Button/Button";
import { EndPoints } from "../../Utils/EndPoints";

const SignUp = () => {
  const backend = new EndPoints();

  const navigate = useNavigate();
  const [val, setVal] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await backend.userSignUp(val);
    const response = await res.json();
    if (res.status === 404) {
      window.alert(`${response.msg}`);
    } else {
      window.alert("SignUp Success");
      navigate("/signin");
    }
  };

  return (
    <div className="fruad">
      <div className="box-1">
        <div className="kala">
          <h1>Register</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              label="Name"
              type="name"
              name="name"
              placeholder="Enter your Name"
              value={val.name}
              handleInput={handleInput}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={val.email}
              handleInput={handleInput}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={val.password}
              handleInput={handleInput}
            />
            <label>
              <input id="terms-and-conditions" type="checkbox" required /> I
              accept the{" "}
              <a href="https://www.freecodecamp.org/news/terms-of-service/">
                terms and conditions
              </a>
            </label>
            <ButtonC handleSubmit={handleSubmit} label="SignUp" />
          </form>
          <div>
            <h3>Already have an account.</h3>
            <span>
              <Link to="/signin">Log In</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="img-s">
        <img src="back.jpeg" alt="background" />
      </div>
    </div>
  );
};

export default SignUp;

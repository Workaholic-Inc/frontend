import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button/Button";
import { setToken } from "../../Utils/HelperFunctions";
import { EndPoints } from "../../Utils/EndPoints";
import Alert from "../../Components/Alert/Alert";

const SignIn = () => {
  const backend = new EndPoints();

  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated") || false
  );
  const [val, setVal] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await backend.userLogin(val);
    const response = await res.json();
    if (response.status === 403) {
      window.alert(`${response.message}`);
    } else {
      window.alert(response.msg);
      setAuthenticated(true);
      sessionStorage.setItem("authenticated", true);
      setToken(response.token.access_token);
      navigate("/home");
    }
  };

  useEffect(() => {
    <Alert />;
  }, [authenticated]);

  return (
    <div className="fruad">
      <div className="box-1">
        <div className="kala">
          <h1>Get Started Now</h1>
          <h1>Log In</h1>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            value={val.email}
            handleInput={handleInput}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            required
            placeholder="Enter password"
            value={val.password}
            handleInput={handleInput}
          />
          <Button handleSubmit={handleSubmit} label="Login" />

          <div>
            <h3>Don't have an account</h3>
            <Link to="/signup">
              <span>Register Here</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="img-s">
        <img src="back.jpeg" alt="background" />
      </div>
    </div>
  );
};

export default SignIn;

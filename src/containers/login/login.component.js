import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  console.log(props);
  useEffect(() => {
    if (!error.length) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [error]);
  useEffect(() => {
    if (email.length && password.length) {
      if (password.length < 5) {
        setError("Password > 5");
      } else {
        setError("");
      }
    } else {
      setError("all fields are required");
    }
  }, [email, password]);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    if (!email.length || !password.length) {
      setError("all fields are required");
      return;
    } else {
      const user = { email, password };
      await localStorage.setItem("user", JSON.stringify(user));
      navigate("/products");
    }
  };
  console.log("email", email);
  return (
    <div className="login-container">
      <div>Login</div>
      <div className="row">
        <input placeholder="email" value={email} onChange={handleChangeEmail} />
      </div>
      <div className={"row"}>
        {" "}
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>{error}</div>
      <div className="row">
        {" "}
        <Button type="primary" disabled={buttonDisabled} onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;

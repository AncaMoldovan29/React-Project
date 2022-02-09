import React, { useState, useEffect } from "react";
import logo from "./../logo.svg";
import User from "./user.js";
import Card from "./card";
import UsersList from "./usersList";

function AppContainer() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("default");
  const [inputDisabled, setInputDisabled] = useState(false);
  useEffect(() => {
    console.log("first use effect");
  }, []);
  useEffect(() => {
    if (value.length === 10) {
      setInputDisabled(true);
    }
  }, [value]);

  const helloFunction = () => {
    console.log("hello");
  };
  const items = [
    { name: "marcela", age: "28" },
    { name: "maria", age: "20" },
    { name: "catalina", age: "25" },
    { name: "adela", age: "30" },
  ];
  const users = [
    { name: "marcel", age: "28" },
    { name: "marin", age: "20" },
    { name: "david", age: "25" },
    { name: "adel", age: "30" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello user
        </a>

        <UsersList items={users} />
        <UsersList items={items} />

        <User color="red" callbackFunction={helloFunction} />
        <User color="black" callbackFunction={helloFunction} />
        <div>
          <Card callbackFunction={helloFunction} />
          <input
            onChange={(e) => setValue(e.target.value)}
            disabled={inputDisabled}
            value={value}
          />
        </div>
      </header>
    </div>
  );
}

export default AppContainer;

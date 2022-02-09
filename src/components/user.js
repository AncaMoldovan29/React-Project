import React, { useState } from "react";
import Card from "./card.js";

const User = (props) => {
  const { color, callbackFunction, user } = props;
  const [name, setName] = useState("test");
  return (
    <div>
      User component: {user && user.name} - {user && user.age}
      {/* <Card
        colorFromParent={color}
        name={name}
        callbackFunction={callbackFunction}
      /> */}
    </div>
  );
};
export default User;

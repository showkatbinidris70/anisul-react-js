import React, { useState } from "react";
import Users from "./users.json";

function NestedMapping() {
  const [count, setCount] = useState(0);
  const hangleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>Initial Value : {count}</h1>
      <button onClick={hangleIncrement}>increment</button>
      {Users.map((user, index) => {
        const { fullName, age } = user;
        return (
          <div>
            <p>{fullName}</p>
            <p>{age}</p>
            {user.phones.map((phone, index) => {
              return (
                <div>
                  <p>{phone.home}</p>
                  <p>{phone.office}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default NestedMapping;

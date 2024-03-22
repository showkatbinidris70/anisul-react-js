import React from "react";
import Child from "./Child";

export default function Parent() {
  const handleData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Child onData={handleData} />
    </div>
  );
}

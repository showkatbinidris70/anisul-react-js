import React from "react";

export default function Child(props) {
  const childData = "I am child";
  props.onData(childData);
  return <div></div>;
}

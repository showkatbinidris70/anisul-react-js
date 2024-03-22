import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
         <h1 className="fs-1 text center">Toggle </h1>
      {toggle && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer{" "}
        </p>
      )}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

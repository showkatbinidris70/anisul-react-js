import React, { useState } from "react";

export default function Faq({ id, title, desc }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="d-flex gap-2">
        {title}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </div>
  );
}

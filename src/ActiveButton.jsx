import React from "react";
import { useState } from "react";

const ActiveButton = () => {
    const [active, setActive] = useState("A");
  return (
    <div>
      <h1 className="text-green-800">My village name is Atla</h1>

      <div className="flex gap-7">
        <button
          onClick={() => setActive("A")}
          className={`border px-5 py-2 rounded-2xl cursor-pointer 
          ${active === "A" ? " bg-blue-400 text-white" : ""}`}
        >
          A
        </button>

        <button
          onClick={() => setActive("B")}
          className={`border px-5 py-2 rounded-2xl cursor-pointer 
          ${active === "B" ? "bg-blue-400 text-white" : ""}`}
        >
          B
        </button>
      </div>
    </div>
  );
};

export default ActiveButton;

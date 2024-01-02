import React from "react";
import { useState } from "react";
import Component from "./components/Component";

function App() {
  const [value, setValue] = useState(5);

const handleValueChange = (newValue)=>{
  setValue(newValue)
}



  return (
    <>
      <div className="h-screen w-full bg-slate-700 text-white p-24 text-8xl ">
        <button
          className="px-8 py-2 text-white text-lg bg-zinc-950 rounded-full mb-6"
          onClick={() => setValue(value + 1)}
        >
          {" "}
          increase +
        </button>
        <h1>{value}</h1>
        <button
          className="px-8 py-2 text-white text-lg bg-zinc-950 rounded-full"
          onClick={() => setValue(value - 1)}
        >
          {" "}
          decrease -
        </button>
      <Component name = {value} onValueChange={handleValueChange}/>
      </div>

    </>
  );
}

export default App;

import React, { useState } from "react";

function Component({ name, onValueChange }) {
  const [string, setString] = useState(false);

  const handleStringChange = () => {
    setString(!string);
  };

  const handleValueChange = () => {
    handleStringChange();
    onValueChange(name + 5);
    
  };

  return (
    <>
      <div className="h-60 w-80 bg-zinc-800 mt-9">
        <h1
          className={` ${string === false ? "text-red-700" : "text-blue-700"} `}
        >
          {string === false ? "hello" : "hey"}
        </h1>
        <h3>{name}</h3>

        {/* <button className='text-black text-lg bg-green-400 px-8 py-2 rounded-full' onClick={()=>setString(!string) }  >change</button> */}

        <button
          className="text-black text-lg bg-green-400 px-8 py-2 rounded-full"
          onClick={handleValueChange}
        >
          {" "}
          value
        </button>
      </div>
    </>
  );
}

export default Component;

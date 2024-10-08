import React, { useState } from "react";

function Counter() {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>increment</button>
      <button onClick={() => setcounter(counter - 1)}>decriment</button>
    </div>
  );
}

export default Counter;

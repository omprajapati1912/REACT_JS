import { useState } from "react";
import "./App.css";
import Prop from "./Prop";
// import Counter from "./Counter";
// import Spreding from "./Spreding";

function App() {
  const student = {
    name: "om",
    age: 20,
    city: "kadi",
  };

  const arr = [1, "om ", 2, "laxman"];
  return (
    <>
      {/* <Counter /> */}
      {/* <Spreding /> */}
      <Prop array={arr} studentdata={student} />
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

// # Hooks / useEffect
const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  // useEffect(() => {
  //   sayHello();
  // }, []);

  useEffect(sayHello, [number]);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;

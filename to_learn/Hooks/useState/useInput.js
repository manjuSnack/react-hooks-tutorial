import React, { useState } from "react";
import "./App.css";

// # Hooks / useInput
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    // validator (유효성 검증)
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  // const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => !value.includes("@"); // '@' 입력 안 되게 할 때
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;

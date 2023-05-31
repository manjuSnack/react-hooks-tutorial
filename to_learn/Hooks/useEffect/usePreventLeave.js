import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// # Hooks / usePreventLeave, useConfirm
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;

/* 
# Event

beforeload : Browser window(브라우저 창)이 닫히더라도 function이 실행되도록 허락해주는 이벤트

*/

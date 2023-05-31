import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// # Hooks / useFadeIn
const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration === "number" || typeof delay === "number") {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    } else {
      return;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>페이지 내용</p>
    </div>
  );
};

export default App;

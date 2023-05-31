import React, { useState } from "react";
import "./App.css";

// # Hooks / useState
// function App() {
const App = () => {
  const [item, setItem] = useState(1);
  // const item = useState(1)[0];
  // const setItem = useState(1)[1];

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

// # class로 작성한 방법
class AppAgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Hello {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return { item: state.item + 1 };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return { item: state.item - 1 };
    });
  };
}

// export default App;
export default AppAgly;

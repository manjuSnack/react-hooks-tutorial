import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// # Hooks / usePreventLeave, useConfirm
const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Abouted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;

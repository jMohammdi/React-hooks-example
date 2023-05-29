// src/App.js
import React from "react";
// useReducer:✅
import ExampleReducer from "./components/UseReducer";
// useEffect ✅
import ExampleEffect from "./components/useEffect";
// useState ✅
import ExampleUseState from "./components/UseState";
export default function App() {
  return (
    <div className="App">
      <ExampleReducer />
      <ExampleEffect />
      <ExampleUseState />
    </div>
  );
}

// src/App.js
import React from "react";
// useReducer:✅
// import ExampleReducer from "./components/UseReducer";
// useEffect ✅
// import ExampleEffect from "./components/UseEffect";
// useState ✅
// import ExampleUseState from "./components/UseState";
// useContext ✅
// import ExampleContext from "./components/UseContext";
// useRef ✅
// import ExampleRef from "./components/UseRefs";
// useMemo ✅
// import ExampleMemo from "./components/UseMemo";
// useCallback ✅
import ExampleCallback from "./components/useCallBack";
export default function App() {
  return (
    <div className="App">
      {/* <ExampleReducer />
      <ExampleEffect />
      <ExampleUseState />
      <ExampleContext />
      <ExampleRef /> */}
      <ExampleCallback />
    </div>
  );
}

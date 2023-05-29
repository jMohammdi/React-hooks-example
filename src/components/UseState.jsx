import React, { useState } from "react";

function Counter() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

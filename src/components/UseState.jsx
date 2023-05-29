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
      <p className="text">
        In the code above, we import the useState hook from the react package.
        Within the Counter component, we declare a state variable called count
        using the useState hook and initialize it to 0. We also define two event
        handler functions, increment and decrement, which use the setCount
        function to update the count state variable. The setCount function is
        responsible for updating the state and triggering a re-render of the
        component. In the JSX markup, we display the current value of count and
        provide two buttons to increment and decrement the count. When the
        buttons are clicked, the corresponding event handlers are called, which
        in turn update the state using setCount. Note: This example assumes you
        are using React 16.8 or later, as the useState hook was introduced in
        React 16.8.
      </p>
    </div>
  );
}

export default Counter;

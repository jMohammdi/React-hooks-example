import React, { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log(123);
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  // Define a memoized callback using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
      <p>
        In the code above, we import the useState and useCallback hooks from the
        react package. Inside the App component, we initialize a state variable
        called count using useState to keep track of a count value. We define a
        child component called Button that receives an onClick prop. Using the
        useCallback hook, we create a memoized callback function called
        handleClick. This function increments the count value by 1 when called.
        The dependency array [count] specifies that the callback should be
        recreated if the count value changes. In the JSX markup, we display the
        current value of count and pass the handleClick function as the onClick
        prop to the Button component. By using useCallback to memoize the
        handleClick function, we ensure that the function is not recreated on
        every render unless the dependencies (count in this case) change. This
        can be helpful in scenarios where the callback is passed as a prop to
        child components to prevent unnecessary re-renders.
      </p>
    </div>
  );
}

export default App;

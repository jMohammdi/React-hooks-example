import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Run the effect only on the initial render
  useEffect(() => {
    console.log("Component mounted");

    // Clean-up function
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Run the effect whenever the 'count' state changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Run the effect after every render
  useEffect(() => {
    console.log("Render complete");

    // Prevent unnecessary effect runs with cleanup flag
    let cleanup = false;

    const fetchData = async () => {
      try {
        // Simulating asynchronous data fetching
        const response = await fetch("https://api.example.com/data");
        if (!cleanup) {
          const data = await response.json();
          console.log("Fetched data:", data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      cleanup = true;
      console.log("Cleanup complete");
    };
  });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ExampleComponent;

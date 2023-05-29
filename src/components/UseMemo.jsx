import React, { useMemo } from "react";

function ExpensiveCalculation({ value }) {
  // Perform an expensive calculation only when the value changes
  const result = useMemo(() => {
    // Perform the expensive calculation here
    console.log("Performing expensive calculation...");
    let sum = 0;
    for (let i = 1; i <= value; i++) {
      sum += i;
    }
    return sum;
  }, [value]);

  return (
    <div>
      <h1>Result: {result}</h1>
      <p>
        In the code above, we import the useMemo hook from the react package.
        The ExpensiveCalculation component receives a prop called value. Inside
        the component, we use the useMemo hook to memoize the result of an
        expensive calculation. The expensive calculation is defined as an
        anonymous function passed as the first argument to useMemo. This
        function is only executed when the value of value changes. The second
        argument of useMemo is an array that contains the dependencies for the
        memoization. In this case, we pass [value] to indicate that the result
        should be recalculated whenever the value changes. The result of the
        expensive calculation is stored in the result variable, and it will be
        memoized and only re-calculated if the value changes. In the JSX markup,
        we simply display the result in a element. By using useMemo, you can
        optimize the performance of your React components by memoizing expensive
        computations and ensuring that they are only recalculated when
        necessary.
      </p>
    </div>
  );
}

export default ExpensiveCalculation;

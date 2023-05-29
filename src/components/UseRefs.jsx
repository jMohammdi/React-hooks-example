import React, { useRef } from "react";

function TextInput() {
  // Create a ref using useRef
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
      <p className="text">
        In the code above, we import the useRef hook from the react package.
        Within the TextInput component, we create a ref called inputRef using
        the useRef hook and initialize it to null. We then define a function
        called focusInput that uses the current property of the inputRef to
        access the actual DOM node of the input element and call the focus
        method on it. In the JSX markup, we attach the inputRef ref to the input
        element using the ref attribute. This allows us to reference the input
        element and access its properties and methods. We also provide a button
        that, when clicked, calls the focusInput function, which in turn focuses
        the input field by calling the focus method on the DOM node referenced
        by the inputRef. Using the useRef hook in this way allows you to access
        and manipulate DOM elements directly in your React components
      </p>
    </div>
  );
}

export default TextInput;

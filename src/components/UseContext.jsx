import React, { useContext } from "react";

// Create a context
const ThemeContext = React.createContext();

// Define a component that uses the context
function ThemeButton() {
  // Access the context value using useContext hook
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.color }}>
      I am a themed button
    </button>
  );
}

// Define another component that provides the context value
function App() {
  // Define the context value
  const theme = {
    background: "lime",
    color: "white",
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Themed App</h1>
        <ThemeButton />

        <p className="text">
          In the code above, we first create a context using the createContext
          function from React. The ThemeContext variable represents our context.
          Next, we define a ThemeButton component that uses the useContext hook
          to access the context value. Inside the component, we use the theme
          value from the context to style the button. Finally, we define an App
          component that provides the context value using the
          ThemeContext.Provider component. In this example, we pass a theme
          object as the value prop to the Provider, which contains the
          background and color styles. By wrapping the ThemeButton component
          inside the ThemeContext.Provider, the ThemeButton component can access
          the context value and style itself accordingly. Note that the
          useContext hook is used within functional components. It allows you to
          access the current context value provided by a Context.Provider
          component up the component tree.
        </p>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

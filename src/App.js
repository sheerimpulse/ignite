import React from "react";
//Components and Pages
import Home from "./Pages/Home";
import GlobalStyle from "./Components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

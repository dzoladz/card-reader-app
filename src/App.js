import React from "react";
import { Provider } from "./AppContext";
import "./App.css";
import Header from "./Components/Header/Header";
import ImaginaryArchitecturesPrompt from "./Components/ImaginaryArchitectures/Prompt";
import ImaginaryArchitecturesAction from "./Components/ImaginaryArchitectures/Action";

function App() {
  return (
    <Provider>
      <Header />
      <ImaginaryArchitecturesPrompt />
      <ImaginaryArchitecturesAction />
    </Provider>
  );
}

export default App;

import React from "react";
import { Provider } from "./AppContext";
import "./App.css";
import Header from "./Components/Header/Header";
import ImaginaryArchitecturesPrompt from "./Components/ImaginaryArchitectures/Prompt";
import ImaginaryArchitecturesAction from "./Components/ImaginaryArchitectures/Action";
import IAgreePrompt from "./Components/IAgree/Prompt";
import IAgreeAction from "./Components/IAgree/Action";
import UmbertoEcoPrompt from "./Components/UmbertoEco/Prompt";
import UmbertoEcoAction from "./Components/UmbertoEco/Action";
import PatentDependingPrompt from "./Components/PatentDepending/Prompt";
import PatentDependingAction from "./Components/PatentDepending/Action";

function App() {
  return (
    <Provider>
      <Header />
      <ImaginaryArchitecturesPrompt />
      <ImaginaryArchitecturesAction />
      <IAgreePrompt />
      <IAgreeAction />
      <UmbertoEcoPrompt />
      <UmbertoEcoAction />
      <PatentDependingPrompt />
      <PatentDependingAction />
    </Provider>
  );
}

export default App;

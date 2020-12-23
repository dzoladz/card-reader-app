import React from "react";
import { Provider } from "./AppContext";
import "./App.css";
import Header from "./Components/Header/Header";
import YesNoAnswer2 from "./Components/YesNoQuestion/YesNoAnswer2";
import ExploreTest from "./Components/ExploreCards/ExploreTest";


function App() {
  return (
    <Provider>
      <Header />
      <ExploreTest />
      <YesNoAnswer2 />
    </Provider>
  );
}

export default App;

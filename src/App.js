import React from "react";
import { Provider } from "./AppContext";
import "./App.css";
import Header from "./Components/Header/Header";
import YesNoQuestion from "./Components/YesNoQuestion/YesNoQuestion";
import YesNoAnswer from "./Components/YesNoQuestion/YesNoAnswer";
import YesNoAnswer2 from "./Components/YesNoQuestion/YesNoAnswer2";
import ExploreCards from "./Components/ExploreCards/ExploreCards";
import ExploreTest from "./Components/ExploreCards/ExploreTest";
import Modal from "./Components/Modal/Modal";


function App() {
  return (
    <Provider>
      <Header />
      <YesNoQuestion />
      <YesNoAnswer />
      <ExploreCards />
      <ExploreTest />
      <YesNoAnswer2 />
      <Modal />
    </Provider>
  );
}

export default App;

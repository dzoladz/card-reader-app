import React, { useState } from "react";
import IAcardsJSON from "./Components/JSON/deckIA.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [IAcardDeck, setIACardDeck] = useState([...IAcardsJSON]);
  const [showIAP, setShowIAP] = useState(false);
  const [showIAA, setShowIAA] = useState(false);


  const shuffle = array => {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const imaginaryArchitecturesPrompt = () => {
    setShowIAP(true);
  };

  const imaginaryArchitecturesAction = () => {
  setIACardDeck(shuffle(IAcardDeck));
  if (showIAA === false) {
    setShowIAA(true);
  } else {
    setShowIAA(false);
    setTimeout(()=> {
      setShowIAA(true)
    }, 0);
   };
 };

  return (
    <Context.Provider
      value={{
        showIAP,
        showIAA,
        imaginaryArchitecturesPrompt,
        imaginaryArchitecturesAction,
        IAcardDeck,
        setIACardDeck
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

import React, { useState } from "react";
import cardsJSON from "./Components/JSON/deck.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [cardDeck, setCardDeck] = useState([...cardsJSON]);
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
  setCardDeck(shuffle(cardDeck));
    setShowIAP(true);
    setShowIAA(true);
  };

  return (
    <Context.Provider
      value={{
        cardDeck,
        showIAP,
        showIAA,
        imaginaryArchitecturesPrompt,
        imaginaryArchitecturesAction
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

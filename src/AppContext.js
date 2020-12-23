import React, { useState } from "react";
import cardsJSON from "./Components/JSON/deck.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [cardDeck, setCardDeck] = useState([...cardsJSON]);
  const [showYNA2, setShowYNA2] = useState(false);
  const [showDCZ, setShowDCZ] = useState(false);

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

  const yesNoAnswer2 = () => {
  setCardDeck(shuffle(cardDeck));
    setShowDCZ(true);
    setShowYNA2(true);
  };

  const exploreTheDeck2 = () => {
    setShowDCZ(true);
  };

  return (
    <Context.Provider
      value={{
        cardDeck,
        showYNA2,
        showDCZ,
        yesNoAnswer2,
        exploreTheDeck2
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

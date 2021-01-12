import React, { useState } from "react";
import IAcardsJSON from "./Components/JSON/deckIA.json";
import IGcardsJSON from "./Components/JSON/deckIG.json";
import UEcardsJSON from "./Components/JSON/deckUE.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [IAcardDeck, setIACardDeck] = useState([...IAcardsJSON]);
  const [IGcardDeck, setIGCardDeck] = useState([...IGcardsJSON]);
  const [UEcardDeck, setUECardDeck] = useState([...UEcardsJSON]);
  const [showIAP, setShowIAP] = useState(false);
  const [showIAA, setShowIAA] = useState(false);
  const [showIGP, setShowIGP] = useState(false);
  const [showIGA, setShowIGA] = useState(false);
  const [showUEP, setShowUEP] = useState(false);
  const [showUEA, setShowUEA] = useState(false);


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
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowIAP(true);
  };

  const imaginaryArchitecturesAction = () => {
      setIACardDeck(shuffle(IAcardDeck));
      if (showIAA === false) {
          setShowIAA(true);
      } else {
          setShowIAA(false);
          setTimeout(() => {
              setShowIAA(true)
          }, 0);
      }
  };


  const iAgreePrompt = () => {
    setShowIAP(false);
    setShowIAA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowIGP(true);
  };

  const iAgreeAction = () => {
      setIGCardDeck(shuffle(IGcardDeck));
      if (showIGA === false) {
          setShowIGA(true);
      } else {
          setShowIGA(false);
          setTimeout(() => {
              setShowIGA(true)
          }, 0);
      }
  };


  const umbertoEcoPrompt = () => {
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowUEP(true);
  };

  const umbertoEcoAction = () => {
      setUECardDeck(shuffle(UEcardDeck));
      if (showUEA === false) {
          setShowUEA(true);
      } else {
          setShowUEA(false);
          setTimeout(() => {
              setShowUEA(true)
          }, 0);
      }
  };


  return (
    <Context.Provider
      value={{
        showIAP,
        showIAA,
        imaginaryArchitecturesPrompt,
        imaginaryArchitecturesAction,
        IAcardDeck,
        setIACardDeck,
        showIGP,
        showIGA,
        iAgreePrompt,
        iAgreeAction,
        IGcardDeck,
        setIGCardDeck,
        showUEP,
        showUEA,
        umbertoEcoPrompt,
        umbertoEcoAction,
        UEcardDeck,
        setUECardDeck
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

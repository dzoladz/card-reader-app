import React, { useState } from "react";
import IAcardsJSON from "./Components/JSON/deckIA.json";
import IGcardsJSON from "./Components/JSON/deckIG.json";
import UEcardsJSON from "./Components/JSON/deckUE.json";
import PDcardsJSON from "./Components/JSON/deckPD.json";
import CCcardsJSON from "./Components/JSON/deckCC.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [IAcardDeck, setIACardDeck] = useState([...IAcardsJSON]);
  const [IGcardDeck, setIGCardDeck] = useState([...IGcardsJSON]);
  const [UEcardDeck, setUECardDeck] = useState([...UEcardsJSON]);
  const [PDcardDeck, setPDCardDeck] = useState([...PDcardsJSON]);
  const [CCcardDeck, setCCCardDeck] = useState([...CCcardsJSON]);
  const [showIAP, setShowIAP] = useState(false);
  const [showIAA, setShowIAA] = useState(false);
  const [showIGP, setShowIGP] = useState(false);
  const [showIGA, setShowIGA] = useState(false);
  const [showUEP, setShowUEP] = useState(false);
  const [showUEA, setShowUEA] = useState(false);
  const [showPDP, setShowPDP] = useState(false);
  const [showPDA, setShowPDA] = useState(false);
  const [showCCP, setShowCCP] = useState(false);
  const [showCCA, setShowCCA] = useState(false);


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
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
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
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
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
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
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

  const patentDependingPrompt = () => {
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowPDP(true);
  };

  const patentDependingAction = () => {
      setPDCardDeck(shuffle(PDcardDeck));
      if (showPDA === false) {
          setShowPDA(true);
      } else {
          setShowPDA(false);
          setTimeout(() => {
              setShowPDA(true)
          }, 0);
      }
  };


  const cultureClashPrompt = () => {
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(true);
  };

  const cultureClashAction = () => {
      setCCCardDeck(shuffle(CCcardDeck));
      if (showCCA === false) {
          setShowCCA(true);
      } else {
          setShowCCA(false);
          setTimeout(() => {
              setShowCCA(true)
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
        setUECardDeck,
        showPDP,
        showPDA,
        patentDependingPrompt,
        patentDependingAction,
        PDcardDeck,
        setPDCardDeck,
        showCCP,
        showCCA,
        cultureClashPrompt,
        cultureClashAction,
        CCcardDeck,
        setCCCardDeck
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

import React, { useState } from "react";
import cardsJSON from "./Components/JSON/deck.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [cardDeck, setCardDeck] = useState([...cardsJSON]);
  const [showTCD, setShowTCD] = useState(false);
  const [showYNQ, setShowYNQ] = useState(false);
  const [showYNA, setShowYNA] = useState(false);
  const [showYNA2, setShowYNA2] = useState(false);
  const [showETT, setShowETT] = useState(false);
  const [showDCZ, setShowDCZ] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalCard, setModalCard] = useState([]);
  const [displaySuit, setDisplaySuit] = useState([]);


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

  const yesNoQuestion = () => {
    setCardDeck(shuffle(cardDeck));
    setUserQuestion("");
    setShowTCD(false);
    setShowYNA(false);
    setShowETT(false);
    setShowYNQ(true);
  };

  const yesNoAnswer = () => {
    setShowTCD(false);
    setShowYNQ(false);
    setShowETT(false);
    setShowYNA(true);
  };

  const yesNoAnswer2 = () => {
    setShowTCD(false);
    setShowYNQ(false);
    setShowETT(false);
    setShowDCZ(true);
    setShowYNA2(true);
  };

  const handleInputChange = event => setUserQuestion(event.target.value);

  const exploreTheDeck = () => {
    setShowTCD(false);
    setShowYNQ(false);
    setShowYNA(false);
    setShowETT(true);
  };

  const exploreTheDeck2 = () => {
    setShowDCZ(true);
    setShowTCD(false);
    setShowYNQ(false);
    setShowYNA(false);
    setShowETT(false);
  };

  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  const showCardModal = displaycard => {
    setModalCard(displaycard);
    handleShow();
  };

  return (
    <Context.Provider
      value={{
        cardDeck,
        showTCD,
        showYNQ,
        showYNA,
        showYNA2,
        showETT,
        showDCZ,
        userQuestion,
        modalShow,
        modalCard,
        displaySuit,
        setDisplaySuit,
        yesNoQuestion,
        yesNoAnswer,
        yesNoAnswer2,
        handleInputChange,
        exploreTheDeck,
        exploreTheDeck2,
        handleClose,
        handleShow,
        showCardModal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

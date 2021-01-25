import React, { useState } from "react";
import IAcardsJSON from "./Components/JSON/deckIA.json";
import IGcardsJSON from "./Components/JSON/deckIG.json";
import UEcardsJSON from "./Components/JSON/deckUE.json";
import PDcardsJSON from "./Components/JSON/deckPD.json";
import CCcardsJSON from "./Components/JSON/deckCC.json";
import STcardsJSON from "./Components/JSON/deckST.json";
import SCcardsJSON from "./Components/JSON/deckSC.json";
import UMKcardsJSON from "./Components/JSON/deckUMK.json";
import AAcardsJSON from "./Components/JSON/deckAA.json";
import APcardsJSON from "./Components/JSON/deckAP.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
  const [IAcardDeck, setIACardDeck] = useState([...IAcardsJSON]);
  const [IGcardDeck, setIGCardDeck] = useState([...IGcardsJSON]);
  const [UEcardDeck, setUECardDeck] = useState([...UEcardsJSON]);
  const [PDcardDeck, setPDCardDeck] = useState([...PDcardsJSON]);
  const [CCcardDeck, setCCCardDeck] = useState([...CCcardsJSON]);
  const [STcardDeck, setSTCardDeck] = useState([...STcardsJSON]);
  const [SCcardDeck, setSCCardDeck] = useState([...SCcardsJSON]);
  const [UMKcardDeck, setUMKCardDeck] = useState([...UMKcardsJSON]);
  const [AAcardDeck, setAACardDeck] = useState([...AAcardsJSON]);
  const [APcardDeck, setAPCardDeck] = useState([...APcardsJSON]);
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
  const [showSTP, setShowSTP] = useState(false);
  const [showSTA, setShowSTA] = useState(false);
  const [showSCP, setShowSCP] = useState(false);
  const [showSCA, setShowSCA] = useState(false);
  const [showUMKP, setShowUMKP] = useState(false);
  const [showUMKA, setShowUMKA] = useState(false);
  const [showAAP, setShowAAP] = useState(false);
  const [showAAA, setShowAAA] = useState(false);
  const [showAPP, setShowAPP] = useState(false);
  const [showAPA, setShowAPA] = useState(false);
  const [modalGeneralShow, setModalGeneralShow] = useState(false);
  const [modalIAShow, setModalIAShow] = useState(false);


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
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
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
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
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
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
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
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
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
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowSTP(false);
    setShowSTA(false);
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


  const slowTechnologyPrompt = () => {
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(true);
  };

  const slowTechnologyAction = () => {
      setSTCardDeck(shuffle(STcardDeck));
      if (showSTA === false) {
          setShowSTA(true);
      } else {
          setShowSTA(false);
          setTimeout(() => {
              setShowSTA(true)
          }, 0);
      }
  };


  const smellOfControlPrompt = () => {
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowSCP(true);
  };

  const smellOfControlAction = () => {
      setSCCardDeck(shuffle(SCcardDeck));
      if (showSCA === false) {
          setShowSCA(true);
      } else {
          setShowSCA(false);
          setTimeout(() => {
              setShowSCA(true)
          }, 0);
      }
  };


  const unitedMicroKingdomsPrompt = () => {
    setShowAPP(false);
    setShowAPA(false);
    setShowAAP(false);
    setShowAAA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowUMKP(true);
  };

  const unitedMicroKingdomsAction = () => {
      setUMKCardDeck(shuffle(UMKcardDeck));
      if (showUMKA === false) {
          setShowUMKA(true);
      } else {
          setShowUMKA(false);
          setTimeout(() => {
              setShowUMKA(true)
          }, 0);
      }
  };


  const auralArchitecturesPrompt = () => {
    setShowAPP(false);
    setShowAPA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowAAP(true);
  };

  const auralArchitecturesAction = () => {
      setAACardDeck(shuffle(AAcardDeck));
      if (showAAA === false) {
          setShowAAA(true);
      } else {
          setShowAAA(false);
          setTimeout(() => {
              setShowAAA(true)
          }, 0);
      }
  };


  const architecturalPhotographyPrompt = () => {
    setShowAAP(false);
    setShowAAA(false);
    setShowUMKP(false);
    setShowUMKA(false);
    setShowSCP(false);
    setShowSCA(false);
    setShowIGP(false);
    setShowIGA(false);
    setShowUEP(false);
    setShowUEA(false);
    setShowPDP(false);
    setShowPDA(false);
    setShowCCP(false);
    setShowCCA(false);
    setShowSTP(false);
    setShowSTA(false);
    setShowIAP(false);
    setShowIAA(false);
    setShowAPP(true);
  };

  const architecturalPhotographyAction = () => {
      setAPCardDeck(shuffle(APcardDeck));
      if (showAPA === false) {
          setShowAPA(true);
      } else {
          setShowAPA(false);
          setTimeout(() => {
              setShowAPA(true)
          }, 0);
      }
  };




  const handleGeneralShow = () => setModalGeneralShow(true);
  const handleGeneralClose = () => setModalGeneralShow(false);

  const showGeneralModal = () => {
    handleGeneralShow();
  };

  const handleIAShow = () => setModalIAShow(true);
  const handleIAClose = () => setModalIAShow(false);

  const showIAModal = () => {
    handleIAShow();
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
        setCCCardDeck,
        showSTP,
        showSTA,
        slowTechnologyPrompt,
        slowTechnologyAction,
        STcardDeck,
        setSTCardDeck,
        showSCP,
        showSCA,
        smellOfControlPrompt,
        smellOfControlAction,
        SCcardDeck,
        setSCCardDeck,
        showUMKP,
        showUMKA,
        unitedMicroKingdomsPrompt,
        unitedMicroKingdomsAction,
        UMKcardDeck,
        setUMKCardDeck,
        showAAP,
        showAAA,
        auralArchitecturesPrompt,
        auralArchitecturesAction,
        AAcardDeck,
        setAACardDeck,
        showAPP,
        showAPA,
        architecturalPhotographyPrompt,
        architecturalPhotographyAction,
        APcardDeck,
        setAPCardDeck,
        modalGeneralShow,
        handleGeneralClose,
        handleGeneralShow,
        showGeneralModal,
        modalIAShow,
        handleIAClose,
        handleIAShow,
        showIAModal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

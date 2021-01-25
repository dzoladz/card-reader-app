import React, { useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import { Context } from "../../AppContext";

const Header = () => {
    const { showGeneralModal } = useContext(
    Context
  );

  return (
    <Jumbotron fluid className="jumbotron text-center p-3">
      <h1 className="display-4 text-light">Speculative Card Deck
      <img src="../icons/info-circle.svg" alt="information icon" class="general-icon" onClick={() => showGeneralModal()} />
      </h1>
    </Jumbotron>
  );
};

export default Header;
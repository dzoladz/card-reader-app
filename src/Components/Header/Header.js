import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = () => {

  return (
    <Jumbotron fluid className="jumbotron text-center p-3">
      <h1 className="display-4 text-light">Speculative Card Deck</h1>
    </Jumbotron>
  );
};

export default Header;

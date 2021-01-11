import React, { useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const Header = () => {
  const { imaginaryArchitecturesPrompt } = useContext(Context);
  const { iAgreePrompt } = useContext(Context);

  return (
    <Jumbotron fluid className="jumbotron text-center p-3">
      <h1 className="display-4 text-light">Speculative Card Deck</h1>
      <Button name="Imaginary Architectures" onClick={imaginaryArchitecturesPrompt} />
      <Button name="I Agree" onClick={iAgreePrompt} />
    </Jumbotron>
  );
};

export default Header;

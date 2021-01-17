import React, { useContext } from "react";
import { Jumbotron } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const Header = () => {
  const { imaginaryArchitecturesPrompt } = useContext(Context);
  const { iAgreePrompt } = useContext(Context);
  const { umbertoEcoPrompt } = useContext(Context);
  const { patentDependingPrompt } = useContext(Context);
  const { cultureClashPrompt } = useContext(Context);
  const { slowTechnologyPrompt } = useContext(Context);
  const { smellOfControlPrompt } = useContext(Context);
  const { unitedMicroKingdomsPrompt } = useContext(Context);
  const { auralArchitecturesPrompt } = useContext(Context);

  return (
    <Jumbotron fluid className="jumbotron text-center p-3">
      <h1 className="display-4 text-light">Speculative Card Deck</h1>
      <Button name="Imaginary Architectures" onClick={imaginaryArchitecturesPrompt} />
      <Button name="I Agree" onClick={iAgreePrompt} />
      <Button name="How to Organize a Public Library" onClick={umbertoEcoPrompt} />
      <Button name="Patent Depending" onClick={patentDependingPrompt} />
      <Button name="Sampler - Culture Clash" onClick={cultureClashPrompt} />
      <Button name="Slow Technology" onClick={slowTechnologyPrompt} />
      <Button name="Smell of Control" onClick={smellOfControlPrompt} />
      <Button name="United Micro Kingdoms" onClick={unitedMicroKingdomsPrompt} />
      <Button name="Aural Architectures" onClick={auralArchitecturesPrompt} />
    </Jumbotron>
  );
};

export default Header;

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const UnitedMicroKingdomsPrompt = () => {
  const { showUMKP, unitedMicroKingdomsAction } = useContext(Context);

    if (!showUMKP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              The <a href="http://unitedmicrokingdoms.org/" rel="noopener noreferrer" target="_blank">United Micro Kingdoms</a> by <a href="http://www.dunneandraby.co.uk/content/projects" rel="noopener noreferrer" target="_blank">Dunne and Raby</a> (2013) is a speculative future project. This imaginary kingdom has four counties, each with its own government and culture. Digitarians rely on digital technology and algorithms. Communo-nuclearists use nuclear power for energy and maintain a no-growth population. Bioliberals invest in biotechnology and each person produces their own needed energy. Anarcho-evolutionists do not use technology, adjusting their lifestyles to benefit the planet, with little regulation except to harm none. Exploring our roles in a speculative community would enable us to answer a key question about praxis: “how do libraries contribute to and participate in cultural production?” (Budd 2003, 22).
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={unitedMicroKingdomsAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default UnitedMicroKingdomsPrompt;

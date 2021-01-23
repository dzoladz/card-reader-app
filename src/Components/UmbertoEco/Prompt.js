import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const UmbertoEcoPrompt = () => {
  const { showUEP, umbertoEcoAction } = useContext(Context);

    if (!showUEP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              Read Umberto Eco’s four-page numbered list “How to Organize a Public Library” from <a href="http://www.worldcat.org/oclc/1204229813" rel="noopener noreferrer" target="_blank">How to Travel with a Salmon</a> (1994) or the version in Candida Höfer’s <a href="http://www.worldcat.org/oclc/1078884037" rel="noopener noreferrer" target="_blank">Libraries</a>. Eco uses speculative fiction to demonstrate the ideal library by creating a bad library, where disorder and chaos reign in cataloging, subject headings, borrowing periods, and lack of amenities.
          </p>
          <p>
              In <a href="http://www.worldcat.org/oclc/937351556" rel="noopener noreferrer" target="_blank">The Semantic Turn: A New Foundation for Design</a> (2006), Klaus Krippendorf discusses reframing as a process for “creating spaces of possible futures” (216). Eco’s speculative essay uses reframing and serves as an example of how we may eliminate the “cognitive trap” in which we often find ourselves safely lingering (217).
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={umbertoEcoAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default UmbertoEcoPrompt;

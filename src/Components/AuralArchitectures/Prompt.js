import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const AuralArchitecturesPrompt = () => {
  const { showAAP, auralArchitecturesAction } = useContext(Context);

    if (!showAAP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              <a href="http://www.blesser.net/downloads/Q-A%20Dialog%20Handout.pdf" rel="noopener noreferrer" target="_blank">Aural Architecture</a> is a disciplinary examination of attentive listening. “Aural architecture contains at least <a href="http://acoustics.org/pressroom/httpdocs/156th/blesser.html" rel="noopener noreferrer" target="_blank">five types of spatiality</a>: navigational, social, musical, aesthetic, and symbolic… <em>Navigational spatiality</em> is the ability to use auditory spatial awareness to “visualize” a space in order to navigate around objects and geometries… <em>Social spatiality</em> refers to the way spatial acoustics influences the behavior of the inhabitants… <em>Symbolic spatiality</em> refers to those aural attributes that have acquired additional meaning by being associated with specific activities occurring within particular spaces… <em>Aesthetic spatiality</em> refers to the experience of localized acoustics that provide varying auditory texture and variety… <em>Music spatiality</em> refers to the influence of the acoustics of a space on the music performed within that space.”
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={auralArchitecturesAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default AuralArchitecturesPrompt;

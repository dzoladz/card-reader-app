import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const ImaginaryArchitecturesAction = () => {
  const { showIAA, IAcardDeck, showIAModal } = useContext(
    Context
  );

  if (!showIAA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={IAcardDeck[0].image}
            alt={IAcardDeck[0].name}
            delay={0}
            value={IAcardDeck[0].id}
            onClick={() => showIAModal()}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{IAcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ImaginaryArchitecturesAction;

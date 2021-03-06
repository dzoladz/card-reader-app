import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const AuralArchitecturesAction = () => {
  const { showAAA, AAcardDeck, showAAModal } = useContext(
    Context
  );

  if (!showAAA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={AAcardDeck[0].image}
            alt={AAcardDeck[0].name}
            delay={0}
            value={AAcardDeck[0].id}
            onClick={() => showAAModal()}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{AAcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AuralArchitecturesAction;

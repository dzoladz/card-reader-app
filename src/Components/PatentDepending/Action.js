import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const PatentDependingAction = () => {
  const { showPDA, PDcardDeck, showPDModal } = useContext(
    Context
  );

  if (!showPDA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={PDcardDeck[0].image}
            alt={PDcardDeck[0].name}
            delay={0}
            value={PDcardDeck[0].id}
            onClick={() => showPDModal()}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{PDcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PatentDependingAction;

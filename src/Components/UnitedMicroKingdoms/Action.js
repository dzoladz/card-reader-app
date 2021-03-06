import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const UnitedMicroKingdomsAction = () => {
  const { showUMKA, UMKcardDeck, showUMKModal } = useContext(
    Context
  );

  if (!showUMKA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={UMKcardDeck[0].image}
            alt={UMKcardDeck[0].name}
            delay={0}
            value={UMKcardDeck[0].id}
            onClick={() => showUMKModal()}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{UMKcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default UnitedMicroKingdomsAction;

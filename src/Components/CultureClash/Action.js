import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const CultureClashAction = () => {
  const { showCCA, CCcardDeck } = useContext(
    Context
  );

  if (!showCCA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={CCcardDeck[0].image}
            alt={CCcardDeck[0].name}
            delay={0}
            value={CCcardDeck[0].id}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{CCcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CultureClashAction;

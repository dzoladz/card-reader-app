import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const IAgreeAction = () => {
  const { showIGA, IGcardDeck, showIGModal } = useContext(
    Context
  );

  if (!showIGA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={IGcardDeck[0].image}
            alt={IGcardDeck[0].name}
            delay={0}
            value={IGcardDeck[0].id}
            onClick={() => showIGModal()}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{IGcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default IAgreeAction;

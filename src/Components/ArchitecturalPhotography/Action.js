import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../../AppContext";
import SingleCard from "../SingleCard/SingleCard";

const ArchitecturalPhotographyAction = () => {
  const { showAPA, APcardDeck, showAPModal } = useContext(
    Context
  );

  if (!showAPA) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center extra-top-margin">
        <Col xs={6} sm={4} md={3}>
          <SingleCard
            src={APcardDeck[0].image}
            alt={APcardDeck[0].name}
            delay={0}
            value={APcardDeck[0].id}
            onClick={() => showAPModal()}
          />
        </Col>
        <Col xs={12} sm={8} md={9} className="tarot-read animated fadeIn delay-1s slower">
          <p>{APcardDeck[0].action}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ArchitecturalPhotographyAction;

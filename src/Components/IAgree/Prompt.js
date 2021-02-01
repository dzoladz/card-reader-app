import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const IAgreePrompt = () => {
  const { showIGP, iAgreeAction } = useContext(Context);

    if (!showIGP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              Dima Yarovinsky’s <a href="https://boingboing.net/2018/05/07/tldr.html" rel="noopener noreferrer" target="_blank">I Agree</a> was showcased at the 2018 <a href="https://vizknowledge.aalto.fi/" rel="noopener noreferrer" target="_blank">Visualizing Knowledge</a> conference. Each scroll is the terms of service for a popular social media platform. Instagram wins, with over 17,000 words that would take 86 minutes to read. Aaron Betsky (2003) says, “by making the presence of data explicit, we can become aware of the power it has over our lives. By showing us what will happen if we do not control this data, we can experience a counter-model to what we might think of as the less-than-desirable future of the complete, uncontrollable, and unknowable artificiality” (47-48).
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={iAgreeAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default IAgreePrompt;

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const SlowTechnologyPrompt = () => {
  const { showSTP, slowTechnologyAction } = useContext(Context);

    if (!showSTP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              <a href="http://redstrom.se/johan/slowtechnology/project/" rel="noopener noreferrer" target="_blank">Slow technology</a> is “design for technology aimed at reflection and moments of mental rest rather than efficiency in performance” (Hallnäs and Redström 2001). They ask “what are the characteristics of information and computing technology that initiate changes towards a more reflective environment?” (ibid., 202). This is a way to give people time to understand how and why something works. Often we employ technology in ways to speed up processes and access for our users (user-friendliness). But, in doing so, we mask the complexity and intentionality of the process and how the technology works.
          </p>
          <p>
              One outcome of their slow technology exploration is <a href="http://redstrom.se/johan/slowtechnology/project/papers/chatterbox_gi.pdf" rel="noopener noreferrer" target="_blank">The Chatterbox</a>. The ChatterBox searches electronic material sent among people in an office, then storing it in a database for analysis. It generates new sentences from the stored material and publicly displays this information. At first, The ChatterBox seems random, but slowly people become aware of words and phrases that are familiar and telling. Through remix, the technology suggests privacy, but over time anonymity is lost.
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={slowTechnologyAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default SlowTechnologyPrompt;

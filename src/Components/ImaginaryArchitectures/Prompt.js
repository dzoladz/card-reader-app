import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const ImaginaryArchitecturesPrompt = () => {
  const { showIAP, imaginaryArchitecturesAction } = useContext(Context);

    if (!showIAP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={11}>
          <p>
            <a href="https://www.dezeen.com/2010/03/10/imaginary-architectures-by-el-ultimo-grito/" rel="noopener noreferrer" target="_blank">Imaginary Architectures</a> (2010) from the design group <a href="https://elultimogrito.website/work" rel="noopener noreferrer" target="_blank">El Ultimo Grito</a> are blown glass representations of different types of buildings. Reduced to mere lines and shapes, emphasizing movement through space, these objects use the minimum elements necessary to define the building’s primary purpose. In one work, a hotel is comprised of a lower open space (a lobby) with small, repetitive nodes of spaces above (rooms). The group’s process aligns with "a long tradition of what in Italy is called Architectura da Carta, visionary explorations of the unbuilt and unbuildable" (Katz in Nonobject 2011, xxv). Of the project, El Ultimo Grito state:
          </p>
          <p className="blockquote">
            “When you try to ‘draw’ on memory you always pull along a learnt way of looking at things, but this memory is never entirely perfect: it has lost or gained along the way… We like this exercise because it becomes a dialogue between the information you remember, methods of representation and your ability to implement them. But also these become elements that you can play with, which help you deliberately to interpret the world in a different way.” from <a href="https://www.worldcat.org/title/abandon-architectures/oclc/913429960" rel="noopener noreferrer" target="_blank">El Ultimo Grito: Abandon Architectures</a>
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={imaginaryArchitecturesAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default ImaginaryArchitecturesPrompt;

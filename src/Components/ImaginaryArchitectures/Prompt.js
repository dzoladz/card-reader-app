import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const ImaginaryArchitecturesPrompt = () => {
  const { showIAP, imaginaryArchitecturesAction } = useContext(Context);

    if (!showIAP) {
    return null;
  }

  return (
    <Container>
      <Row>
      <p className="text animated fadeIn slower">
      Imaginary Architectures (2010) from the design group El Ultimo Grito are blown glass representations of different types of buildings. Reduced to mere lines and shapes, emphasizing movement through space, these objects use the minimum elements necessary to define the building’s primary purpose. In one work, a hotel is comprised of a lower open space (a lobby) with small, repetitive nodes of spaces above (rooms). The group’s process aligns with "a long tradition of what in Italy is called Architectura da Carta, visionary explorations of the unbuilt and unbuildable" (Katz in Nonobject 2011, xxv). Of the project, El Ultimo Grito state:
      </p>
      </Row>
      <Row className="justify-content-center animated fadeIn slower delay-3s">
      <Button name="Draw Card" onClick={imaginaryArchitecturesAction} />
      </Row>
    </Container>
  );
};

export default ImaginaryArchitecturesPrompt;

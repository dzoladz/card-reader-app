import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const ArchitecturalPhotographyPrompt = () => {
  const { showAPP, architecturalPhotographyAction } = useContext(Context);

    if (!showAPP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              Architectural photography can also be a critical design practice because it “has the ability to communicate wider truths about society” (Pardo and Redstone 2014, 17). <a href="https://www.artsy.net/artist-series/candida-hofer-libraries" rel="noopener noreferrer" target="_blank">Candida Höfer’s photographs of libraries</a>, museums, and other cultural spaces often show majestic architecture holding ancient collections, but her approach to documenting the spaces align with the work of other architectural photographers. For instance, Lynne Cohen’s photographs also present man-made spaces without us, “portraits of us in absentia” (<a href="http://stephendaitergallery.com/exhibitions/lynne-cohen-occupied-territory/" rel="noopener noreferrer" target="_blank">Stephen Daiter Gallery</a> 2011). <a href="https://www.richardross.net/architecture-of-authority" rel="noopener noreferrer" target="_blank">Richard Ross’ series Architecture of Authority</a> moves us from schools to political assemblies and religious spaces, prisons and police headquarters, starkly capturing spaces of coercion without those in power present. Höfer, Cohen, and Ross (and others) present images that are objective in their documentation, with little interruption from the photographer, yet they require us to see ourselves and others in the architecture. Can we photograph our own libraries from this distance by looking beyond the staff and patrons to the environment that shapes our relationships and behavior?
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={architecturalPhotographyAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default ArchitecturalPhotographyPrompt;

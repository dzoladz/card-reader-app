import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const SmellOfControlPrompt = () => {
  const { showSCP, smellOfControlAction } = useContext(Context);

    if (!showSCP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={11}>
          <p>
              Gary and Marie Radford have explored the connection between libraries and fear and the use of control through the library as panopticon. Their literature review suggests a strong majority of students describe a first impression of the library that demonstrates fear or anxiety, and that these emotions may be prompted from library spaces “dominated by surveillance and order” (Radford, Radford, and Lingel 2018, 685). This stems from services and spaces including classification systems, library fines, and magnetized books to having to ask library staff for assistance and using information systems that track your searches. This “discourse of fear” is cultural and “is what makes possible the knowledge that you are in a library and speaking to a librarian at all” (Radford and Radford 2001, 323).
          </p>
          <p>
              Yet consider <a href="http://we-make-money-not-art.com/the_smell_of_control/" rel="noopener noreferrer" target="_blank">The Smell of Control</a> by Kevin Grennan, who imagined robots that use chemical stimulus to alter human behavior. “In the case of the bomb disposal robot the ‘sweat gland’ releases the smell of human fear. It has been proven that humans can identify this specific smell and it <u>tends to enhance cognitive performance</u>. I propose that this robot would enable surrounding humans to work more effectively and to differentiate dangerous situations from false alarms” (Grennan in interview).
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={smellOfControlAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default SmellOfControlPrompt;

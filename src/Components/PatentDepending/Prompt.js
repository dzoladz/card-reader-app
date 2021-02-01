import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const PatentDependingPrompt = () => {
  const { showPDP, patentDependingAction } = useContext(Context);

    if (!showPDP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={12}>
          <p>
              “Twentieth century office design provides a good opportunity to study the role of life in architecture” (Bell 2003, 78-79). Steven Johnson does this in his cartoon series, <a href="https://www.core77.com/Bizarre-Inventions" rel="noopener noreferrer" target="_blank">Patent Depending</a>, using humor to create fictional products for current work and lifestyle trends. His inventions that focus on offices and work patterns are particularly relevant to libraries. <a href="https://www.core77.com/posts/75532/Steven-M-Johnsons-Bizarre-Invention-54-The-Upsy-Downsy-Workstation" rel="noopener noreferrer" target="_blank">Patent Depending #54</a> (2017) is a design for cubicle office furniture that serve as desks. When there are company layoffs, the desks can be flipped over to become lobby seating. As is, this cartoon acts as a commentary on the library's constant rearrangement of ever-smaller spaces to accommodate more users as staff hiring practices show a decline.
          </p>
          <p>
              In <a href="http://www.worldcat.org/oclc/971519701" rel="noopener noreferrer" target="_blank">Idea Searching for Design: How to Research and Develop Design Concepts</a> Dave Bramston and Ye Li give examples of objects being used in unintentional ways: a book as a fan, a wall as a chair, a table as shelter or as a raft, a newspaper as an umbrella, the back of a chair for a coat hanger, and even a friend’s back being used as a desk.
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={patentDependingAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default PatentDependingPrompt;

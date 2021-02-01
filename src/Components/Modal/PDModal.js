import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const PDModal = () => {
  const { modalPDShow, handlePDClose } = useContext(Context);


  return (
    <Modal show={modalPDShow} onHide={handlePDClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Patent Depending</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Bell, Jonathan. 2003. “Ruins, Recycling, Smart Buildings, and the Endlessly Transformable Environment.” In <a href="http://www.worldcat.org/oclc/932544487" target="_blank" rel="noopener noreferrer"><em>Strangely Familiar: Design and Everyday Life</em></a>, edited by Andrew Blauvelt. Minneapolis: Walker Art Center.</p>
              <p className="citation">Bramston, Dave and Ye Li. 2017. <a href="http://www.worldcat.org/oclc/971519701" target="_blank" rel="noopener noreferrer"><em>Idea Searching for Design: How to Research and Develop Design Concepts</em></a>. London: Bloomsbury.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handlePDClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PDModal;
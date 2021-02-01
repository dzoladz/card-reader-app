import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const IGModal = () => {
  const { modalIGShow, handleIGClose } = useContext(Context);


  return (
    <Modal show={modalIGShow} onHide={handleIGClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>I Agree</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Betsky, Aaron. 2003. “The Strangeness of the Familiar in Design.” In <a href="http://www.worldcat.org/oclc/932544487" target="_blank" rel="noopener noreferrer"><em>Strangely Familiar: Design and Everyday Life</em></a>, edited by Andrew Blauvelt. Minneapolis: Walker Art Center.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleIGClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IGModal;
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
              <p class="citation"><a href="" target="_blank" rel="noopener noreferrer"></a></p>
              <p class="citation"><a href="" target="_blank" rel="noopener noreferrer"></a></p>
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
import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const IAModal = () => {
  const { modalIAShow, handleIAClose } = useContext(Context);


  return (
    <Modal show={modalIAShow} onHide={handleIAClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Information Architectures</h1>
              <hr />
              <p>References</p>
              <hr />
            </Col>
            <Col xs={8} sm={4} className="mx-auto p-0">
              <p>Left Side</p>
            </Col>
            <Col xs={12} sm={8}>
              <p>Right side</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleIAClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IAModal;
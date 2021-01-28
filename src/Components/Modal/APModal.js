import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const APModal = () => {
  const { modalAPShow, handleAPClose } = useContext(Context);


  return (
    <Modal show={modalAPShow} onHide={handleAPClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Architectural Photography</h1>
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
        <Button variant="secondary" onClick={handleAPClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default APModal;
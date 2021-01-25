import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const GeneralModal = () => {
  const { modalGeneralShow, handleGeneralClose } = useContext(Context);


  return (
    <Modal show={modalGeneralShow} onHide={handleGeneralClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>General Modal</h1>
              <hr />
              <p>Contact</p>
              <hr />
              <p>Submit a Question</p>
              <hr />
              <p>
              <img src="../icons/cloud-arrow-down.svg" alt="download icon" class="icon" />
              Download the Deck
              </p>
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
        <Button variant="secondary" onClick={handleGeneralClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GeneralModal;
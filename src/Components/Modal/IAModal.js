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
              <h2 class="h4">References</h2>
              <p class="citation">Feo, Roberto, and Rosario Hurtado. 2009. <a href="http://www.worldcat.org/oclc/913429960" target="_blank" rel="noopener noreferrer">El Ultimo Grito: Abandon Architectures</a>. Miami: Name Publications.</p>
              <p class="citation">Lukić, Branko, and Barry Kātz. 2011. <a href="http://www.worldcat.org/oclc/873806559" target="_blank" rel="noopener noreferrer">Nonobject</a>. Cambridge, Mass.: MIT Press.</p>
              <hr />
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
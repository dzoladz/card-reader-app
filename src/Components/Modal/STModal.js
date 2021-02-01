import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const STModal = () => {
  const { modalSTShow, handleSTClose } = useContext(Context);


  return (
    <Modal show={modalSTShow} onHide={handleSTClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Slow Technology</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Hallnäs, Lars, and Johan Redström. 2001. “<a href="https://dl.acm.org/doi/10.1007/PL00000019" target="_blank" rel="noopener noreferrer">Slow Technology - Designing for Reflection</a>.” <em>Personal and Ubiquitous Computing</em> 5 (3): 201-22.</p>
              <p className="citation">Redström, Johan, Patricija Jaksetic, and Peter Ljungstrand. 2000. “<a href="http://redstrom.se/johan/slowtechnology/project/papers/chatterbox_gi.pdf" target="_blank" rel="noopener noreferrer">The Chatterbox: Using Text Manipulation in an Entertaining Information Display</a>.” Paper presented at <em>Graphics Interface 2000, Montreal, Canada, May 15-17</em>.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleSTClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default STModal;
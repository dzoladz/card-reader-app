import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const AAModal = () => {
  const { modalAAShow, handleAAClose } = useContext(Context);


  return (
    <Modal show={modalAAShow} onHide={handleAAClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Aural Architectures</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p class="citation">Blesser, Barry and Linda-Ruth Salter. 2008. “<a href="https://acoustics.org/pressroom/httpdocs/156th/blesser.html" target="_blank" rel="noopener noreferrer">Aural Architecture: The Missing Link</a>.” Paper presented at the <em>156th Meeting of the Acoustical Society of America</em>, Miami, FL, November 10-14.</p>
              <p class="citation">Blesser, Barry and Linda-Ruth Salter. 2006. Spaces Speak, <a href="http://www.worldcat.org/oclc/845577268" target="_blank" rel="noopener noreferrer"><em>Are You Listening? Experiencing Aural Architecture</em></a>. Cambridge, MA: The MIT Press.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleAAClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AAModal;
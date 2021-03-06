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
              <h1>Information</h1>
              <hr />
              <h2 class="h3">Contact</h2>
              <div>
                <span>Mackenzie Salisbury - <a href="mailto:ssalis1@saic.edu">ssalis1@saic.edu</a></span>
                    <br/>
                <span>Shannon Marie Robinson - <a href="mailto:smrob@upenn.edu">smrob@upenn.edu</a></span>
              </div>
              <hr />
              <h2 class="h4">Share Your Thoughts</h2>
                <p>
                    Have an idea for a prompt or action? <a href="https://forms.gle/CMBr8WPVhQe5TKP87">Let us know!</a>
                </p>
              <hr />
              <h2 class="h4">Download the Deck</h2>
                  <p>
                    You can <a href="/card-reader-app/images/speculative-deck-images.zip">download the deck</a>
                  </p>
              <hr />
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
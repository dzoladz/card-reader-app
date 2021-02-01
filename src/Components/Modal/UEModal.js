import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const UEModal = () => {
  const { modalUEShow, handleUEClose } = useContext(Context);


  return (
    <Modal show={modalUEShow} onHide={handleUEClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>How to Organize a Public Library</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Eco, Umberto. 1994. <a href="http://www.worldcat.org/oclc/1204229813" target="_blank" rel="noopener noreferrer"><em>How to Travel with a Salmon</em></a>. New York: Harcourt, Brace.</p>
              <p className="citation">Höfer, Candida. 2005. <a href="http://www.worldcat.org/oclc/1078884037" target="_blank" rel="noopener noreferrer"><em>Libraries</em></a>. Munich: Schirmer/Mosel.</p>
              <p className="citation">Krippendorf, Klaus. 2006. <a href="http://www.worldcat.org/oclc/937351556" target="_blank" rel="noopener noreferrer"><em>The Semantic Turn: A New Foundation for Design</em></a>. Boca Raton, FL: CRC Press.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleUEClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UEModal;
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
              <p className="citation">Evron, Assaf. <a href="https://www.assafevron.com/collages-for-the-esplanade-apartments#0" target="_blank" rel="noopener noreferrer"><em>Collage for the Esplanade Apartments</em></a>. September - October 2019. Temporary site-specific work. 900-910 N. Lake Shore Drive, Chicago, IL.</p>
              <p className="citation">Höfer, Candida. 2005. <a href="http://www.worldcat.org/oclc/1078884037" target="_blank" rel="noopener noreferrer"><em>Libraries</em></a>. Munich: Schirmer/Mosel.</p>
              <p className="citation">Pardo, Alona and Elias Redstone. 2014. <a href="http://www.worldcat.org/oclc/893407097" target="_blank" rel="noopener noreferrer"><em>Constructing Worlds: Photography and Architecture in the Modern Age</em></a>. Munich: Prestel.</p>
              <p className="citation">Ross, Richard. 2007. <a href="http://www.worldcat.org/oclc/928920755" target="_blank" rel="noopener noreferrer"><em>Architecture of Authority</em></a>. New York : Aperture.</p>
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
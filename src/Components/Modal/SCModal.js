import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const SCModal = () => {
  const { modalSCShow, handleSCClose } = useContext(Context);


  return (
    <Modal show={modalSCShow} onHide={handleSCClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Smell of Control</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Radford, Gary Paul, Radford, Marie Louise, and Jessa Lingel. 2018. “<a href="https://link.springer.com/chapter/10.1007/978-3-319-78105-1_79" target="_blank" rel="noopener noreferrer">Transformative Spaces: The Library as Panopticon</a>.” In <em>iConference 2018: Transforming Digital Worlds, Sheffield, UK, March 25-28, 2018</em>, 684-92.</p>
              <p className="citation">Radford, Gary P., and Marie L. Radford. 2001. “<a href="https://www.journals.uchicago.edu/doi/10.1086/603283" target="_blank" rel="noopener noreferrer">Libraries, Librarians, and the Discourse of Fear</a>.” <em>The Library Quarterly</em> 71 (3): 299-329.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleSCClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SCModal;
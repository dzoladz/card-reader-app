import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const CCModal = () => {
  const { modalCCShow, handleCCClose } = useContext(Context);


  return (
    <Modal show={modalCCShow} onHide={handleCCClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Sampler - Culture Clash</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Nicholson, Karen P. 2015. “<a href="https://doi.org/10.5860/crl.76.3.328" target="_blank" rel="noopener noreferrer">The McDonaldization of Academic Libraries and the Values of Transformational Change</a>.” <em>College & Research Libraries</em> 76 (3): 328-38.</p>
              <p className="citation">Budd, John M. 1997. “<a href="https://crl.acrl.org/index.php/crl/article/view/15139" target="_blank" rel="noopener noreferrer">A Critique of Customer and Commodity</a>.” <em>College & Research Libraries</em> 58 (4): 309-20.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleCCClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CCModal;
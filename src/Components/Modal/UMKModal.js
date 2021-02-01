import React, { useContext } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const UMKModal = () => {
  const { modalUMKShow, handleUMKClose } = useContext(Context);


  return (
    <Modal show={modalUMKShow} onHide={handleUMKClose}>
      <Modal.Body className="modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <h1>United Micro Kingdoms</h1>
              <hr />
              <h2 class="h4">References</h2>
              <p className="citation">Budd, John M. 2003. “<a href="https://www.journals.uchicago.edu/doi/abs/10.1086/603373" target="_blank" rel="noopener noreferrer">The Library, Praxis, and Symbolic Power</a>.” <em>Library Quarterly: Information, Community, Policy</em> 73 (1): 19-32.</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="modal-body">
        <Button variant="secondary" onClick={handleUMKClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UMKModal;
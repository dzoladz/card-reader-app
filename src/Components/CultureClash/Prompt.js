import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { Context } from "../../AppContext";

const CultureClashPrompt = () => {
  const { showCCP, cultureClashAction } = useContext(Context);

    if (!showCCP) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center text animated fadeIn slower">
      <Col md={11}>
          <p>
              In <a href="https://drive.google.com/open?id=1OR9Ls9Gteoxu04F_PDtQtb4HOr5YQIc9" rel="noopener noreferrer" target="_blank">Sampler - Culture Clash</a> (2012), <a href="http://davidlittler.tumblr.com/" rel="noopener noreferrer" target="_blank">David Littler</a> aligns two practices, embroidery and disc jockeying, by exploring language and culture. Both use the term sampler as well as needle, loop (threads, beats), cross (stitch, fader), and more. This critical design project asks us to make connections where there seem to be none. Little considers how each practice might inform the other, shifting approaches and expectations in textiles and music.
          </p>
          <p>
              Librarianship (like design) has been discussed through the lens of consumerism and has sometimes adopted a language of commodification (Budd 1997). This economic model aligns a library mission with corporate values, focused on monetary value and return on investment (Nicholson 2015). To fully realize how rhetoric potentially “changes what libraries are about” (Nicholson 2015, 331), we can borrow language, methodologies, and environments from other disciplines.
          </p>
      </Col>
      </Row>
      <Row className="animated fadeIn slower delay-3s center">
          <Col>
            <Button name="Draw Card" onClick={cultureClashAction} />
          </Col>
      </Row>
    </Container>
  );
};

export default CultureClashPrompt;

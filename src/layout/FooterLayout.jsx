import React from 'react'
import { Col, Container, Row } from 'reactstrap';

 const FooterLayout = () => {
  return (
    <div style={{padding: '5vh 0', backgroundColor: 'rgb(106, 105, 105)'}}>
      <Container>
          <Row>
            <Col>
              <h3>About</h3>
              <p>A paradise for Manga Anime fans, the shop gathers most typical products of Japanese comics and animation.</p>
            </Col>
            <Col>
              <h3>Contact Us</h3>
              <div>Address: </div>
              <div>Phone Number: </div>
              <div>Email: </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>© 2023 My E-commerce Site</p>
              <div className="payment-block">
                {/* Add payment icons here */}
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default FooterLayout;

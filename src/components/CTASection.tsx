import { Container, Row, Col, Button } from 'react-bootstrap'
import ctaImage from '../assets/customer-support.png'

const CTASection = () => {
  return (
    <section id="contact" className="py-5 mb-5">
      <Container>
        <div className="rounded-3 overflow-hidden bg-light">
          <Row className="align-items-center g-0">
            {/* Image hidden on mobile, visible on desktop */}
            <Col xs={12} md={5} className="text-center p-4 d-none d-md-block">
              <img
                src={ctaImage}
                alt="Customer support team"
                className="img-fluid"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
            </Col>
            {/* Text + button — centered on mobile, left on desktop */}
            <Col xs={12} md={7} className="p-4 p-md-5 text-center text-md-start">
              <h2
                className="fw-bold mb-4"
                style={{
                  color: '#272D38',
                  fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Be a part of the
                <br />next big thing
              </h2>
              <p
                className="mb-4"
                style={{ color: '#272D38', lineHeight: 1.7, fontSize: 'clamp(0.7rem, 3.5vw, 1rem)',fontWeight: 400 }}
              >
                We work with Brans, Startups, to SMEs.
                <br />Colaborate for more impact and growt
              </p>
              <Button
                href="#contact"
                style={{
                  backgroundColor: '#8EADD5',
                  border: 'none',
                  borderRadius: '8px',
                  padding: 'clamp(0.6rem, 1.5vw, 0.6rem) clamp(1.3rem, 3vw, 1.6rem)',
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                CONTACT US
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTASection

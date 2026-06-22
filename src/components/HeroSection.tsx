import { Container, Row, Col, Button } from 'react-bootstrap'
import heroImage from '../assets/business-people-discussing-business-idea.png'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-5 d-flex align-items-center"
      style={{ minHeight: '90vh' }}
    >
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1
              className="fw-bold"
              style={{
                fontSize: 'clamp(1.7rem, 5vw, 4rem)',
                lineHeight: 1.1,
                color: '#272D38',
              }}
            >
              <span className="d-none d-md-block">
                Building Digital
                <br />
                Products, Brands
                <br />
                &amp; Experience
              </span>
              <span className="d-block d-md-none">
                Building Digital
                <br />
                Products,Brands &amp;
                <br />
                Experience
              </span>
            </h1>
            <p
              className="mt-3 mb-4 py-2 fw-normal lh-lg"
              style={{ color: '#272D38', fontSize: 'clamp(0.70rem, 2.5vw, 1.2rem)' }}
            >
              Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt
            </p>
            <Button
              href="#contact"
              className="fw-semibold rounded-2 "
              style={{
                backgroundColor: '#8EADD5',
                border: 'none',
                padding: 'clamp(0.3rem, 0.5vw + 0.3rem, 0.7rem) clamp(0.7rem, 3vw + 0.5rem, 1.8rem)',
                fontSize: 'clamp(0.75rem, 1.2vw + 0.4rem, 1rem)',
                color: '#fff',
              }}
            >
              CONTACT US
            </Button>
          </Col>

          <Col xs={12} md={6} className="text-center">
            <img
              src={heroImage}
              alt="Team working on digital products"
              className="img-fluid"
              style={{ maxHeight: '450px', objectFit: 'contain' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection

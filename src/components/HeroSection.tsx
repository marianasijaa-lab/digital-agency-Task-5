import { Container, Row, Col, Button } from 'react-bootstrap'
import heroImage from '../assets/business-people-discussing-business-idea.png'

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        paddingTop: '2rem',
        paddingBottom: '3rem',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center g-4">
          {/* On mobile*/}
          <Col xs={12} md={6} className="order-1 order-md-1 text-center text-md-start ">
            <h1
              style={{
                fontWeight: 700,
                fontSize: 'clamp(1.7rem, 5vw, 4rem)',
                lineHeight: 1.1,
                color: '#272D38',
              }}
            >
              {/* للشاشات الكبيرة (md فأكبر) */}
              <span className="d-none d-md-block fw-bold ">
                Building Digital
                <br />
                Products, Brands 
                <br />
                &amp; Experience
              </span>

              {/* للشاشات الصغيرة (أقل من md) */}
              <span className="d-block d-md-none fw-bold ">
                Building Digital
                <br />
                Products,Brands &amp;
                <br />
                Experience
              </span>
            </h1>
            <p
              className="mt-3 mb-4"
              style={{
                color: '#272D38',
                fontSize: 'clamp(0.70rem, 2.5vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.7,
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt
            </p>
           <Button
              href="#contact"
              style={{
                backgroundColor: '#8EADD5',
                border: 'none',
                borderRadius: '8px',
                padding: 'clamp(0.3rem, 0.5vw + 0.3rem, 0.7rem) clamp(0.7rem, 3vw + 0.5rem, 1.8rem)',
                fontSize: 'clamp(0.75rem, 1.2vw + 0.4rem, 1rem)',
                fontWeight: 600,
                color: '#fff',
               
              }}
            >
              CONTACT US
            </Button>
          </Col>
          {/* On mobile */}
          <Col xs={12} md={6} className="order-2 order-md-2 text-center">
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
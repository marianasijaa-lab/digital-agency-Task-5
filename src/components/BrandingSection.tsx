import { Container, Row, Col } from 'react-bootstrap'
import brandingImage from '../assets/designer-team-working-on-creative-design.png'
import arrowDesktop from '../assets/Arrow 1.png'
import arrowMobile from '../assets/Arrow 2.png'

const BrandingSection = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        {/* Mobile */}
        <div className="d-block d-md-none text-center">
          <h2
            className="fw-bold mb-3"
            style={{ color: '#272D38', fontSize: 'clamp(1.8rem, 7vw, 2.5rem)', lineHeight: 1 }}
          >
            Branding &amp; Design
            <br />System
          </h2>
          <p
            className="mb-4 lh-lg fw-normal"
            style={{ color: '#272D38', fontSize: 'clamp(0.65rem, 2.5vw, 1rem)' }}
          >
            Commonly Used In The Graphic, Print &amp; Publishing
            Industris For Previewing Visual Layout And Mockups
          </p>
          <a href="#" className="d-inline-block mb-4 text-decoration-none">
            <img src={arrowMobile} alt="Learn more" style={{ height: '22px', objectFit: 'contain' }} />
          </a>
          <div>
            <img
              src={brandingImage}
              alt="Branding and design team"
              className="img-fluid"
              style={{ maxHeight: '380px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Desktop */}
        <Row className="align-items-center g-4 d-none d-md-flex">
          <Col md={6} className="text-center">
            <img
              src={brandingImage}
              alt="Branding and design team"
              className="img-fluid"
              style={{ maxHeight: '420px', objectFit: 'contain' }}
            />
          </Col>
          <Col md={6}>
            <h2
              className="fw-bold mb-3"
              style={{ color: '#272D38', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1 }}
            >
              Branding &amp; Design
              <br />System
            </h2>
            <p
              className="mt-4 lh-lg fw-normal"
              style={{ color: '#272D38', maxWidth: '380px', fontSize: '1rem' }}
            >
              Commonly Used In The Graphic, Print &amp; Publishing
              Industris For Previewing Visual Layout And Mockups
            </p>
            <a href="#" className="d-inline-block mt-3 text-decoration-none">
              <img src={arrowDesktop} alt="Learn more" style={{ height: '16px', objectFit: 'contain' }} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BrandingSection

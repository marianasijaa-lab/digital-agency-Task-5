import { Container, Row, Col } from 'react-bootstrap'

const FooterSection = () => {
  return (
    <footer className="bg-light">
      <Container className="py-5">
        <Row className="g-5 text-center text-md-start">
          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3" style={{ color: '#272D38', fontSize: '1.125rem' }}>
              Digital Agency
            </h6>
            <p className="mb-0 small fw-light lh-lg" style={{ color: '#272D38' }}>
              Building Digital Products,
              <br />Brands &amp; Experience
            </p>
          </Col>

          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3" style={{ color: '#272D38', fontSize: '1.125rem' }}>
              Resources
            </h6>
            <ul className="list-unstyled mb-0">
              {['Guides', 'Blog', 'Customer Stories', 'Glossery'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="small fw-light lh-lg text-decoration-none" style={{ color: '#272D38' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3" style={{ color: '#272D38', fontSize: '1.125rem' }}>
              Company
            </h6>
            <ul className="list-unstyled mb-0">
              {['About Us', 'Careers', 'Partners', 'Contact Us'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="small fw-light lh-lg text-decoration-none" style={{ color: '#272D38' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} md={3}>
            <h6 className="fw-bold mb-3" style={{ color: '#272D38', fontSize: '1.125rem' }}>
              Social Media
            </h6>
            <ul className="list-unstyled mb-0">
              {['LinkedIn', 'Facebook', 'Instagram', 'Twitter'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="small fw-light lh-lg text-decoration-none" style={{ color: '#272D38' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <p
          className="text-center py-4 mb-0 small fw-light"
          style={{ color: '#272D38', fontSize: 'clamp(0.80rem, 1.5vw + 0.4rem, 1rem)' }}
        >
          © Matheus. Todos os direitos reservados
        </p>
      </Container>
    </footer>
  )
}

export default FooterSection

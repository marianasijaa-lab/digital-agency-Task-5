import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavbarSection = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      fixed="top"
      expand="md"
      expanded={expanded}
      onToggle={setExpanded}
      className="py-3 bg-white"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold text-uppercase"
          style={{ color: '#272D38', fontSize: 'clamp(0.875rem, 1.1vw + 0.625rem, 1.25rem)' }}
        >
          Digital Agency
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none bg-transparent p-1"
        />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-2">
            {(['home', 'about', 'testimonials', 'contact'] as const).map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                onClick={() => setExpanded(false)}
                className="px-1 me-3 fw-normal"
                style={{ color: '#272D38', fontSize: 'clamp(0.875rem, 1.1vw + 0.625rem, 1.125rem)' }}
              >
                {section}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSection

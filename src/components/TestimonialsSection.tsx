import { Container } from 'react-bootstrap'
import { testimonials } from '../data/testimonials'
import TestimonialSlider from './TestimonialSlider'

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-4">
      <Container>
        <div className="text-center mb-4">
          <p
            className="mb-1 fw-normal text-uppercase lh-lg"
            style={{ color: '#272D38', fontSize: 'clamp(0.65rem, 2.5vw, 1rem)' }}
          >
            Testimonials
          </p>
          <h2
            className="fw-bold"
            style={{ color: '#272D38', fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', lineHeight: 1 }}
          >
            <span className="d-none d-md-block">
              Read What Other
              <br />
              Have To Say
            </span>
            <span className="d-block d-md-none">
              Read What Other Have
              <br />
              To Say
            </span>
          </h2>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </Container>
    </section>
  )
}

export default TestimonialsSection

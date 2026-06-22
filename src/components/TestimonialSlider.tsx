import { useState } from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import type { Testimonial } from '../interfaces'
import TestimonialCard from './TestimonialCard'

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [index, setIndex] = useState(1)

  // Desktop: 3 slides - each shifted by 1 card (cards 0-2, 1-3, 2-4)
  const DESKTOP_VISIBLE = 3
  const desktopSlides = testimonials.length - DESKTOP_VISIBLE + 1 // 3 slides

  // Mobile: 5 slides — one card each
  const mobileSlides = testimonials.length // 5 slides

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      {/* ── DESKTOP ── */}
      <div className="d-none d-md-block">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          interval={null}
          slide
        >
          {Array.from({ length: desktopSlides }, (_, si) => (
            <Carousel.Item key={si}>
              <Row className="g-3 px-2">
                {testimonials.slice(si, si + DESKTOP_VISIBLE).map((t) => (
                  <Col key={t.id} md={4}>
                    <TestimonialCard testimonial={t} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom dot indicators */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          {Array.from({ length: desktopSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`slider-dot${i === index ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="d-block d-md-none">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          interval={null}
          slide
        >
          {testimonials.map((t) => (
            <Carousel.Item key={t.id}>
              <div className="px-2">
                <TestimonialCard testimonial={t} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom dot indicators */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          {Array.from({ length: mobileSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`slider-dot${i === index ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default TestimonialSlider

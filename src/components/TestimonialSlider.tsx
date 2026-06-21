import { useState } from 'react'
import type { Testimonial } from '../interfaces'
import TestimonialCard from './TestimonialCard'

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const TOTAL = testimonials.length
  const DESKTOP_VISIBLE = 3
  const DESKTOP_STEPS = TOTAL - DESKTOP_VISIBLE
  const MOBILE_STEPS = TOTAL - 1

  const [step, setStep] = useState(1)

  const DesktopSlider = () => {
    const dotCount = DESKTOP_STEPS + 1
    const translatePct = -(step * (100 / DESKTOP_VISIBLE))

    return (
      <div className="d-none d-md-block">
        <div className="overflow-hidden">
          <div
            className="d-flex"
            style={{
              transform: `translateX(${translatePct}%)`,
              transition: 'transform 0.4s ease',
              willChange: 'transform',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / DESKTOP_VISIBLE}%` }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`slider-dot${i === step ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>
    )
  }

  const MobileSlider = () => {
    const dotCount = MOBILE_STEPS + 1
    const translatePct = -(step * 100)

    return (
      <div className="d-block d-md-none">
        <div className="overflow-hidden">
          <div
            className="d-flex"
            style={{
              transform: `translateX(${translatePct}%)`,
              transition: 'transform 0.4s ease',
              willChange: 'transform',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 px-2"
                style={{ width: '100%' }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`slider-dot${i === step ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <DesktopSlider />
      <MobileSlider />
    </>
  )
}

export default TestimonialSlider

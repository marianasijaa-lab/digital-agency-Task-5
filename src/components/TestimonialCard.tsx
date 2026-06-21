import type { Testimonial } from '../interfaces'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div
      className="h-100 px-4 rounded-20 text-center bg-light"
      style={{
        border: 'none',
        paddingBottom: '38px',
        paddingTop: '38px',
      }}
    >
      {/* Avatar */}
      <div className="d-flex justify-content-center mb-0">
        <div
          className="bg-light rounded-circle d-flex align-items-center justify-content-center overflow-hidden border border-1"
          style={{ width: 100, height: 100 }}
        >
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=e0e0e0&color=1a1a2e&size=100`
            }}
          />
        </div>
      </div>

      {/* Name */}
      <p
        className="mb-3"
        style={{ color: '#272D38', fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 400 }}
      >
        {testimonial.name}
      </p>

      {/* Text */}
      <p
        className="mb-1"
        style={{
          color: '#272D38',
          lineHeight: 1.3,
          fontSize:  `clamp(0.1rem, 3vw, 0.857rem) `,
          fontWeight: 300,
          textAlign: 'center',
          maxWidth: '280px',
        }}
      >
        {testimonial.text}
      </p>
    </div>
  )
}

export default TestimonialCard

import { Container, Row, Col } from 'react-bootstrap'
import spotifyImg from '../assets/Spotify.png'
import slackImg from '../assets/Slack.png'
import dropboxImg from '../assets/Dropbox.png'
import zoomImg from '../assets/Zoom.png'

const companies = [
  { name: 'Spotify', img: spotifyImg },
  { name: 'Slack',   img: slackImg },
  { name: 'Dropbox', img: dropboxImg },
  { name: 'Zoom',    img: zoomImg },
]

const CompaniesSection = () => {
  return (
    <section className="py-4 bg-white">
      <Container>
        <p
          className="text-center mb-2"
          style={{ color: '#667085', fontSize: 'clamp(0.80rem, 1.2vw + 0.5rem, 0.9rem)', fontWeight: 300 }}
        >
          Trusted By 4,000+ Companies
        </p>
        <div
          className="bg-light rounded-3 py-2 px-1 py-md-2 px-md-2 border border-light mx-auto"
          style={{ maxWidth: '900px' }}
        >
          <Row className="align-items-center justify-content-center g-2">
            {companies.map(({ name, img }) => (
              <Col
                key={name}
                xs={3}
                md={3}
                className="d-flex justify-content-center align-items-center"
                style={{ paddingTop: '4px', paddingBottom: '4px' }}
              >
                <img
                  src={img}
                  alt={name}
                  style={
                    name === 'Zoom'
                      ? {

                          maxHeight: 'clamp(4px, 3vw, 36px)',
                          maxWidth: '80%',
                          objectFit: 'contain',
                        }
                      : {
                          maxHeight: 'clamp(20px, 4vw, 46px)',
                          maxWidth: '100%',
                          objectFit: 'contain',
                        }
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CompaniesSection

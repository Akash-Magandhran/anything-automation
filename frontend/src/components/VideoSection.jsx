import { FiArrowUpRight } from 'react-icons/fi'

export default function VideoSection() {
  return (
    <section id="video" className="video-section">
      <div className="video-container">

        <div className="video-heading">
          <span>SEE OUR WORK</span>

          <h2>
            Automation in <strong>Action</strong>
          </h2>

          <p>
            Explore our industrial automation solutions,
            machine manufacturing and engineering capabilities.
          </p>
        </div>

        <div className="video-card">
          <video
            className="automation-video"
            autoPlay
            muted
            loop
            playsInline
          
            
          >
            <source
              src="/automation-video.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-bottom">

          <div>
            <h3>Engineering. Automation. Performance.</h3>

            <p>
              From PLC programming to custom machine
              manufacturing, we deliver practical industrial
              automation solutions.
            </p>
          </div>

          <a href="#contact" className="video-cta">
            Discuss Your Project
            <FiArrowUpRight />
          </a>

        </div>

      </div>

      <style>{`

        .video-section {
          padding: 100px 30px;
          background: #f6f8fb;
        }

        .video-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .video-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .video-heading span {
          color: #e21b23;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .video-heading h2 {
          margin: 12px 0;
          color: #14245c;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
        }

        .video-heading h2 strong {
          color: #e21b23;
        }

        .video-heading p {
          max-width: 650px;
          margin: 0 auto;
          color: #667085;
          font-size: 15px;
          line-height: 1.7;
        }

        .video-card {
          overflow: hidden;
          border-radius: 14px;
          background: #0b1220;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.16);
        }

        .automation-video {
          display: block;
          width: 100%;
          height: 620px;
          object-fit: cover;
          background: #0b1220;
        }

        .video-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 28px;
        }

        .video-bottom h3 {
          margin: 0 0 7px;
          color: #14245c;
          font-size: 20px;
        }

        .video-bottom p {
          margin: 0;
          max-width: 650px;
          color: #667085;
          font-size: 13.5px;
          line-height: 1.7;
        }

        .video-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 20px;
          border-radius: 4px;
          background: #e21b23;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: all .25s ease;
        }

        .video-cta:hover {
          background: #14245c;
          color: #fff;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .video-section {
            padding: 70px 20px;
          }

          .automation-video {
            height: 380px;
          }

          .video-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .video-cta {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .automation-video {
            height: 280px;
          }
        }

      `}</style>
    </section>
  )
}
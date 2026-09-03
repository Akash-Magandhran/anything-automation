import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from 'react-icons/fi'

const SERVICES = [
  'PLC Programming',
  'HMI Programming',
  'SCADA Programming',
  'Panel & Field Wiring',
  'Robot Integration',
  'Custom Machine Manufacturing',
]

const QUICK_LINKS = [
  ['About', '#about'],
  ['Scope of Work', '#scope'],
  ['Machines', '#machines'],
  ['Industries', '#industries'],
  ['Brands', '#brands'],
  ['Contact', '#contact'],
]

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      style={{
        background: '#0b1220',
        color: 'rgba(255,255,255,0.68)',
      }}
    >

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="footer-main"
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '70px 30px 55px',
        }}
      >

        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns:
              '1.5fr 1fr 1fr 1.25fr',
            gap: 55,
          }}
        >

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>

            {/* Logo */}

            <a
              href="#top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',

                width: 250,
                height: 75,

                marginBottom: 18,
              }}
            >
              <img
                src="/logo.png"
                alt="Anything Automation"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  display: 'block',
                }}
              />
            </a>

            {/* Description */}

            <p
              style={{
                maxWidth: 390,
                margin: 0,

                fontSize: 14,
                lineHeight: 1.8,

                color:
                  'rgba(255,255,255,0.65)',
              }}
            >
              End-to-end industrial automation
              solutions for modern manufacturing —
              from PLC, HMI & SCADA programming
              to robotic integration and custom
              machine manufacturing.
            </p>

            {/* Social Icons */}

            <div
              style={{
                display: 'flex',
                gap: 10,
                marginTop: 25,
              }}
            >

              <SocialButton
                icon={<FiLinkedin />}
                label="LinkedIn"
              />

              <SocialButton
                icon={<FiInstagram />}
                label="Instagram"
              />

              <SocialButton
                icon={<FiFacebook />}
                label="Facebook"
              />

            </div>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <FooterColumn title="Our Services">

            {SERVICES.map((service) => (
              <li key={service}>
                <a
                  href="#scope"
                  className="footer-link"
                >
                  <span>{service}</span>
                  <FiArrowUpRight />
                </a>
              </li>
            ))}

          </FooterColumn>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <FooterColumn title="Quick Links">

            {QUICK_LINKS.map(
              ([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="footer-link"
                  >
                    <span>{label}</span>
                    <FiArrowUpRight />
                  </a>
                </li>
              )
            )}

          </FooterColumn>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h4 className="footer-heading">
              Get In Touch
            </h4>

            <div className="contact-list">

              {/* Address */}

              <div className="contact-item">

                <div className="contact-icon">
                  <FiMapPin />
                </div>

                <div>
                  <span className="contact-label">
                    Our Location
                  </span>

                  <p>
                    {profile?.locality},{' '}
                    {profile?.district},{' '}
                    {profile?.state}{' '}
                    {profile?.pincode}
                  </p>
                </div>

              </div>


              {/* Phone */}

              <div className="contact-item">

                <div className="contact-icon">
                  <FiPhone />
                </div>

                <div>
                  <span className="contact-label">
                    Call Us
                  </span>

                  <a
                    href={`tel:${profile?.contact_phone}`}
                  >
                    {profile?.contact_phone}
                  </a>
                </div>

              </div>


              {/* Email */}

              <div className="contact-item">

                <div className="contact-icon">
                  <FiMail />
                </div>

                <div>
                  <span className="contact-label">
                    Email Us
                  </span>

                  <a
                    href={`mailto:${profile?.contact_email}`}
                  >
                    {profile?.contact_email}
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            CTA STRIP
        ===================================================== */}

        <div
          className="footer-cta"
          style={{
            marginTop: 55,

            padding: '25px 30px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            gap: 25,

            borderRadius: 8,

            background:
              'linear-gradient(135deg, #121d35, #172554)',

            border:
              '1px solid rgba(255,255,255,0.08)',
          }}
        >

          <div>

            <h3
              style={{
                margin: '0 0 6px',
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Ready to automate your next project?
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: 13.5,
                color:
                  'rgba(255,255,255,0.62)',
              }}
            >
              Let's build a smarter and more efficient
              industrial solution together.
            </p>

          </div>


          <a
            href="#contact"
            className="footer-cta-button"
          >
            Get a Quote
            <FiArrowUpRight />
          </a>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        style={{
          borderTop:
            '1px solid rgba(255,255,255,0.09)',
        }}
      >

        <div
          className="footer-bottom"
          style={{
            maxWidth: 1400,
            margin: '0 auto',

            padding: '20px 30px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            gap: 15,

            fontSize: 12.5,
          }}
        >

          <span>
            © {new Date().getFullYear()}{' '}
            {profile?.company_name ||
              'Anything Automation'}.
            {' '}All rights reserved.
          </span>


          {profile?.gst_number && (
            <span
              style={{
                fontFamily:
                  'var(--font-mono)',
                opacity: 0.65,
              }}
            >
              GST {profile.gst_number}
            </span>
          )}


          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
          >
            Back to Top
            <FiArrowUpRight />
          </button>

        </div>

      </div>


      {/* =====================================================
          FOOTER CSS
      ===================================================== */}

      <style>{`

        .footer-heading {
          margin: 0 0 20px;

          color: #ffffff;

          font-size: 15px;
          font-weight: 700;
        }


        .footer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          color: rgba(255,255,255,0.62);

          font-size: 13.5px;

          text-decoration: none;

          transition:
            color .2s ease,
            transform .2s ease;
        }


        .footer-link svg {
          width: 13px;
          height: 13px;

          opacity: 0;

          transform: translate(-5px, 5px);

          transition:
            opacity .2s ease,
            transform .2s ease;
        }


        .footer-link:hover {
          color: #ffffff;

          transform: translateX(3px);
        }


        .footer-link:hover svg {
          opacity: 1;

          transform:
            translate(0, 0);

          color: #e21b23;
        }


        .footer-heading + ul {
          display: flex;
          flex-direction: column;

          gap: 13px;

          list-style: none;

          padding: 0;
          margin: 0;
        }


        /* CONTACT */

        .contact-list {
          display: flex;
          flex-direction: column;

          gap: 20px;
        }


        .contact-item {
          display: flex;
          align-items: flex-start;

          gap: 12px;
        }


        .contact-icon {
          width: 34px;
          height: 34px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 5px;

          background:
            rgba(226,27,35,0.10);

          border:
            1px solid rgba(226,27,35,0.18);

          color: #e21b23;

          font-size: 15px;
        }


        .contact-label {
          display: block;

          margin-bottom: 4px;

          color:
            rgba(255,255,255,0.42);

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: .08em;
        }


        .contact-item p,
        .contact-item a {
          display: block;

          margin: 0;

          color:
            rgba(255,255,255,0.72);

          font-size: 13px;

          line-height: 1.6;

          text-decoration: none;

          transition: color .2s ease;
        }


        .contact-item a:hover {
          color: #e21b23;
        }


        /* SOCIAL */

        .social-button {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          border:
            1px solid rgba(255,255,255,0.14);

          background:
            rgba(255,255,255,0.03);

          color: rgba(255,255,255,0.75);

          text-decoration: none;

          font-size: 15px;

          transition:
            all .25s ease;
        }


        .social-button:hover {
          background: #e21b23;

          border-color: #e21b23;

          color: #ffffff;

          transform: translateY(-3px);
        }


        /* CTA */

        .footer-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 12px 20px;

          background: #e21b23;

          color: #ffffff;

          border-radius: 4px;

          font-size: 13px;
          font-weight: 700;

          text-decoration: none;

          white-space: nowrap;

          transition: all .25s ease;
        }


        .footer-cta-button:hover {
          background: #ffffff;

          color: #14245c;

          transform: translateY(-2px);
        }


        /* BACK TO TOP */

        .back-to-top {
          display: inline-flex;
          align-items: center;

          gap: 6px;

          padding: 0;

          border: none;

          background: transparent;

          color:
            rgba(255,255,255,0.5);

          font-size: 12px;

          cursor: pointer;

          transition: color .2s ease;
        }


        .back-to-top:hover {
          color: #e21b23;
        }


        /* TABLET */

        @media (max-width: 1000px) {

          .footer-grid {
            grid-template-columns:
              1fr 1fr !important;

            gap: 45px 35px !important;
          }

        }


        /* MOBILE */

        @media (max-width: 650px) {

          .footer-main {
            padding:
              55px 20px 40px !important;
          }


          .footer-grid {
            grid-template-columns:
              1fr !important;

            gap: 38px !important;
          }


          .footer-cta {
            flex-direction: column !important;

            align-items: flex-start !important;

            padding: 22px !important;
          }


          .footer-cta-button {
            width: 100%;
          }


          .footer-bottom {
            padding:
              18px 20px !important;

            flex-direction: column !important;

            align-items: flex-start !important;
          }


          .back-to-top {
            margin-top: 5px;
          }

        }


        /* SMALL MOBILE */

        @media (max-width: 400px) {

          .footer-cta h3 {
            font-size: 18px !important;
          }

        }

      `}</style>

    </footer>
  )
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, children }) {
  return (
    <div>

      <h4 className="footer-heading">
        {title}
      </h4>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,

          display: 'flex',
          flexDirection: 'column',

          gap: 13,

          fontSize: 13.5,
        }}
      >
        {children}
      </ul>

    </div>
  )
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({ icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="social-button"
    >
      {icon}
    </a>
  )
}
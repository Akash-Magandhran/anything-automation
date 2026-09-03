import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineMenu,
  HiOutlineX,
} from 'react-icons/hi'

/* =========================================================
   NAVIGATION LINKS
========================================================= */

const LINKS = [
  ['About', '#about'],
  ['Scope of Work', '#scope'],
  ['Machines', '#machines'],
  ['Industries', '#industries'],
  ['Brands', '#brands'],
  ['Contact', '#contact'],
]

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  /* -------------------------------------------------------
     Detect Scroll
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* -------------------------------------------------------
     Close Mobile Menu When Clicking Outside / Escape
  ------------------------------------------------------- */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  /* -------------------------------------------------------
     Close Menu When Screen Becomes Desktop
  ------------------------------------------------------- */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navbarSolid = scrolled || open

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          width: '100%',

          background: navbarSolid
            ? 'rgba(255, 255, 255, 0.96)'
            : '#ffffff',

          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',

          borderBottom: navbarSolid
            ? '1px solid #e5e7eb'
            : '1px solid #eeeeee',

          transition:
            'background 0.35s ease, border-color 0.35s ease',
        }}
      >

        {/* =================================================
            NAVBAR CONTAINER
        ================================================= */}

        <div
          className="navbar-container"
          style={{
            maxWidth: 1400,
            height: 82,
            margin: '0 auto',

            padding: '0 30px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            gap: 30,
          }}
        >

          {/* =================================================
              LOGO
          ================================================= */}
<a
  href="#top"
  className="navbar-logo"
  aria-label="Anything Automation Home"
  style={{
    display: 'flex',
    alignItems: 'center',
    width: 400,
    height: 78,
    flexShrink: 0,
    textDecoration: 'none',
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

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="nav-desktop"
            aria-label="Main navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              gap: 30,

              flex: 1,
            }}
          >

            {LINKS.map(([label, href]) => (
              <NavLink
                key={href}
                label={label}
                href={href}
              />
            ))}

          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <a
            href="#contact"
            className="quote-button nav-desktop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',

              padding: '12px 21px',

              background: '#e21b23',
              color: '#ffffff',

              borderRadius: 4,

              fontSize: 13.5,
              fontWeight: 700,

              textDecoration: 'none',

              whiteSpace: 'nowrap',

              transition:
                'background 0.25s ease, transform 0.25s ease',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background =
                '#14245c'

              event.currentTarget.style.transform =
                'translateY(-2px)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background =
                '#e21b23'

              event.currentTarget.style.transform =
                'translateY(0)'
            }}
          >
            Request a Quote
          </a>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            className="mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={open}
            style={{
              display: 'none',

              alignItems: 'center',
              justifyContent: 'center',

              width: 42,
              height: 42,

              padding: 0,

              background: '#ffffff',

              border: '1px solid #d9dce3',
              borderRadius: 6,

              color: '#14245c',

              fontSize: 23,

              cursor: 'pointer',
            }}
          >
            {open ? (
              <HiOutlineX />
            ) : (
              <HiOutlineMenu />
            )}
          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              style={{
                background: '#ffffff',

                borderTop:
                  '1px solid #eeeeee',

                overflow: 'hidden',
              }}
            >

              <div
                className="mobile-menu-container"
                style={{
                  maxWidth: 1400,
                  margin: '0 auto',

                  display: 'flex',
                  flexDirection: 'column',

                  padding: '20px 24px 25px',

                  gap: 18,
                }}
              >

                {/* Mobile Links */}

                {LINKS.map(([label, href], index) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{
                      x: -15,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                    style={{
                      color: '#172554',

                      fontSize: 15.5,
                      fontWeight: 600,

                      textDecoration: 'none',

                      padding: '5px 0',

                      transition:
                        'color 0.2s ease',
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color =
                        '#e21b23'
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color =
                        '#172554'
                    }}
                  >
                    {label}
                  </motion.a>
                ))}

                {/* Mobile CTA */}

                <motion.a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  initial={{
                    y: 10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: LINKS.length * 0.05,
                    duration: 0.25,
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    width: '100%',

                    padding: '13px 20px',

                    background: '#e21b23',
                    color: '#ffffff',

                    borderRadius: 4,

                    fontSize: 14,
                    fontWeight: 700,

                    textDecoration: 'none',
                  }}
                >
                  Request a Quote
                </motion.a>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>{`

        /* ================================================
           TABLET
        ================================================ */

        @media (max-width: 1100px) {

          .navbar-container {
            padding: 0 22px !important;
            gap: 20px !important;
          }

          .navbar-logo {
            width: 215px !important;
          }

          .nav-desktop nav {
            gap: 20px !important;
          }

        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 900px) {

          .nav-desktop {
            display: none !important;
          }

          .mobile-menu-button {
            display: inline-flex !important;
          }

          .navbar-container {
            height: 76px !important;
            padding: 0 20px !important;
          }

          .navbar-logo {
            width: 210px !important;
            height: 66px !important;
          }

        }


        /* ================================================
           SMALL MOBILE
        ================================================ */

        @media (max-width: 500px) {

          .navbar-container {
            padding: 0 16px !important;
          }

          .navbar-logo {
            width: 185px !important;
            height: 62px !important;
          }

          .mobile-menu-button {
            width: 40px !important;
            height: 40px !important;
          }

          .mobile-menu-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

        }

      `}</style>

    </>
  )
}


/* =========================================================
   NAV LINK COMPONENT
========================================================= */

function NavLink({ label, href }) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',

        color: hover
          ? '#e21b23'
          : '#172554',

        fontSize: 14,
        fontWeight: 600,

        textDecoration: 'none',

        paddingBottom: 7,

        transition:
          'color 0.2s ease',

        whiteSpace: 'nowrap',
      }}
    >

      {label}

      {/* Animated underline */}

      <span
        style={{
          position: 'absolute',

          left: 0,
          bottom: 0,

          width: hover ? '100%' : '0%',
          height: 2,

          background: '#e21b23',

          borderRadius: 2,

          transition:
            'width 0.25s ease',
        }}
      />

    </a>
  )
}
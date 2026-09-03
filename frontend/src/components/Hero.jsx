import { motion } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi'

const HERO_IMG = 'https://images.pexels.com/photos/18471441/pexels-photo-18471441.jpeg?auto=compress&cs=tinysrgb&w=1920'

export default function Hero({ profile }) {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${HERO_IMG})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(115deg, rgba(11,31,58,0.94) 0%, rgba(11,31,58,0.88) 40%, rgba(17,75,140,0.55) 100%)',
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1, padding: '150px 24px 90px' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: 40 }}>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}
            >
              Empire of Intelligence
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ color: '#fff', fontSize: 'clamp(34px, 5vw, 58px)', marginTop: 22, maxWidth: 560 }}
            >
              Engineering the Future of <span style={{ color: 'var(--accent)' }}>Industrial Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ color: 'rgba(255,255,255,0.78)', fontSize: 17.5, maxWidth: 480, marginTop: 20 }}
            >
              {profile.hero_subtitle} — PLC, HMI &amp; SCADA programming, robotic integration, and custom machine manufacturing, delivered end to end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}
            >
              <a href="#contact" className="btn btn-primary">
                Request a Quote <HiOutlineArrowRight />
              </a>
              <a href="#scope" className="btn btn-ghost">Explore Services</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
              style={{ display: 'flex', gap: 44, marginTop: 56, flexWrap: 'wrap' }}
            >
              {[
                [`${profile.years_of_experience}+`, 'Years Experience'],
                ['PLC · HMI · SCADA', 'Full-Stack Automation'],
                ['End-to-End', 'Design to Deployment'],
              ].map(([big, small]) => (
                <div key={small}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: '#fff', fontWeight: 700 }}>{big}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 4 }}>{small}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-panel"
            style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
          >
            <img
              src="https://images.pexels.com/photos/34194567/pexels-photo-34194567.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Robotic arm in an automated industrial cell"
              loading="lazy"
              style={{ width: '100%', height: 460, objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(11,31,58,0.55), transparent 45%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', borderRadius: 14, padding: '14px 18px', border: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: 13, color: 'var(--text-mid)' }}>Robotic &amp; PLC Integration</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary)' }}>Built, wired &amp; commissioned in-house</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-image-panel { display: none; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'
import Counter from './Counter'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About({ profile }) {
  const stats = [
    { to: 25, suffix: '+', label: 'Projects Delivered' },
    { to: 40, suffix: '+', label: 'Happy Clients' },
    { to: profile.years_of_experience || 8, suffix: '+', label: 'Years of Experience' },
  ]

  return (
    <section id="about" className="section section-alt">
      <div className="wrap grid grid-2" style={{ alignItems: 'center', gap: 60 }}>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          style={{ position: 'relative' }}
        >
          <img
            src="https://images.pexels.com/photos/32845694/pexels-photo-32845694.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Automation engineer inspecting an industrial control panel"
            loading="lazy"
            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 420, objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: -24, right: -18, background: '#fff',
            borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', padding: '18px 24px',
            border: '1px solid var(--line)', display: 'flex', gap: 26,
          }} className="about-stat-card">
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 24, color: 'var(--secondary)' }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--text-low)', marginTop: 2, maxWidth: 84 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <span className="eyebrow">Company Overview</span>
          <h2 style={{ marginTop: 16, fontSize: 'clamp(26px,3vw,38px)' }}>
            Smart automation. Stronger industries.
          </h2>
          <p style={{ color: 'var(--text-mid)', marginTop: 18, fontSize: 16 }}>{profile.about_text}</p>

          <a href="#contact" className="btn btn-outline" style={{ marginTop: 32, border: '1px solid var(--line)' }}>
            Talk to Our Team
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-stat-card { position: static !important; margin-top: 18px; justify-content: space-between; }
        }
      `}</style>
    </section>
  )
}

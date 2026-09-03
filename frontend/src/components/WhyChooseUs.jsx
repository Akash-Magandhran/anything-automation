import { motion } from 'framer-motion'
import {
  FiAward, FiUsers, FiSliders, FiClock, FiShield, FiCheckCircle,
} from 'react-icons/fi'

const ICONS = [FiAward, FiUsers, FiSliders, FiClock, FiShield, FiCheckCircle]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 3) * 0.08 } }),
}

export default function WhyChooseUs({ items }) {
  if (!items || !items.length) return null
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Built for reliability, engineered for scale</h2>
        </div>
        <div className="grid grid-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={item.id ?? i} className="card why-card"
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
                style={{ textAlign: 'center' }}
              >
                <div className="card-icon" style={{ margin: '0 auto 18px' }}><Icon /></div>
                <h3 style={{ fontSize: 16 }}>{item.text}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        .why-card:hover { transform: translateY(-8px) scale(1.02); }
      `}</style>
    </section>
  )
}

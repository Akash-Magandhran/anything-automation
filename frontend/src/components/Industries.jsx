import { motion } from 'framer-motion'
import {
  FiBox, FiCoffee, FiCpu, FiTool,
} from 'react-icons/fi'
import { GiMedicinePills, GiSewingMachine, GiCarWheel } from 'react-icons/gi'

const ICON_MAP = [FiBox, FiCoffee, GiMedicinePills, GiSewingMachine, GiCarWheel, FiCpu, FiTool]
const GRADIENTS = [
  'linear-gradient(135deg, #0B1F3A, #114B8C)',
  'linear-gradient(135deg, #114B8C, #00AEEF)',
  'linear-gradient(135deg, #0B1F3A, #00AEEF)',
  'linear-gradient(135deg, #114B8C, #0B1F3A)',
  'linear-gradient(135deg, #00AEEF, #114B8C)',
  'linear-gradient(135deg, #0B1F3A, #114B8C)',
  'linear-gradient(135deg, #114B8C, #00AEEF)',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 4) * 0.08 } }),
}

export default function Industries({ items }) {
  return (
    <section id="industries" className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Industries We Serve</span>
          <h2>Trusted across sectors</h2>
          <p>From packaging lines to pharmaceutical cleanrooms — automation tuned to each industry's standards.</p>
        </div>
        <div className="grid grid-4">
          {items.map((item, i) => {
            const Icon = ICON_MAP[i % ICON_MAP.length]
            return (
              <motion.div
                key={item.id ?? i} className="industry-card"
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              >
                <div className="industry-icon"><Icon /></div>
                <span className="industry-name">{item.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        .industry-card {
          position: relative; border-radius: var(--radius); overflow: hidden;
          height: 190px; display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 14px; color: #fff; box-shadow: var(--shadow-sm);
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .industry-card:hover { transform: scale(1.04); box-shadow: var(--shadow-lg); }
        .industry-icon { font-size: 30px; transition: transform .4s ease; }
        .industry-card:hover .industry-icon { transform: scale(1.15); }
        .industry-name { font-weight: 600; font-size: 15px; letter-spacing: 0.01em; }
      `}</style>
    </section>
  )
}

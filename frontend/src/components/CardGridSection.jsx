import { motion } from 'framer-motion'
import {
  FiCpu, FiSettings, FiTool, FiServer, FiWifi, FiActivity,
  FiBox, FiLayers, FiPenTool, FiZap, FiArrowUpRight,
} from 'react-icons/fi'

const ICONS = [FiCpu, FiSettings, FiTool, FiServer, FiWifi, FiActivity, FiBox, FiLayers, FiPenTool, FiZap]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 4) * 0.08 } }),
}

export default function CardGridSection({ id, eyebrow, title, subtitle, items, columns = 3, showDesc = true, alt = false }) {
  return (
    <section id={id} className={`section ${alt ? '' : 'section-alt'}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className={`grid grid-${columns}`}>
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                className="card gradient-border-card" key={item.id ?? i}
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}
              >
                <div className="card-icon"><Icon /></div>
                <h3>{item.title || item.name}</h3>
                {showDesc && item.description && <p>{item.description}</p>}
                <span className="learn-more">
                  Learn More <FiArrowUpRight />
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        .gradient-border-card { position: relative; overflow: hidden; }
        .gradient-border-card::before {
          content: '';
          position: absolute; inset: 0; border-radius: var(--radius);
          padding: 1.5px;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s ease;
        }
        .gradient-border-card:hover::before { opacity: 1; }
        .gradient-border-card:hover { box-shadow: 0 20px 44px rgba(0,174,239,0.22); }
        .learn-more {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 16px; font-size: 13.5px; font-weight: 600; color: var(--secondary);
          opacity: 0; transform: translateY(4px); transition: all .3s ease;
        }
        .gradient-border-card:hover .learn-more { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}

export default function Brands({ brands }) {
  const loop = [...brands, ...brands] // duplicated for seamless marquee loop

  return (
    <section id="brands" className="section" style={{ paddingBottom: 70 }}>
      <div className="wrap">
        <div className="section-head center" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Brand Support</span>
          <h2>PLC &amp; HMI brands we work with</h2>
          <p>We work with all major PLC &amp; HMI brands to deliver the best solution for your industry.</p>
        </div>
      </div>

      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {loop.map((b, i) => (
            <div className="brand-pill" key={`${b.id ?? b.name}-${i}`}>
              {b.logo
                ? <img src={b.logo} alt={b.name} />
                : <span>{b.name}</span>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
        .marquee-track { display: flex; gap: 18px; width: max-content; animation: marquee 22s linear infinite; }
        .marquee-track-wrap:hover .marquee-track { animation-play-state: paused; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .brand-pill {
          padding: 20px 34px; background: #fff; border: 1px solid var(--line); border-radius: 12px;
          font-family: var(--font-display); font-weight: 600; font-size: 15px; color: var(--text-low);
          filter: grayscale(1); transition: filter .3s ease, color .3s ease, box-shadow .3s ease;
          white-space: nowrap; box-shadow: var(--shadow-sm);
        }
        .brand-pill:hover { filter: grayscale(0); color: var(--secondary); box-shadow: var(--shadow-md); }
        .brand-pill img { height: 26px; }
      `}</style>
    </section>
  )
}

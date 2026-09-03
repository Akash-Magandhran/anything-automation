import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi'
import { submitEnquiry } from '../api/client'

const initial = { name: '', email: '', phone: '', company: '', subject: '', message: '' }

export default function Contact({ profile }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitEnquiry(form)
      setStatus('sent')
      setForm(initial)
    } catch (err) {
      setStatus('error')
    }
  }

  const fullAddress = `${profile.address_line}, ${profile.locality}, ${profile.district}, ${profile.state} ${profile.pincode}`
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=14&output=embed`

  return (
    <section id="contact" className="section section-alt">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Contact Us</span>
          <h2>Start your automation project</h2>
          <p>Tell us about your line, machine, or system — we'll get back with a scoped plan and a quote.</p>
        </div>

        <div className="grid grid-2" style={{ gap: 32, alignItems: 'stretch' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', flex: 1, minHeight: 260 }}>
              <iframe
                title="Company location"
                src={mapSrc}
                width="100%" height="100%" style={{ border: 0, minHeight: 260 }}
                loading="lazy"
              />
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <InfoRow icon={<FiMapPin />} label="Address">{fullAddress}</InfoRow>
              <InfoRow icon={<FiPhone />} label="Phone"><a href={`tel:${profile.contact_phone}`}>{profile.contact_phone}</a></InfoRow>
              <InfoRow icon={<FiMail />} label="Email"><a href={`mailto:${profile.contact_email}`}>{profile.contact_email}</a></InfoRow>
              <InfoRow icon={<FiClock />} label="Office Hours">Mon–Sat, 9:30 AM – 6:30 PM</InfoRow>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
            className="card-glass"
            style={{ padding: 34, display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <Row>
              <Field name="name" label="Name" value={form.name} onChange={onChange} required />
              <Field name="phone" label="Phone" value={form.phone} onChange={onChange} />
            </Row>
            <Row>
              <Field name="email" label="Email" type="email" value={form.email} onChange={onChange} required />
              <Field name="company" label="Company" value={form.company} onChange={onChange} />
            </Row>
            <Field name="subject" label="Subject" value={form.subject} onChange={onChange} />
            <div>
              <label style={labelStyle}>Message</label>
              <textarea name="message" value={form.message} onChange={onChange} required rows={5}
                style={{ ...inputStyle, resize: 'vertical' }} placeholder="Describe your project, line, or machine..." />
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 4 }}>
              {status === 'sending' ? 'Sending…' : <>Send Enquiry <FiSend /></>}
            </button>

            {status === 'sent' && <p style={{ color: '#0F9D58', fontSize: 14 }}>Thanks — your enquiry has been received. We'll be in touch shortly.</p>}
            {status === 'error' && <p style={{ color: '#D93025', fontSize: 14 }}>Something went wrong sending that — please try again or email us directly.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

const labelStyle = { display: 'block', fontSize: 13, color: 'var(--text-mid)', marginBottom: 6, fontWeight: 500 }
const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: 10,
  border: '1px solid var(--line)', background: 'rgba(255,255,255,0.7)',
  color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 14.5, outline: 'none',
}

function Row({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>{children}</div>
}

function Field({ name, label, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label style={labelStyle}>{label}{required && ' *'}</label>
      <input name={name} type={type} value={value} onChange={onChange} required={required} style={inputStyle} />
    </div>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: 'linear-gradient(135deg, var(--secondary), var(--accent))', color: '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
      }}>{icon}</span>
      <div>
        <div style={{ color: 'var(--text-low)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
        <div style={{ color: 'var(--text)', fontSize: 14.5, marginTop: 2 }}>{children}</div>
      </div>
    </div>
  )
}

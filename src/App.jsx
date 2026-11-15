import { motion } from 'framer-motion'
import { Mail, Phone, Download, ArrowUpRight, MapPin } from 'lucide-react'
import { profile, stats, about, achievements, extras, experience, skills, current, earlier, marquee } from './data'
import './index.css'

const Github = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)
const Linkedin = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] },
}

function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <motion.header className="sec-head" {...fade}>
        <span className="mono">{num}</span>
        <h2>{title}</h2>
      </motion.header>
      {children}
    </section>
  )
}

function Media({ kind }) {
  if (kind === 'phones')
    return (
      <div className="media phones">
        <img src="/media/phone-1.jpg" alt="Phone listing from the Apex store" loading="lazy" />
        <img src="/media/phone-2.jpg" alt="Phone listing from the Apex store" loading="lazy" />
        <img src="/media/phone-3.jpg" alt="Phone listing from the Apex store" loading="lazy" />
      </div>
    )
  if (kind === 'stockbill')
    return (
      <div className="media mock" aria-hidden="true">
        <div className="mock-bar"><i /><i /><i /><img src="/media/stockbill-icon.png" alt="" /> Universal Billing</div>
        <div className="mock-body">
          <div className="mock-bars">
            {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
              <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          <div className="mock-lines"><b>TOTAL AMOUNT</b><span /><span /><span className="short" /></div>
        </div>
      </div>
    )
  if (kind === 'tracker')
    return (
      <div className="media tracker" aria-hidden="true">
        {[['Customer A', 'Overdue', 'red'], ['Customer B', 'Due in 3 days', 'amber'], ['Customer C', 'Paid', 'green']].map(([n, s, c]) => (
          <div key={n} className="row"><span>{n}</span><em className={c}>{s}</em></div>
        ))}
      </div>
    )
  if (kind === 'studio')
    return (
      <div className="media studio" aria-hidden="true">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
          <div key={d} className="day">
            <small>{d}</small>
            <span className={i === 2 ? 'clash' : ''} style={{ height: `${[46, 70, 58, 34, 64][i]}%` }} />
          </div>
        ))}
      </div>
    )
  return null
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">abdul<b>basit</b></a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mono status"><span className="dot" /> Available for senior &amp; lead roles · {profile.location}</p>
            <h1>
              {profile.name.split(' ')[0]}<br />
              <em>{profile.name.split(' ')[1]}</em>
            </h1>
            <p className="role">{profile.title}</p>
            <p className="lead">{profile.tagline}</p>
            <div className="cta">
              <a className="btn primary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              <a className="btn" href={profile.cv} download><Download size={16} /> Download CV</a>
              <span className="social">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
              </span>
            </div>
          </motion.div>

          <motion.aside className="now" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="mono">Now building</p>
            <ul>
              {current.map((p) => (
                <li key={p.title}><a href="#work"><span>{p.title}</span><small>{p.badge}</small></a></li>
              ))}
            </ul>
          </motion.aside>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>{[...marquee, ...marquee].map((t, i) => <span key={i}>{t}</span>)}</div>
        </div>

        <motion.div className="stats" {...fade}>
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </motion.div>

        <Section id="work" num="01" title="Current work">
          <div className="bento">
            {current.map((p, i) => (
              <motion.article key={p.title} className="card" {...fade} transition={{ ...fade.transition, delay: (i % 2) * 0.08 }}>
                <Media kind={p.kind} />
                <div className="card-body">
                  <div className="card-top"><h3>{p.title}</h3><span className="badge">{p.badge}</span></div>
                  <p>{p.blurb}</p>
                  <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                  <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.h3 className="sub" {...fade}>Earlier work</motion.h3>
          <div className="rows">
            {earlier.map((p) => (
              <motion.div key={p.title} className="rowline" {...fade}>
                <span className="mono">{p.area}</span>
                <strong>{p.title}</strong>
                <p>{p.blurb}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="about" num="02" title="About">
          <div className="about">
            <motion.div {...fade}>{about.map((t, i) => <p key={t} className={i === 0 ? 'big' : ''}>{t}</p>)}</motion.div>
            <motion.ul className="wins" {...fade}>
              <li className="mono">Highlights</li>
              {achievements.map((a) => <li key={a}>{a}</li>)}
            </motion.ul>
          </div>
        </Section>

        <Section id="experience" num="03" title="Experience">
          <div className="jobs">
            {experience.map((e, i) => (
              <motion.details key={e.company + e.period} className="job" open={i === 0} {...fade}>
                <summary>
                  <span className="mono when">{e.period}</span>
                  <span className="what"><strong>{e.role}</strong><em>{e.company}</em></span>
                  {e.points && <span className="plus" aria-hidden="true" />}
                </summary>
                {e.points && (
                  <div className="job-body">
                    <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
                    {e.stack && <div className="tags">{e.stack.map((t) => <span key={t}>{t}</span>)}</div>}
                  </div>
                )}
              </motion.details>
            ))}
          </div>
        </Section>

        <Section id="skills" num="04" title="Skills">
          <div className="skills">
            {skills.map((g) => (
              <motion.div key={g.group} className="skill" {...fade}>
                <h4 className="mono">{g.group}</h4>
                <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <dl className="edu">
            <div><dt className="mono">Education</dt><dd>{extras.education}</dd></div>
            <div><dt className="mono">Certifications</dt><dd>{extras.certifications}</dd></div>
            <div><dt className="mono">Languages</dt><dd>{extras.languages}</dd></div>
          </dl>
        </Section>

        <section id="contact" className="contact">
          <motion.div {...fade}>
            <p className="mono">05 · Contact</p>
            <h2>Let&apos;s build<br /><em>something good.</em></h2>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={26} /></a>
            <div className="cta">
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} /> {profile.phone}</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
            </div>
            <p className="loc"><MapPin size={14} /> {profile.location}</p>
          </motion.div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}.</footer>
    </>
  )
}

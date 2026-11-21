import { motion } from 'framer-motion'
import { Mail, Phone, Download, ArrowUpRight, MapPin } from 'lucide-react'
import { profile, stats, about, achievements, extras, experience, skills, current, earlier } from './data'
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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.45 },
}

const shots = {
  phones: ['/media/shot-apex.jpg', 'Apex Mobile Store product page with storage and colour options', 'apex-mobile-store'],
  stockbill: ['/media/shot-billing.jpg', 'Universal Billing System products and stock screen, with demo data', 'universal-billing'],
  tracker: ['/media/shot-tracker.jpg', 'Installment Tracker dashboard, with demo data', 'installment-tracker'],
  studio: ['/media/shot-studio.jpg', 'Studio Manager dashboard, with demo data', 'studio-manager'],
}

function Window({ title, children, className = '' }) {
  return (
    <div className={`window ${className}`}>
      <div className="bar"><i /><i /><i /><span>{title}</span></div>
      {children}
    </div>
  )
}

function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <motion.h2 {...fade}><span className="num">{num}.</span> {title}<span className="rule" /></motion.h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo"><span>~/</span>abdul-basit</a>
        <nav>
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#skills">skills</a>
          <a href="#contact" className="nav-cta">contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="comment">// hi, my name is</p>
            <h1>{profile.name}</h1>
            <p className="role"><span>&gt;</span> {profile.title}<b className="cursor" /></p>
            <p className="lead">{profile.tagline}</p>
            <div className="cta">
              <a className="btn primary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              <a className="btn" href={profile.cv} download><Download size={16} /> Download CV</a>
            </div>
            <div className="social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="avail"><i /> available for senior &amp; lead roles</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Window title="basit.js" className="code">
              <pre>
                <span className="k">const</span> <span className="v">basit</span> = {'{'}{'\n'}
                {'  '}role: <span className="s">'Full Stack JS Engineer'</span>,{'\n'}
                {'  '}experience: <span className="s">'10+ years'</span>,{'\n'}
                {'  '}stack: [<span className="s">'React'</span>, <span className="s">'Next.js'</span>,{'\n'}
                {'    '}<span className="s">'Angular'</span>, <span className="s">'Node.js'</span>],{'\n'}
                {'  '}location: <span className="s">'Rawalpindi, PK'</span>,{'\n'}
                {'  '}remote: <span className="n">true</span>,{'\n'}
                {'  '}building: <span className="n">{current.length}</span>, <span className="c">// see below</span>{'\n'}
                {'}'}
              </pre>
            </Window>
          </motion.div>
        </section>

        <motion.div className="stats" {...fade}>
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </motion.div>

        <Section id="work" num="01" title="current work">
          <div className="grid">
            {current.map((p, i) => {
              const s = shots[p.kind]
              return (
                <motion.article key={p.title} className="card" {...fade} transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}>
                  <Window title={s[2]}>
                    <a className="shot" href={s[0]} target="_blank" rel="noreferrer" aria-label={`Open screenshot: ${s[1]}`}>
                      <img src={s[0]} alt={s[1]} loading="lazy" width="1280" height="800" />
                    </a>
                  </Window>
                  <div className="card-body">
                    <div className="card-top"><h3>{p.title}</h3><span className="badge">{p.badge}</span></div>
                    <p>{p.blurb}</p>
                    <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                    <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <motion.p className="comment sub" {...fade}>// earlier work</motion.p>
          <div className="rows">
            {earlier.map((p) => (
              <motion.div key={p.title} className="rowline" {...fade}>
                <span className="area">{p.area}</span>
                <strong>{p.title}</strong>
                <p>{p.blurb}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="about" num="02" title="about">
          <div className="about">
            <motion.div {...fade}>{about.map((t) => <p key={t}>{t}</p>)}</motion.div>
            <motion.div {...fade}>
              <Window title="highlights.diff">
                <ul className="diff">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
              </Window>
            </motion.div>
          </div>
        </Section>

        <Section id="experience" num="03" title="experience">
          <div className="timeline">
            {experience.map((e) => (
              <motion.div key={e.company + e.period} className="job" {...fade}>
                <p className="when">{e.period}</p>
                <h3>{e.role} <span>@ {e.company}</span></h3>
                {e.points && <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>}
                {e.stack && <div className="tags">{e.stack.map((t) => <span key={t}>{t}</span>)}</div>}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" num="04" title="skills">
          <div className="skills">
            {skills.map((g) => (
              <motion.div key={g.group} className="skill" {...fade}>
                <h4>// {g.group.toLowerCase()}</h4>
                <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <dl className="edu">
            <div><dt>education</dt><dd>{extras.education}</dd></div>
            <div><dt>certifications</dt><dd>{extras.certifications}</dd></div>
            <div><dt>languages</dt><dd>{extras.languages}</dd></div>
          </dl>
        </Section>

        <Section id="contact" num="05" title="contact">
          <motion.div {...fade}>
            <Window title="contact.sh" className="contact">
              <div className="contact-body">
                <p className="prompt"><span>$</span> echo "Let&apos;s build something together"</p>
                <p className="lead">Have a product to build or a team to lead? I&apos;d like to hear about it.</p>
                <div className="cta">
                  <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
                  <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} /> {profile.phone}</a>
                  <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
                  <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
                </div>
                <p className="loc"><MapPin size={14} /> {profile.location}</p>
              </div>
            </Window>
          </motion.div>
        </Section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}.</footer>
    </>
  )
}

import { motion } from 'framer-motion'
import { Mail, Phone, Download, ArrowUpRight, Briefcase, Code2, FolderGit2, MapPin, User, Check } from 'lucide-react'
import { profile, stats, about, achievements, extras, experience, skills, projects } from './data'
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
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="section">
      <motion.h2 {...fade}>
        <Icon size={22} /> {title}
      </motion.h2>
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
      <div className="media mock">
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
      <div className="media tracker">
        {[['Ali Raza', 'Overdue', 'red'], ['Sana Khan', 'Due in 3 days', 'amber'], ['Usman T.', 'Paid', 'green']].map(([n, s, c]) => (
          <div key={n} className="row"><span>{n}</span><em className={c}>{s}</em></div>
        ))}
      </div>
    )
  return null
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">AB<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow"><span className="dot" /> Available for senior &amp; lead roles</p>
            <h1>
              Hi, I&apos;m <span className="grad">{profile.name}</span>.<br />
              {profile.title}.
            </h1>
            <p className="lead">{profile.tagline}</p>
            <div className="cta">
              <a className="btn primary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              <a className="btn" href={profile.cv} download><Download size={16} /> Download CV</a>
            </div>
            <div className="social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </motion.div>
          <motion.div className="avatar" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            {/* Replace with a real photo: put /public/media/profile.jpg and swap this block for <img src="/media/profile.jpg" /> */}
            <span>AB</span>
          </motion.div>
        </section>

        <motion.div className="stats" {...fade}>
          {stats.map((s) => (
            <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </motion.div>

        <Section id="about" icon={User} title="About">
          <div className="about">
            <motion.div {...fade}>{about.map((t) => <p key={t}>{t}</p>)}</motion.div>
            <motion.ul className="wins" {...fade}>
              {achievements.map((a) => <li key={a}><Check size={16} /> {a}</li>)}
            </motion.ul>
          </div>
        </Section>

        <Section id="projects" icon={FolderGit2} title="Selected work">
          <div className="grid">
            {projects.map((p, i) => (
              <motion.article key={p.title} className={`card ${p.kind !== 'plain' ? 'featured' : ''}`} {...fade} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}>
                <Media kind={p.kind} />
                <span className="badge">{p.badge}</span>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" icon={Briefcase} title="Experience">
          <div className="timeline">
            {experience.map((e) => (
              <motion.div key={e.company + e.period} className="job" {...fade}>
                <div className="when">{e.period}</div>
                <div>
                  <h3>{e.role} <span>· {e.company}</span></h3>
                  {e.points && <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>}
                  {e.stack && <div className="tags">{e.stack.map((t) => <span key={t}>{t}</span>)}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" icon={Code2} title="Skills">
          <div className="skills">
            {skills.map((g) => (
              <motion.div key={g.group} className="skill" {...fade}>
                <h4>{g.group}</h4>
                <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <div className="edu"><p>{extras.education}</p><p>Certifications: {extras.certifications}</p><p>Languages: {extras.languages}</p></div>
        </Section>

        <Section id="contact" icon={Mail} title="Let's work together">
          <motion.div className="contact" {...fade}>
            <p>Have a product to build or a team to lead? I&apos;d love to hear about it.</p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
              <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} /> {profile.phone}</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </div>
            <p className="loc"><MapPin size={14} /> {profile.location}</p>
          </motion.div>
        </Section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}.</footer>
    </>
  )
}

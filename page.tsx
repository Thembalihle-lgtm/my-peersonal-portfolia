import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const skills = [
  { title: "Digital & Office Tools", items: ["Microsoft Excel", "Microsoft Word", "Microsoft Access"] },
  { title: "Business Systems", items: ["Pastel", "Payroll systems", "Computerised financial systems"] },
  { title: "Professional Skills", items: ["Communication", "Teamwork", "Organisation", "Problem solving"] },
];

const projects = [
  {
    number: "01",
    status: "Concept project",
    title: "Personal Budget Tracker",
    description:
      "A planned beginner-friendly app concept for tracking income, expenses and monthly savings goals in one clear dashboard.",
    stack: ["Planned: HTML", "CSS", "JavaScript"],
    icon: "budget",
  },
  {
    number: "02",
    status: "Concept project",
    title: "Student Bursary Checklist",
    description:
      "A planned checklist tool to help students organise application steps and supporting documents before submitting a bursary application.",
    stack: ["Planned: HTML", "CSS", "JavaScript"],
    icon: "checklist",
  },
  {
    number: "03",
    status: "Concept project",
    title: "Stock & Supply Tracker",
    description:
      "A planned simple inventory interface inspired by supply-chain administration, with item records, stock levels and status indicators.",
    stack: ["Planned: React", "CSS", "TypeScript"],
    icon: "stock",
  },
];

const experience = [
  {
    role: "Security Officer",
    company: "Quatro Security Services — Gosforth Park DHL",
    date: "December 2025 – May 202[confirm year]",
    details:
      "Security role. Add a short, accurate summary of responsibilities and confirm the end date before publishing.",
  },
  {
    role: "Supply Chain In-Service",
    company: "Department of Health — Ekhombe District Hospital",
    date: "October 2023 – March 2025",
    details:
      "Supported service and administrative processes, assisted clients with applications and contributed to a professional, helpful service experience.",
  },
  {
    role: "Admin Assistant (NSFAS)",
    company: "Majuba TVET College — Dundee",
    date: "January 2022 – February 2022",
    details:
      "Helped students with bursary applications, checked supporting documents, captured and verified data, responded to queries, and supported filing, scanning and email administration.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Thembalihle Ngubane home">
          <span className="brand-mark">TN</span>
          <span>Thembalihle Ngubane<span className="brand-dot">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s connect <ArrowRight size={15} /></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> ASA 23 · SOFTWARE DEVELOPMENT PORTFOLIO</div>
          <h1>Building useful things with <span>curiosity</span> and purpose.</h1>
          <p className="hero-lede">
            I&apos;m Thembalihle Ngubane — a Financial Management graduate with experience in administration and supply-chain support, currently growing my skills in software development.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Get in touch</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> South Africa</span>
            <span><span className="status-dot" /> Open to learning opportunities</span>
          </div>
        </div>
        <div className="hero-card" aria-label="Portfolio introduction card">
          <div className="card-orb orb-one" />
          <div className="card-orb orb-two" />
          <div className="code-window">
            <div className="window-top"><span /><span /><span /><small>about-me.ts</small></div>
            <div className="code-lines">
              <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
              <p className="indent"><span className="code-aqua">name</span>: <span className="code-green">&quot;Thembalihle&quot;</span>,</p>
              <p className="indent"><span className="code-aqua">background</span>: <span className="code-green">&quot;Finance & Admin&quot;</span>,</p>
              <p className="indent"><span className="code-aqua">mindset</span>: <span className="code-green">&quot;Always learning&quot;</span>,</p>
              <p className="indent"><span className="code-aqua">goal</span>: <span className="code-green">&quot;Build with purpose&quot;</span></p>
              <p>{"}"};</p>
              <p className="code-comment">// One step at a time.</p>
            </div>
          </div>
          <div className="floating-chip"><Sparkles size={15} /> Learning by building</div>
          <div className="hero-card-footer"><span>PORTFOLIO / 2026</span><span className="footer-mark">TN<span>.</span></span></div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <div><GraduationCap size={20} /><span>National N Diploma<br /><strong>Financial Management</strong></span></div>
          <div><BriefcaseBusiness size={20} /><span>Experience in<br /><strong>Administration & Support</strong></span></div>
          <div><ShieldCheck size={20} /><span>Certificate earned<br /><strong>Google AI Essentials</strong></span></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Practical experience.<br /><span>Future-focused mindset.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-symbol"><UserRound size={31} /><span>TN</span></div>
          <div className="about-content">
            <p className="about-lede">I bring a foundation in financial management and hands-on experience supporting people, documents and day-to-day processes.</p>
            <p>My experience across student bursary administration and supply-chain support has strengthened my attention to detail, communication and ability to work with structured information. I am now building on that foundation as I develop my software development skills.</p>
            <div className="about-note"><span className="note-line" /> This portfolio will grow as I complete learning activities and publish real projects.</div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">02 / SKILLS</p><h2>Tools I use.<br /><span>Strengths I bring.</span></h2></div>
          <p className="section-intro">A snapshot of my current business, digital and professional skills. Development technologies should be added here as I practise and can demonstrate them.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><Code2 size={19} /></div>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}><span className="skill-bullet" />{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="small-note">Before publishing, add any verified programming languages, frameworks or developer tools you have studied.</p>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap section-block">
          <div className="section-heading section-heading-row">
            <div><p className="eyebrow">03 / SELECTED WORK</p><h2>Ideas with a<br /><span>real-world purpose.</span></h2></div>
            <p className="section-intro">These are clearly labelled project concepts—not completed projects. Replace each card with your own working project, repository link and screenshots before final submission.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art project-art-${project.icon}`}>
                  <div className="project-art-top"><span>{project.number} / CONCEPT</span><ExternalLink size={16} /></div>
                  {project.icon === "budget" && <div className="mini-dashboard"><div className="mini-label">Monthly overview</div><div className="mini-total">R 8,450</div><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="mini-caption">Illustrative UI only</div></div>}
                  {project.icon === "checklist" && <div className="mini-checks"><div className="mini-label">Application checklist</div><span><i /> Personal details</span><span><i /> Supporting documents</span><span><i /> Review application</span><span className="check-muted"><i /> Submit application</span></div>}
                  {project.icon === "stock" && <div className="mini-stock"><div className="mini-label">Stock status</div><div className="stock-row"><span>Office supplies</span><b>In stock</b></div><div className="stock-row"><span>Stationery</span><b className="stock-low">Low stock</b></div><div className="stock-row"><span>Equipment</span><b>In stock</b></div></div>}
                </div>
                <div className="project-body">
                  <div className="project-status">{project.status}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <span className="project-link project-link-disabled">Repository link to be added <ArrowRight size={15} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="education">
        <div className="section-heading"><p className="eyebrow">04 / EDUCATION & CERTIFICATIONS</p><h2>The foundation<br /><span>behind the work.</span></h2></div>
        <div className="education-list">
          <article className="education-item">
            <div className="education-icon"><GraduationCap size={21} /></div>
            <div className="education-main"><h3>National N Diploma in Financial Management</h3><p>Majuba TVET College · 2021</p><span>Computerised Financial Systems, Financial Accounting, Cost and Management Accounting, Income Tax, and Entrepreneurship & Business Management.</span></div>
            <span className="education-date">2021</span>
          </article>
          <article className="education-item">
            <div className="education-icon"><GraduationCap size={21} /></div>
            <div className="education-main"><h3>Grade 12</h3><p>Nomafu High School · 2019</p><span>Accounting, Business Studies, Economics, Mathematics, English and IsiZulu among the listed subjects.</span></div>
            <span className="education-date">2019</span>
          </article>
          <article className="education-item">
            <div className="education-icon"><ShieldCheck size={21} /></div>
            <div className="education-main"><h3>Google AI Essentials</h3><p>Coursera · Certificate earned</p><span>Add the certificate issue date and credential link if available. Add the remaining ASA 23 Coursera certificates here as well.</span></div>
            <span className="education-date">2026</span>
          </article>
        </div>
      </section>

      <section className="section-wrap section-block" id="experience">
        <div className="section-heading"><p className="eyebrow">05 / EXPERIENCE</p><h2>Experience that<br /><span>shapes how I work.</span></h2></div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-marker">{String(index + 1).padStart(2, "0")}</div>
              <div className="experience-main"><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.details}</p></div>
              <span className="experience-date">{item.date}</span>
            </article>
          ))}
        </div>
        <p className="small-note">Please confirm the Quatro Security Services end date; the uploaded CV shows “May 202” with the final digit missing.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div><p className="eyebrow">06 / CONTACT</p><h2>Let&apos;s make the<br /><span>next thing useful.</span></h2><p className="contact-copy">I&apos;m open to learning, collaboration and opportunities to grow in technology and digital problem-solving.</p></div>
          <div className="contact-card">
            <div className="contact-card-head"><span>CONTACT DETAILS</span><ArrowDownRight size={18} /></div>
            <a href="mailto:thembalihle028@gmail.com"><Mail size={18} /><span><small>Email me</small>thembalihle028@gmail.com</span><ArrowRight size={16} /></a>
            <div className="contact-placeholder"><ExternalLink size={18} /><span><small>GitHub</small>Add your GitHub profile URL</span></div>
            <div className="contact-placeholder"><ExternalLink size={18} /><span><small>LinkedIn</small>Add your LinkedIn profile URL</span></div>
            <div className="contact-phone"><span><small>Phone</small>060 812 9380</span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">TN</span><span>Thembalihle Ngubane<span className="brand-dot">.</span></span></a>
        <p>Designed with intention. Built one step at a time.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}


import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Mail, Menu, X,
  Download, Code2, Database, ChartNoAxesCombined,
  Globe, Send, ExternalLink
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="text-gray-400 transition-colors duration-300 hover:text-[#0A66C2]"
    role="img"
    aria-label="LinkedIn"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const profile = {
  name: "Yuga Bharath",
  email: "yugabharath098@gmail.com",
  github: "https://github.com/Yugabharath0060",
  linkedin: "https://www.linkedin.com/in/yugabharath098",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
};

const skills = [
  { name: "Python", category: "Programming" },
  { name: "SQL", category: "Database" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Power BI", category: "Analytics" },
  { name: "Excel", category: "Analytics" },
  { name: "Pandas", category: "Data Science" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "FastAPI", category: "Backend" },
];

const projects = [
  {
    number: "01",
    title: "Smart Hybrid Fault Node Detection",
    description:
      "A machine learning-based system to identify faulty nodes in wireless sensor networks.",
    tech: ["Python", "Machine Learning", "Random Forest"],
    icon: Database,
    github: "https://github.com/Yugabharath0060/ENHANCED-SMART-HYBRD-FAULT-NODE-DETECTION",
  },
  {
    number: "02",
    title: "Data Analytics Dashboard",
    description:
      "An interactive data analytics project to explore datasets and discover meaningful insights.",
    tech: ["Python", "Pandas", "Power BI"],
    icon: ChartNoAxesCombined,
    github: profile.github,
  },
  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "A responsive personal website to showcase my skills, projects and professional journey.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: Globe,
    github: profile.github,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const appear = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const handleContact = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-xl font-black tracking-tight">
            YB<span className="text-indigo-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-gray-400 transition hover:text-indigo-400"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-indigo-400/50 px-5 py-2 text-sm transition hover:bg-indigo-500 md:block"
          >
            Let's Talk ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 bg-[#080808] p-6 md:hidden">
            {navLinks.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-7xl"
        >
          <motion.div
            variants={appear}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm text-gray-400">
              Open to opportunities & collaborations
            </span>
          </motion.div>

          <motion.p
            variants={appear}
            className="mb-5 text-lg text-indigo-400"
          >
            Hello, I'm {profile.name}
          </motion.p>

          <motion.h1
            variants={appear}
            className="max-w-5xl text-5xl font-black leading-tight tracking-tight sm:text-7xl lg:text-8xl"
          >
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              digital reality.
            </span>
          </motion.h1>

          <motion.p
            variants={appear}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
          >
            I'm an Information Technology graduate passionate about
            Python development, data analytics and building modern
            web experiences that solve real-world problems.
          </motion.p>

          <motion.div
            variants={appear}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-indigo-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-indigo-400"
            >
              Explore Projects <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-indigo-400 hover:text-indigo-400"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={appear}
            className="mt-14 flex gap-5"
          >
            <a href={profile.github} target="_blank" rel="noreferrer"
              aria-label="GitHub">
              <SiGithub className="text-gray-400 transition hover:text-white" size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail className="text-gray-400 transition hover:text-white" />
            </a>
          </motion.div>

          <motion.div
            variants={appear}
            className="mt-20 flex items-center gap-3 text-xs tracking-[0.3em] text-gray-500"
          >
            <span className="h-px w-12 bg-indigo-500" />
            SCROLL TO EXPLORE
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={appear}
          >
            <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-400">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Curious mind.
              <br />
              <span className="text-gray-500">Creative builder.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={appear}
            className="space-y-6 text-lg leading-8 text-gray-400"
          >
            <p>
              I'm a B.E. Information Technology graduate interested
              in developing useful software and exploring the world
              of technology.
            </p>

            <p>
              My interests include Python programming, data analytics,
              frontend development and machine learning.
            </p>

            <p>
              I'm continuously learning, building projects and looking
              for opportunities to collaborate with innovative people.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 px-6 py-3 text-sm text-indigo-300 transition hover:bg-indigo-500 hover:text-white"
            >
              <Download size={17} /> Download Resume
            </a>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/10 bg-[#09090c] px-6 py-32">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm tracking-widest text-indigo-400">
            TECHNICAL SKILLS
          </p>

          <h2 className="mb-16 text-4xl font-bold sm:text-5xl">
            My technology stack<span className="text-indigo-400">.</span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/[0.06]"
              >
                <Code2 className="mb-5 text-indigo-400" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm tracking-widest text-indigo-400">
            SELECTED WORK
          </p>

          <div className="mb-16 flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Featured projects<span className="text-indigo-400">.</span>
            </h2>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400"
            >
              More on GitHub <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-3xl border border-white/10 bg-[#0c0c12] p-7 transition hover:-translate-y-2 hover:border-indigo-400/50"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      / {project.number}
                    </span>
                    <Icon className="text-indigo-400" size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="min-h-20 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="my-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-400 transition group-hover:text-white"
                  >
                    View on GitHub <ArrowUpRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-[#09090c] px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm tracking-widest text-indigo-400">
              GET IN TOUCH
            </p>

            <h2 className="text-5xl font-black leading-tight sm:text-6xl">
              Have an idea?
              <br />
              <span className="text-indigo-400">Let's build it.</span>
            </h2>

            <p className="mt-7 max-w-md leading-8 text-gray-400">
              Whether you have a job opportunity, freelance project,
              collaboration idea or just want to connect, I'd love
              to hear from you.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-3 text-lg hover:text-indigo-400"
            >
              <Mail size={20} /> {profile.email}
            </a>

            <div className="mt-10 flex gap-5">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <SiGithub className="text-gray-400 transition hover:text-white" size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                <Send className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleContact}
            className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-10"
          >
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Your name
              </label>
              <input
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Your email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Your message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell me about your idea..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-indigo-400"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-500 p-4 font-semibold transition hover:bg-indigo-400"
            >
              Send Message <ArrowUpRight size={18} />
            </button>

            <p className="text-xs text-gray-500">
              This first version opens your visitor's email application.
              We'll integrate direct message delivery in a later stage.
            </p>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Yuga Bharath. All rights reserved.</p>
          <a href="#home" className="transition hover:text-indigo-400">
            Back to top ↑
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;

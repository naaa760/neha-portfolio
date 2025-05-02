"use client";

import Link from "next/link";
import Image from "next/image";
import RepositoryLink from "@/components/RepositoryLink";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <nav className="nav-links">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/tech-stack" className="nav-link">
            Tech Stack
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/experience" className="nav-link">
            Experience
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="profile-image-container">
          <div className="profile-glow"></div>
          <Image
            src="/user.png" // Make sure you have this image in your public folder
            alt="Conor Dewey"
            className="profile-image"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Hey, I&apos;m Neha.</h1>
          <p className="hero-subtitle">
            I&apos;m a <strong>Software Developer</strong> and passionate about
            building <strong>impactful solutions</strong>.
          </p>
          <div className="social-links">
            <a href="https://x.com/nehaaaa_6" className="social-link">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
              </svg>
              Twitter
            </a>
            <a
              href="https://drive.google.com/file/d/1LWAhiSbekOjgB_aeJ6F0FgrEDa9I1YGj/view"
              className="social-link"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z" />
                <path d="M8 11.5h8v1H8zm0-3h8v1H8zm0 6h4v1H8z" />
              </svg>
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/neha-prasad-92499821b/"
              className="social-link"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/naaa760" className="social-link">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Github
            </a>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2 className="section-title">ABOUT</h2>
        <div className="about-content">
          <p className="education">
            B.Sc in Computer Science | University of the people, California -
            Distance(online)
          </p>
          <p className="about-text">
            I am a developer with over two years of experience building websites
            and APIs using React, Next.js, and TypeScript. I take Figma designs
            and turn them into working, responsive components. I also manage AWS
            front-end deployments to keep websites running efficiently.
          </p>
          <p className="about-text">
            I focus on creating fast, bug-free, and optimized solutions, and I
            use AI tools to speed up development. Additionally, I have
            experience building LLM apps or Web3. I&apos;m always eager to learn
            new technologies and improve my skills to deliver the best results
            for every project.
          </p>
        </div>
      </section>

      <section className="tech-stack-section" id="tech-stack">
        <h2 className="section-title">TECH STACK</h2>

        <div className="tech-categories">
          <div className="tech-category">
            <h3 className="category-title">Languages</h3>
            <div className="tech-items">
              <span className="tech-item">Python</span>
              <span className="tech-item">C/C++</span>
              <span className="tech-item">Go</span>
              <span className="tech-item">Java</span>
              <span className="tech-item">JavaScript</span>
              <span className="tech-item">TypeScript</span>
              <span className="tech-item">HTML/CSS</span>
            </div>
          </div>

          <div className="tech-category">
            <h3 className="category-title">Frameworks & Libraries</h3>
            <div className="tech-items">
              <span className="tech-item">Next.js</span>
              <span className="tech-item">React Native</span>
              <span className="tech-item">React.js</span>
              <span className="tech-item">Nest.js</span>
              <span className="tech-item">Flask</span>
              <span className="tech-item">Express.js</span>
              <span className="tech-item">Django</span>
              <span className="tech-item">Flutter</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">FastAPI</span>
              <span className="tech-item">OpenCV</span>
              <span className="tech-item">PyTorch</span>
            </div>
          </div>

          <div className="tech-category">
            <h3 className="category-title">Tools, Cloud & Databases</h3>
            <div className="tech-items">
              <span className="tech-item">Azure</span>
              <span className="tech-item">AWS</span>
              <span className="tech-item">GCP</span>
              <span className="tech-item">Git</span>
              <span className="tech-item">SQLite</span>
              <span className="tech-item">Docker</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">Firebase</span>
              <span className="tech-item">TensorFlow</span>
              <span className="tech-item">PyTorch</span>
              <span className="tech-item">scikit-learn</span>
              <span className="tech-item">keras</span>
              <span className="tech-item">Hugging Face</span>
              <span className="tech-item">MLflow</span>
              <span className="tech-item">Redis</span>
              <span className="tech-item">ElasticSearch</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">
          <div className="project-card">
            <a
              href="https://voice-assistant-i3q2.vercel.app/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i1.png"
                  alt="Auravoice"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <div className="featured-label">Featured Project</div>
                <h3 className="project-title">Auravoice</h3>
                <p className="project-description">
                  this project is a voice assistant web app that lets users talk
                  with AI naturally. It features a sleek landing page and a
                  dashboard where users can speak and hear AI responses. It uses
                  Deepgram to convert speech to text, Groq&apos;s LLaMA3 for AI
                  responses, and ElevenLabs for natural-sounding voice replies.
                  I&apos;ve added support for multiple AI models and made
                  everything responsive across all devices
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">Node.js</span>
                  <span className="tech-stack-tag">DEEPGRAM</span>
                  <span className="tech-stack-tag">GROQ</span>
                  <span className="tech-stack-tag">ELEVENLABS</span>
                  <span className="tech-stack-tag">Tailwind CSS</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/voice-assistant">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://mern-video-calling-realtime-chat-app-50ki.onrender.com/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i2.png"
                  alt="E-Commerce Platform"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <div className="featured-label">Featured Project</div>
                <h3 className="project-title">BeamUp</h3>
                <p className="project-description">
                  BeamUp bridges the gap between traditional language learning
                  methods and real-world applications, providing a supportive
                  community where users can gain confidence and fluency through
                  authentic conversations. Whether you&apos;re looking to
                  practice a new language, make international friends, or
                  improve your communication skills, BeamUp creates the perfect
                  environment.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">Node.js</span>
                  <span className="tech-stack-tag">Express</span>
                  <span className="tech-stack-tag">MongoDB</span>
                  <span className="tech-stack-tag">Context API</span>
                  <span className="tech-stack-tag">JWT</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/mern-video-calling-realtime-chat-app-social-app">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://interview-platform-with-a-real-time-ai-voice-agent.vercel.app/landing"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i3.png"
                  alt="EchoHire"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">EchoHire</h3>
                <p className="project-description">
                  This AI mock interview system is designed to boost your
                  interview skills by providing real-time, lifelike sessions
                  with personalized questions and detailed feedback. It features
                  secure, hacker-proof authentication, a variety of interview
                  types, and a customizable interview creation tool. Built with
                  modern technologies like Next.js, Firebase, and innovative AI
                  tools, it offers a comprehensive platform to both enhance your
                  coding skills and excel in interviews.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">Next.js</span>
                  <span className="tech-stack-tag">Firebase</span>
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">VAPI</span>
                  <span className="tech-stack-tag">Zod</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/interview-platform-with-a-real-time-ai-voice-agent">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://dine-dash-8v75.vercel.app/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i4.png"
                  alt="Task Management App"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">DineDash</h3>
                <p className="project-description">
                  The site uses Next.js to create a luxury restaurant experience
                  with video backgrounds, animated sections, and smooth scroll
                  effects. Key logic includes showcasing menus, testimonials,
                  and gallery visuals, with a responsive, interactive
                  reservation form to drive bookings.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">Next.js</span>
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">Framer-motion</span>
                  <span className="tech-stack-tag">Tailwind CSS</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/dine-dash">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://jirnov.vercel.app/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i5.png"
                  alt="Fitness Tracking App"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Jirnov</h3>
                <p className="project-description">
                  JINova is a streamlined project management platform that
                  combines task management, team collaboration, and client
                  communication in one intuitive interface. It simplifies
                  complex workflows while providing powerful features for
                  tracking progress, managing resources, and analyzing project
                  performance. The platform&apos;s flexible design adapts to
                  various team sizes and methodologies, making project
                  management more efficient and less overwhelming.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">MongoDB</span>
                  <span className="tech-stack-tag">Node.js</span>
                  <span className="tech-stack-tag">Express</span>
                  <span className="tech-stack-tag">JWT</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/jirnov">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://mutli-app.vercel.app/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i6.png"
                  alt="NFT Marketplace"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">TalkCast</h3>
                <p className="project-description">
                  TalkCast is a modern podcast platform that connects creators
                  and listeners through a beautiful, unified interface. It
                  solves the problem of content discovery by offering
                  personalized recommendations while giving creators tools to
                  grow their audience. The platform combines stunning design
                  with community features like Fans Like You transforming the
                  podcast experience from fragmented and overwhelming to curated
                  and engaging for everyone involved.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">Next.js</span>
                  <span className="tech-stack-tag">TypeScript</span>
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">Convex</span>
                  <span className="tech-stack-tag">Clerk</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/mutli-app">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://vocavista-nu.vercel.app/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i7.png"
                  alt="Data Visualization Dashboard"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">VocaVista</h3>
                <p className="project-description">
                  This project is a Next.js web app featuring secure user
                  authentication via Clerk and personalized AI using
                  Google&apos;s Gemini. It uses a serverless PostgreSQL database
                  (Neon) for secure, contextual user data storage.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">Next.js</span>
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">Prisma</span>
                  <span className="tech-stack-tag">PostgreSQL</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/vocavista">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>

          <div className="project-card">
            <a
              href="https://snapcart-r2tx.onrender.com/"
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src="/i8.png"
                  alt="AI Content Generator"
                  className="project-image"
                  width={400}
                  height={260}
                />
              </div>
              <div className="project-content">
                <div className="featured-label">Featured Project</div>
                <h3 className="project-title">SnapCart</h3>
                <p className="project-description">
                  SnapCart is a modern e-commerce platform with a
                  React/TypeScript frontend and a Node.js/Express backend, using
                  Zustand for state management, Neon PostgreSQL for data
                  storage, and secure CRUD operations via a RESTful API.
                </p>
                <div className="tech-stack-tags">
                  <span className="tech-stack-tag">React</span>
                  <span className="tech-stack-tag">Postman</span>
                  <span className="tech-stack-tag">Zustand</span>
                  <span className="tech-stack-tag">Neon</span>
                  <span className="tech-stack-tag">Arcjet</span>
                </div>
              </div>
            </a>
            <RepositoryLink href="https://github.com/naaa760/snapcart">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View GitHub Repository
            </RepositoryLink>
          </div>
        </div>
      </section>
    </main>
  );
}

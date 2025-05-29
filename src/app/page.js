"use client";

import Link from "next/link";
import Image from "next/image";
import RepositoryLink from "@/components/RepositoryLink";
import Timer from "@/components/Timer";
import { useEffect, useRef } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import StatusIndicator from "@/components/StatusIndicator";

export default function Home() {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  // Add this effect to handle mouse movement
  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the container
      const y = e.clientY - rect.top; // y position within the container

      // Calculate middle point displacement based on cursor position
      const midX = rect.width / 2;
      const displacement = (y - rect.height / 2) * 1.5; // Amplify movement

      // Update the path with new coordinates that follow the cursor
      path.setAttribute("d", `M0 0 Q ${midX} ${displacement} 793 0`);
    };

    const handleMouseLeave = () => {
      // Return to flat line when mouse leaves
      path.setAttribute("d", "M0 0 H793");
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Define your projects data
  const projects = [
    {
      title: "EDUNO(LMS)",
      description:
        "Eduno is a modern SaaS LMS that removes barriers of cost, location, and scheduling by offering AI-driven voice tutors and real-time sessions through Vapi, combined with secure Supabase authentication and Stripe subscriptions to deliver personalized, accessible learning experiences.",
      image: "/lms.png",
      liveLink: "https://lms-app-navy.vercel.app/",
      repoLink: "https://github.com/naaa760/lms-app",
      techStack: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Sentry",
        "Supabase",
        "VAPI",
        "Shadcn UI",
        "Zod",
      ],
    },

    {
      title: "EVO2(BioTech + AI + DNA)",
      description:
        "Evo2 is a web tool that enables users to search for genes and employs AI to predict whether DNA variants are harmful by comparing them against known clinical data.",
      image: "/evo.png",
      liveLink: "https://evo2-sage.vercel.app/",
      repoLink: "https://github.com/naaa760/evo2",
      techStack: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Modal",
        "Python",
        "FastAPI",
        "Shadcn UI",
        "EVo2",
      ],
    },

    {
      title: "Finderness(Any Buisness Finder)",
      description:
        "LocalFinder is an app that shows nearby businesses based on distance, category, and ratings. With a simple interface, users can easily compare local options to find restaurants, hotels.",

      image: "/map.png",
      liveLink: "https://local-business-finder-app-7db1.vercel.app",
      repoLink: "https://github.com/naaa760/local-business-finder-app",
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Leaflet",
        "JWT",
      ],
    },

    {
      title: "BeamUp(Video calling + Chat App)",
      description:
        "BeamUp connects language learners with native speakers for authentic conversations about shared interests. The app builds fluency through real-world practice in a supportive community.",
      image: "/i2.png",
      liveLink:
        "https://mern-video-calling-realtime-chat-app-50ki.onrender.com/",
      repoLink:
        "https://github.com/naaa760/mern-video-calling-realtime-chat-app-social-app",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Context API",
        "JWT",
      ],
    },

    {
      title: "EchoHire(AI Interview Platform)",
      description:
        "This AI platform offers realistic mock technical interviews with personalized questions and detailed feedback. Built with React and Firebase, it features secure authentication.",
      image: "/i3.png",
      liveLink:
        "https://interview-platform-with-a-real-time-ai-voice-agent.vercel.app/landing",
      repoLink:
        "https://github.com/naaa760/interview-platform-with-a-real-time-ai-voice-agent",
      techStack: ["Next.js", "Firebase", "React", "VAPI", "Zod"],
    },

    {
      title: "Auravoice(AI Voice Assistant)",
      description:
        "This web app creates natural AI conversations through voice. You speak, Deepgram transcribes, LLaMA3 generates responses, and ElevenLabs delivers them in a realistic voice.",
      image: "/i1.png",
      liveLink: "https://voice-assistant-i3q2.vercel.app/",
      repoLink: "https://github.com/naaa760/voice-assistant",
      techStack: [
        "React",
        "Node.js",
        "DEEPGRAM",
        "GROQ",
        "ELEVENLABS",
        "Tailwind CSS",
      ],
    },

    {
      title: "Jirnov(Project Management + Collaboration)",
      description:
        "JINova integrates project management, team collaboration, and client communication in one intuitive platform. With built-in tracking, resource management, and analytics, it streamlines.",
      image: "/i5.png",
      liveLink: "https://jirnov.vercel.app/",
      repoLink: "https://github.com/naaa760/jirnov",
      techStack: ["React", "MongoDB", "Node.js", "Express", "JWT"],
    },
    {
      title: "TalkCast(Podcast + AI)",
      description:
        "TalkCast creates a unified platform for podcast creators and listeners. It personalizes discovery with smart recommendations and helps creators grow through community.",
      image: "/i6.png",
      liveLink: "https://mutli-app.vercel.app/",
      repoLink: "https://github.com/naaa760/mutli-app",
      techStack: ["Next.js", "TypeScript", "React", "Convex", "Clerk"],
    },

    // Add any other projects you have
  ];

  return (
    <>
      <main className="container">
        <Timer />
        <header className="header">
          <nav className="nav-links">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#tech-stack" className="nav-link">
              Stack
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#experience" className="nav-link">
              Experience
            </Link>
            <Link href="#videos" className="nav-link">
              Videos
            </Link>
          </nav>
        </header>

        <section className="hero">
          <div className="profile-image-container">
            <Image
              src="/user.png"
              alt="Neha"
              className="profile-image"
              width={200}
              height={200}
              priority
            />
            <div className="profile-scan"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Hey, I&apos;m Neha Prasad</h1>
            <StatusIndicator />
            <p className="hero-subtitle">
              I build <strong>Full Stack Apps</strong> that matter.
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
                href="https://drive.google.com/file/d/1Pc_4FH4OH7vhfV2U0b5OK0YtgRZUjNlp/view?usp=drivesdk"
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
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </a>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2 className="section-title">ABOUT</h2>
          <div className="about-content">
            <div className="about-education">
              B.Sc in Computer Science | University of the people, California -
              Distance(online) 2021-2025(April)
            </div>
            <div className="about-summary">
              I&apos;m a Software Developer(Frontend) with 2+ years of
              experience building scalable, user-friendly web apps using modern
              tech. I enjoy tackling challenges, use AI tools to speed up
              development, and have worked on LLM-based projects.
            </div>
          </div>
        </section>

        <section className="tech-stack-section" id="tech-stack">
          <h2 className="section-title">TECH STACK</h2>

          <div className="tech-categories">
            <div className="tech-category">
              <h3 className="category-title">Languages</h3>
              <div className="tech-items">
                <span className="tech-item">Python</span>
                <span className="tech-item">TailwindCSS</span>

                <span className="tech-item">JavaScript</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">HTML/CSS</span>
                <span className="tech-item">FastAPI</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Frameworks & Libraries</h3>
              <div className="tech-items">
                <span className="tech-item">Next.js</span>
                <span className="tech-item">React.js</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Nuxt.js</span>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Tools, Cloud & Databases</h3>
              <div className="tech-items">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Vercel</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Firebase</span>
                <span className="tech-item">Restful APIs</span>
                <span className="tech-item">Prisma</span>
                <span className="tech-item">Shadcn UI</span>
                <span className="tech-item">Restful APIs</span>

                <span className="tech-item">LLM</span>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection projects={projects} />

        <section className="experience-section" id="experience">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="experience-title-styled">
                Full Stack developer intern
              </h3>
              <h4 className="experience-company-container">
                <a
                  href="https://www.linkedin.com/company/aievrything/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  Travana
                </a>
                <Image
                  src="/lg.png"
                  alt="Travana logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Building voice-powered travel booking at Travana AI using
                React, Next.js, Node.js, and Python—enabling users to search,
                compare, and book with natural voice commands.
                <br />
                <br />• Collaborating with AI and product teams to integrate
                real-time voice processing, NLU, and smart recommendations into
                a seamless booking experience.
              </p>
              <div className="experience-timeline">02/2025 - 05/2025</div>
            </div>

            <div className="experience-item">
              <h3 className="experience-title-styled">Hackathon Contributor</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://lablab.ai/u/@nehhaa6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  Lablab.ai
                </a>
                <Image
                  src="/lg2.png"
                  alt="Lablab.ai logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Built AI-driven solutions using advanced models, APIs, and
                automation, with a focus on real-world impact and scalable
                architecture.
                <br />
                <br />• Led full-stack development and AI integration in
                hackathons, delivering projects like MindsDB and HealthPulse
                that optimize prompt engineering.
              </p>
              <div className="experience-timeline">09/2024 - present</div>
            </div>

            <div className="experience-item">
              <h3 className="experience-title-styled">Frontend Developer</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://www.linkedin.com/company/girlscriptsoc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  GSSOC
                </a>
                <Image
                  src="/lg3.png"
                  alt="GSSOC logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Led frontend teams in React and Next.js to deliver responsive,
                API-driven interfaces, boosting application performance by 40%
                through strategic code optimization and lazy loading.
                <br />
                <br />• Collaborated with UX/UI designers and mentored junior
                developers via code reviews, ensuring intuitive UX and
                maintaining high-quality standards.
              </p>
              <div className="experience-timeline">05/2023 - 08/2023</div>
            </div>

            <div className="experience-item">
              <h3 className="experience-title-styled">SWE</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://www.linkedin.com/company/headstarterai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  HeadStarter
                </a>
                <Image
                  src="/lg4.png"
                  alt="HeadStarter logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Architected and deployed 5 AI-driven apps with React/Next.js,
                Firebase, Clerk, and Vercel—establishing CI/CD pipelines for
                rapid, reliable releases.
                <br />
                <br />• Led a 3-person team to launch a flashcard-generation
                SaaS using the OpenAI API and built a RAG-based Q&A system with
                OpenAI and Pinecone.
              </p>
              <div className="experience-timeline">06/2024 - 09/2024</div>
            </div>
          </div>
        </section>

        <section className="video-section" id="videos">
          <h2 className="section-title">VIDEOS</h2>

          <div className="video-grid">
            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.loom.com/embed/37a229eb75d7480eb46c06f60cbe12f0"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">
                  Personal AI Learning Platform Overview
                </h3>
                <a
                  href="https://github.com/naaa760/flicclash"
                  className="repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.loom.com/embed/e5f358e7d66e4a929eadf675ab90e04f"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">Project Demo</h3>
                <a
                  href="https://jirnov.vercel.app/"
                  className="repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail">
                <div className="video-iframe-container">
                  <iframe
                    src="https://www.loom.com/embed/c7453e34ae9d47c3840aa187f926a6ed"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">Project Demo</h3>
                <a
                  href="https://github.com/naaa760/vocavista"
                  className="repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="chat-section">
          <div className="chat-container">
            <div className="chat-left">
              <h3>Start here</h3>
              <h2>
                Let&apos;s hop on a quick call and see we&apos;ve got the right
                chemistry.
              </h2>
              <p>Want to bounce ideas?</p>
              <p>
                Let&apos;s jump on a quick call and explore what&apos;s
                possible.
              </p>
              <p>Looking to build something bigger?</p>

              <p>Perfect! Let&apos;s grab a coffee and brainstorm in person.</p>
            </div>
            <div className="chat-right">
              <div className="chat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 11 12.7L2 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="chat-title">Ready to chat?</h2>
              <p className="chat-description">
                Schedule a free strategy call to discuss your project and
                explore how we can work together.
              </p>
              <div className="chat-buttons">
                <a
                  href="https://cal.com/nehaaa06/15min"
                  className="chat-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="chat-button-icon">🕒</span>
                  15 Min Quick Chat
                </a>
                <a
                  href="https://cal.com/nehaaa06/30min"
                  className="chat-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="chat-button-icon">📅</span>
                  30 Min Deep Dive
                </a>
              </div>
              <p className="chat-quote">
                &quot;Turning your vision into digital reality is just one
                conversation away&quot;
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="bottom-line-container" ref={containerRef}>
        <svg
          className="w-full h-16 overflow-visible undefined"
          viewBox="0 0 793 64"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            stroke="rgba(192, 192, 192, 0.5)"
            strokeWidth="1.5"
            fill="none"
            d="M0 0 H793"
          />
        </svg>
      </div>
    </>
  );
}

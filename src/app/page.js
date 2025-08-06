"use client";

import Link from "next/link";
import Image from "next/image";

import Timer from "@/components/Timer";
import { useEffect, useRef } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import StatusIndicator from "@/components/StatusIndicator";
import OpenSourceContributions from "@/components/OpenSourceContributions";

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

      const midX = rect.width / 2;
      const displacement = (y - rect.height / 2) * 1.5; // Amplify movement

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
      title: "CareTalk(Agent)",
      description:
        "CrTk is an AI-driven mental health app with real-time therapy, mood tracking, and crisis support—built for privacy, empathy, and scale.",
      image: "/care.png",
      liveLink: "https://caretalk-agent.vercel.app/",
      repoLink: "https://github.com/naaa760/caretalk-agent",
      techStack: [
        "React",
        "Next.js",
        "TailwindCSS",
        "MongoDB",

        "Node.js",

        "Sentry",
      ],
    },

    {
      title: "Heariffy(Audio Classification)",
      description:
        "Real‑time audio‑classification web app using a PyTorch CNN model served via FastAPI in a React/Tailwind frontend.",
      image: "/aud.png",
      liveLink: "https://heariffy-byu8.vercel.app/",
      repoLink: "https://github.com/naaa760/heariffy",
      techStack: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Python",
        "Pytorch",
        "Shadcn UI",
      ],
    },

    {
      title: "Eonlogic(AI Site Builder)",
      description:
        "AI Site Builder that instantly generates business websites using React, Next.js & Express.",
      image: "/eon.png",
      liveLink: "https://eonlogic-mk8l.vercel.app/",
      repoLink: "https://github.com/naaa760/eonlogic",
      techStack: ["React", "Next.js", "Node.js", "Express", "PostgreSql"],
    },

    {
      title: "EDUNO(LMS)",
      description:
        "AI‑driven tutoring platform with personalized voice tutors, built on React, Next.js & Supabase.",
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
        "Biotech tool for gene lookup and AI‑powered harmful DNA‑variant prediction via FastAPI & React.",
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
        "Evo2",
      ],
    },

    {
      title: "Finderness (Any Business Finder)",
      description:
        "Location‑based Next.js app to discover and filter nearby businesses in real time.",

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
      title: "Jirnov(Project Management + Collaboration)",
      description:
        "AI‑powered content platform built with Next.js & Tailwind for interactive note‑taking and tutorials.",
      image: "/i5.png",
      liveLink: "https://jirnov.vercel.app/",
      repoLink: "https://github.com/naaa760/jirnov",
      techStack: ["React", "MongoDB", "Node.js", "Express", "JWT"],
    },

    {
      title: "BeamUp(Video calling + Chat App)",
      description:
        "MERN‑stack real‑time video conferencing + chat application for seamless peer‑to‑peer calls.",
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
        "This AI platform offers realistic mock technical interviews with personalized questions and detailed feedback.",
      image: "/i3.png",
      liveLink:
        "https://interview-platform-with-a-real-time-ai-voice-agent.vercel.app/landing",
      repoLink:
        "https://github.com/naaa760/interview-platform-with-a-real-time-ai-voice-agent",
      techStack: ["Next.js", "Firebase", "React", "VAPI", "Zod"],
    },

    {
      title: "TalkCast(Podcast + AI)",
      description:
        "Unified podcast platform offering personalized discovery for listeners and community‑driven growth tools for creators.",
      image: "/i6.png",
      liveLink: "https://mutli-app.vercel.app/",
      repoLink: "https://github.com/naaa760/mutli-app",
      techStack: ["Next.js", "TypeScript", "React", "Convex", "Clerk"],
    },
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
            <Link href="#open-source" className="nav-link">
              Open Source
            </Link>
            <Link href="#experience" className="nav-link">
              Experience
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
            <br />
            <p className="hero-subtitle text-sm md:text-base">
              I build scalable <strong>Full Stack Apps</strong> that solve user
              pain points and drive measurable growth.
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
                href="https://drive.google.com/file/d/1imyiM_9vgg_hC9TNYg2NA0YQkUqLdo1Z/view?usp=drivesdk"
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
              <a
                href="https://peerlist.io/nehaaa6"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20,20 h40 a20,20 0 1,1 0,40 h-20 v20 h-20 z M40,40 h20 a10,10 0 1,0 0,-20 h-20 z" />
                </svg>
                Peerlist
              </a>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2 className="section-title">ABOUT</h2>
          <div className="about-content">
            <div className="about-education">
              B.Sc in Computer Science | University of the people, California -
              Distance(online) 2021-2025(June)
            </div>
            <div className="about-summary">
              I&apos;m passionate about deep‑tech and entrepreneurship building
              products that make an impact.
              <br />
              <br />
              tldr; learnt by contributing around on the internet and building
              projects.
            </div>
          </div>
        </section>

        <section className="tech-stack-section" id="tech-stack">
          <h2 className="section-title">TECH STACK</h2>

          <div className="tech-categories">
            <div className="tech-category">
              <h3 className="category-title">Expert (2 + Years)</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <span>Next.js</span>
                </div>
                <div className="tech-item">
                  <span>TypeScript</span>
                </div>
                <div className="tech-item">
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-item">
                  <span>MongoDB</span>
                </div>
                <div className="tech-item">
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <span>Express</span>
                </div>
                <div className="tech-item">
                  <span>Tailwind</span>
                </div>
                <div className="tech-item">
                  <span>Python</span>
                </div>
                <div className="tech-item">
                  <span>System Design</span>
                </div>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Comfortable (6 – 18 Months)</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <span>☁️ AWS</span>
                </div>
                <div className="tech-item">
                  <span>Shadcn UI</span>
                </div>
                <div className="tech-item">
                  <span>LLM</span>
                </div>

                <div className="tech-item">
                  <span>Firebase</span>
                </div>
                <div className="tech-item">
                  <span>Prisma</span>
                </div>
              </div>
            </div>

            <div className="tech-category">
              <h3 className="category-title">Familiar (0 – 6 Months)</h3>
              <div className="tech-items">
                <div className="tech-item">
                  <span>🐳 Docker</span>
                </div>
                <div className="tech-item">
                  <span>FastAPI</span>
                </div>
                <div className="tech-item">
                  <span>PyTorch</span>
                </div>
                <div className="tech-item">
                  <span>Cypress</span>
                </div>
                <div className="tech-item">
                  <span>Restful APIs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection projects={projects} />

        <section className="open-source-section" id="open-source">
          <h2 className="section-title">OPEN SOURCE CONTRIBUTIONS</h2>
          <OpenSourceContributions />
        </section>

        <section className="experience-section" id="experience">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3 className="experience-title-styled">Intern</h3>
              <h4 className="experience-company-container">
                <a
                  href="https://keploy.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-company-link"
                >
                  Keploy
                </a>
                <Image
                  src="/lg1.png"
                  alt="Keploy logo"
                  width={20}
                  height={20}
                  className="company-logo"
                />
              </h4>
              <div className="experience-gap"></div>
              <p className="experience-description">
                • Enhanced open-source automated test generation by improving
                test-case generation, mocking capabilities, and CI/CD
                integration
                <br />• Drove community engagement through bug fixes,
                documentation, developer meetups, and ongoing support.
              </p>
              <div className="experience-timeline">May/2025 - July/2025</div>
            </div>

            <div className="experience-item">
              <h3 className="experience-title-styled">
                Full Stack Developer Intern
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
                • Built a voice-powered travel booking platform at Travana AI
                using React, Next.js, Node.js, and Python enabling users to
                search and book trips using natural voice commands, real-time
                NLU, and smart AI recommendations.
              </p>
              <div className="experience-timeline">Feb/2025 - May/2025</div>
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

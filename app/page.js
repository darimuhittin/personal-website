"use client";

import Image from "next/image";
import SkillCard from "../components/skill-card";
import SkillCardContainer from "../components/skill-card-container";
import WorkCard from "../components/work-card";
import ContactSection from "../components/contact-section-client";
import SocialButtons from "../components/social-buttons";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import HeroBackground3D from "../components/HeroBackground3D";
// Import 3D components with dynamic loading to avoid SSR issues
// const HeroBackground3D = dynamic(
//   () => import("../components/HeroBackground3D.tsx"),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-900 to-indigo-800"></div>
//     ),
//   }
// );

export default function Home() {
  const [supports3D, setSupports3D] = useState(true);
  const [show3D, setShow3D] = useState(true);

  useEffect(() => {
    // Check if the device supports WebGL
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      // Only disable 3D if WebGL is definitely not supported
      if (!gl) {
        setSupports3D(false);
        setShow3D(false);
      }

      // Clean up
      if (gl) {
        const loseContext = gl.getExtension("WEBGL_lose_context");
        if (loseContext) loseContext.loseContext();
      }
    } catch (e) {
      console.error("WebGL detection error:", e);
      // Keep 3D enabled by default even if detection fails
    }
  }, []);

  useEffect(() => {
    // Force hardware acceleration in Chrome
    const style = document.createElement("style");
    style.textContent = `
            canvas {
                transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000px;
            }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleDownloadCV = () => {
    window.open("/files/cv.pdf", "_blank");
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-hidden">
      <Navbar />
      {/* Responsive Social Buttons - Bottom center on mobile, Right side on desktop */}
      <div className="fixed bottom-4 right-1/2 z-30 bg-gray-900/70 rounded-full transform translate-x-1/2 px-4 py-3 lg:py-5 lg:px-2 transition-opacity duration-300 hover:opacity-100">
        <SocialButtons className="text-white" />
      </div>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
          {supports3D && show3D && <HeroBackground3D />}
          <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h5 className="text-xl md:text-2xl font-light mb-2 text-purple-200">
                Hello, I&apos;m
              </h5>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Muhittin Darı
              </h1>
              <h3 className="text-xl md:text-3xl font-medium mb-2">
                Fullstack Developer
              </h3>
              <p className="text-lg text-indigo-200 mb-8">
                Specialized in React, React Native, and Next.js development
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/30"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </button>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-purple-400 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-purple-500/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-300 shadow-2xl shadow-purple-500/20">
                <Image
                  src="/pp.png"
                  alt="Muhittin Darı"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  style={{ objectFit: "cover" }}
                  priority
                  className="transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#111827"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hello, I&apos;m Muhittin, a{" "}
                <span className="font-medium text-purple-400">
                  Fullstack Developer
                </span>{" "}
                with over 5 years of professional experience in{" "}
                <span className="font-medium text-purple-400">web</span> and{" "}
                <span className="font-medium text-purple-400">
                  mobile application
                </span>
                development. I hold a Bachelor&apos;s degree in{" "}
                <span className="font-medium text-purple-400">
                  Computer Science
                </span>{" "}
                from the Faculty of Engineering and Architecture, where I
                graduated as the top student.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My expertise lies in{" "}
                <span className="font-medium text-purple-400">React</span>,{" "}
                <span className="font-medium text-purple-400">
                  React Native
                </span>
                , and{" "}
                <span className="font-medium text-purple-400">Next.js</span>
                development, with a strong foundation in{" "}
                <span className="font-medium text-purple-400">
                  TypeScript
                </span>{" "}
                and{" "}
                <span className="font-medium text-purple-400">JavaScript</span>.
                I have extensive experience building responsive, user-friendly
                interfaces and implementing complex frontend functionalities
                using modern frameworks and libraries.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                On the backend side, I&apos;m proficient with{" "}
                <span className="font-medium text-purple-400">Node.js</span>,{" "}
                <span className="font-medium text-purple-400">Express</span>,
                <span className="font-medium text-purple-400">NestJS</span>, and
                have worked with various databases including{" "}
                <span className="font-medium text-purple-400">MongoDB</span>,{" "}
                <span className="font-medium text-purple-400">MySQL</span>, and{" "}
                <span className="font-medium text-purple-400">PostgreSQL</span>.
                I&apos;m also experienced with{" "}
                <span className="font-medium text-purple-400">
                  RESTful APIs
                </span>
                , <span className="font-medium text-purple-400">GraphQL</span>,
                and <span className="font-medium text-purple-400">AWS</span>{" "}
                services such as{" "}
                <span className="font-medium text-purple-400">S3</span>,{" "}
                <span className="font-medium text-purple-400">EC2</span>,
                <span className="font-medium text-purple-400">Cognito</span>,{" "}
                <span className="font-medium text-purple-400">Lambda</span>, and{" "}
                <span className="font-medium text-purple-400">Amplify</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Throughout my career, I&apos;ve utilized state management
                solutions like{" "}
                <span className="font-medium text-purple-400">Redux</span>,{" "}
                <span className="font-medium text-purple-400">Context API</span>
                , and{" "}
                <span className="font-medium text-purple-400">Zustand</span>,
                and have implemented responsive designs using{" "}
                <span className="font-medium text-purple-400">
                  Tailwind CSS
                </span>
                ,{" "}
                <span className="font-medium text-purple-400">Material UI</span>
                , and{" "}
                <span className="font-medium text-purple-400">Bootstrap</span>.
                I&apos;m passionate about creating clean, maintainable code and
                delivering high-quality applications that provide exceptional
                user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m always eager to take on new challenges and collaborate
                with teams to build innovative solutions that solve real-world
                problems.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Work Experience
              </h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              <WorkCard
                title="HEY Teknoloji"
                icon="/images/heyteknoloji.jpeg"
                address="Remote (4 years)"
              >
                Fullstack Developer working with Next.js, NestJS, TypeScript,
                Tailwind CSS, Git, and AWS. Developed comprehensive web
                applications and implemented complex frontend and backend
                functionalities.
              </WorkCard>
              <WorkCard
                title="Simdatix"
                icon="/images/simdatix.jpeg"
                address="Remote (2 years)"
              >
                Fullstack Developer working with React, Node.js, and MongoDB. Developed
                web applications and implemented RESTful APIs. Contributed to the
                development of various projects, focusing on both frontend and backend
                technologies.
              </WorkCard>

              <WorkCard
                title="Consintegra INC"
                icon="/images/consintegra.jpeg"
                address="Kocaeli, Turkey (5 months)"
              >
                Intern working with Qt Framework for GUI development. Gained
                experience in creating desktop applications and implementing
                user interfaces using C++ and Qt.
              </WorkCard>
              <WorkCard
                title="Bitcraft"
                icon="/images/bitcraft.jpeg"
                address="Konya, Turkey (5 months)"
              >
                Intern gaining practical experience in software development.
                Conducted research and gained knowledge specifically on unmanned
                aerial vehicles (UAVs) and their related technologies.
              </WorkCard>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Skills
              </h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              <SkillCardContainer title="Frontend Development">
                <SkillCard skill="react" percentage={95} />
                <SkillCard skill="nextjs" percentage={95} />
                <SkillCard skill="typescript" percentage={90} />
                <SkillCard skill="javascript" percentage={95} />
                <SkillCard skill="css3" percentage={95} />
                <SkillCard skill="html5" percentage={95} />
                <SkillCard skill="tailwindcss" percentage={95} />
                <SkillCard skill="zustand" percentage={95} />
                <SkillCard skill="redux" percentage={90} />
              </SkillCardContainer>

              <SkillCardContainer title="Mobile Development">
                <SkillCard skill="react-native" percentage={95} />
                <SkillCard skill="expo" percentage={90} />
                <SkillCard skill="redux" percentage={90} />
              </SkillCardContainer>

              <SkillCardContainer title="Backend Development">
                <SkillCard skill="node" percentage={95} />
                <SkillCard skill="express" percentage={90} />
                <SkillCard skill="nestjs" percentage={90} />
                <SkillCard skill="mongodb" percentage={90} />
                <SkillCard skill="mysql" percentage={90} />
                <SkillCard skill="postgresql" percentage={90} />
              </SkillCardContainer>

              <SkillCardContainer title="Tools & Others">
                <SkillCard skill="git" percentage={95} />
                <SkillCard skill="docker" percentage={95} />
                <SkillCard skill="aws" percentage={80} />
                <SkillCard skill="graphql" percentage={95} />
                <SkillCard skill="jest" percentage={75} />
                <SkillCard skill="kubernetes" percentage={30} />
              </SkillCardContainer>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="İKİS (Government Intelligence System)"
                description="A coordination and communication system for state intelligence services, customs protection, and narcotics units. Developed with React and NestJS."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
                tags={[
                  "React",
                  "NestJS",
                  "Government System",
                  "Secure Communication",
                ]}
                gradientFrom="from-purple-700"
                gradientTo="to-indigo-700"
              />
              <ProjectCard
                title="QFix (AI Solution)"
                description="Advanced AI-powered application with excellent UI and backend."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                }
                tags={[
                  "AI",
                  "n8n",
                  "Backend Development",
                  "Frontend Development",
                ]}
                gradientFrom="from-indigo-700"
                gradientTo="to-blue-700"
              />
              <ProjectCard
                title="Pazareo (Second-hand Market)"
                description="Mobile marketplace for Azerbaijan with advanced features."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
                tags={[
                  "React Native",
                  "Backend Development",
                  "E-commerce",
                  "Mobile App",
                ]}
                gradientFrom="from-blue-700"
                gradientTo="to-cyan-700"
              />
              <ProjectCard
                title="Vida (Maintenance Management)"
                description="Comprehensive solution for maintenance operations management, available on both Google Play and App Store."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                tags={[
                  "React Native",
                  "Maintenance",
                  "Operations",
                  "Mobile App",
                ]}
                gradientFrom="from-cyan-700"
                gradientTo="to-teal-700"
              />
              <ProjectCard
                title="Cotcast AI (Cotton Market)"
                description="AI-powered platform for tracking and analyzing the global cotton market, helping businesses make informed decisions."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                }
                tags={[
                  "AI",
                  "Market Analysis",
                  "Data Visualization",
                  "Mobile App",
                ]}
                gradientFrom="from-teal-700"
                gradientTo="to-green-700"
              />
              <ProjectCard
                title="Tekspiyasa (Textile Platform)"
                description="Large-scale textile industry platform developed with NextJS (frontend) and NestJS (backend)."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                }
                tags={["NextJS", "NestJS", "Textile Industry", "Fullstack"]}
                gradientFrom="from-green-700"
                gradientTo="to-lime-700"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Feel free to reach out if you&apos;re looking for a developer,
                have a question, or just want to connect.
              </p>
            </div>
            <ContactSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Muhittin Darı
                </h2>
                <p className="text-gray-400 mt-2">Fullstack Developer</p>
              </div>
              <div className="flex space-x-4">
                <SocialButtons className="text-gray-400" />
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Muhittin Darı</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

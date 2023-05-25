import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import SkillCard from "../components/skill-card";
import SkillCardContainer from "../components/skill-card-container";
import WorkCard from "../components/work-card";
import ContactSection from "../components/contact-section";
import SocialButtons from "../components/social-buttons";
import Link from "next/link";
export default function Home() {
  const handleDownloadCV = () => {
    fetch("/api/cv", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      res.blob().then((blob) => {
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "muhittin-dari-cv.pdf";
        a.click();
      });
    });
  };
  return (
    <div className="bg-first text-fourth">
      <Head>
        <title>
          Muhittin Darı - Experienced React Developer for High-Quality Web
          Applications
        </title>
        <meta
          name="description"
          content="Welcome to the website of Muhittin Darı, an experienced React developer specializing in building high-quality web applications. With expertise in the latest React frameworks and tools, Muhittin can help bring your ideas to life and create engaging user experiences. Explore his portfolio and services to learn how he can help take your web development projects to the next level."
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
      <main className="">
        <section
          className={` relative h-screen justify-center ${styles.container} text-first `}
        >
          <SocialButtons />
          <div className="flex flex-col text-center space-y-4 bg-first bg-opacity-0 rounded-md md:p-10 md:bg-opacity-20">
            <div
              className={`${styles["bird-container"]} ${styles["bird-container--one"]}`}
            >
              <div className={`${styles.bird} ${styles["bird--one"]}`}></div>
            </div>
            <div
              className={`${styles["bird-container"]} ${styles["bird-container--two"]}`}
            >
              <div className={`${styles.bird} ${styles["bird--two"]}`}></div>
            </div>
            <div
              className={`${styles["bird-container"]} ${styles["bird-container--three"]}`}
            >
              <div className={`${styles.bird} ${styles["bird--three"]}`}></div>
            </div>
            <div
              className={`${styles["bird-container"]} ${styles["bird-container--four"]}`}
            >
              <div className={`${styles.bird} ${styles["bird--four"]}`}></div>
            </div>
            <h5 className="text-4xl">{"Hello! I'm"}</h5>
            <h1 className="text-6xl font-bold">Muhittin Darı</h1>
            <div>
              <Image
                className="mx-auto rounded-full"
                src="/pp.png"
                alt="Muhittin Darı"
                width={200}
                height={200}
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl">{"I'm a computer engineer"}</h3>
            <h3 className="text-2xl font-bold">{"from Turkey"}</h3>
            <div className="flex mx-auto my-4 space-x-2">
              <button
                className="bg-third  border-2 px-4 py-2 text-lg text-secondary rounded-md hover:bg-fourth text-first border-secondary"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>

              <button className="bg-secondary border-2 px-4 py-2 text-lg text-fourth rounded-md hover:bg-fourth hover:text-first">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>
        </section>
        <section className="sm:px-10 md:px-20 lg:px-40 bgAngelica">
          <section className="flex flex-col text-center my-10">
            <section className="flex flex-col text-center py-10 px-2">
              <h5 className={styles.sectionTitle}>About Me</h5>
              <p>
                I am a highly skilled React developer with 2 years of
                professional experience. I completed my university education as
                a top student in my faculty. I am proficient in Next.js and
                TypeScript and have a deep understanding of Redux, custom hooks,
                hooks, Sass, Axios, the Fetch API, and React design patterns. I
                am currently improving my knowledge about React-Native and
                Flutter and I&apos;m always eager to learn new technologies and
                techniques.
                <br />
                <br />I am comfortable working in Agile SCRUM environments and
                am a strong collaborator in team settings. I am well-versed in
                best practices and am always seeking out new opportunities to
                improve my skills and grow as a developer.
                <br />
                <br />
                If you are looking for a dedicated and motivated React (in few
                months this will include RN and Flutter too) developer, please
                don&apos;t hesitate to reach out to me. I would be excited to
                discuss any potential opportunities.
              </p>
            </section>
            <h5 className={styles.sectionTitle}>Work History</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <WorkCard
                title="Tekspiyasa"
                icon="/images/tekspiyasa.png"
                address="Istanbul"
              >
                I am working as a fullstack developer for our new project, which
                will serve the textile industry. I am using NestJS on the
                backend side and NextJS, TailwindCSS and Material UI on the
                frontend side.
              </WorkCard>
              <WorkCard
                title="Simdatix"
                icon="/images/simdatix.jpeg"
                address="Ankara"
              >
                We undertook the CMS and web site of RoadJet with React, NextJS
                and numerous libraries. We supported our work with Atlassian
                tools (JIRA, Confluence, Bitbucket). We preferred Agile Scrum
                for our working methodology. Whatever there is in the original
                documentation about React, I have become familiar with every
                subject here and I can use it easily.
              </WorkCard>
              <WorkCard
                title="Bilinova"
                icon="/images/bilinova.png"
                address="Yozgat Teknopark / Turkey"
              >
                worked with React,NextJS and React Native on both the web and
                mobile side of the project.
              </WorkCard>
              <WorkCard
                title="Vizyon Design"
                icon="/images/vizyon.png"
                address="Yozgat Teknopark / Turkey"
              >
                PHP & Laravel - web application with 3D payment system with
                credit card.
              </WorkCard>
              <WorkCard
                title="Jazari Dynamics"
                icon="/images/jazari.png"
                address="Tubitak Marmara Research Center / Turkey"
              >
                Using Qt Framework, I created an automation of a robot that will
                serve under the roof of urban infrastructure imaging systems.
                Communication with the robot was established via serial port,
                video recordings and images were taken, manhole definitions and
                related project files were created, panoramic images were
                created from two 180+ degree camera images obtained as a result
                of the analysis, and a report could be created for the faulty
                parts of the channel by navigating the image after panoramic
                image creation.
              </WorkCard>
              <WorkCard
                title="Bitcraft"
                icon="/images/bclogo.png"
                address="Konya Teknokent / Turkey"
              >
                I have conducted short-term research on drones.
              </WorkCard>
            </div>
          </section>
          <section className="flex flex-col text-center my-10">
            <h5 className={styles.sectionTitle}>My Skills</h5>

            <div className="grid grid-cols-1  xl:grid-cols-2">
              <SkillCardContainer title="Programming Languages">
                <SkillCard skill="javascript" percentage={90} />
                <SkillCard skill="typescript" percentage={90} />
                <SkillCard skill="python" percentage={50} />
                {/* <SkillCard skill="c" percentage={40} /> */}
                {/* <SkillCard skill="c++" percentage={40} /> */}
                {/* <SkillCard skill="c#" percentage={40} /> */}
                {/* <SkillCard skill="php" percentage={40} /> */}
              </SkillCardContainer>

              <SkillCardContainer title="Frontend Development">
                <SkillCard skill="tailwind" percentage={95} />
                <SkillCard skill="react" percentage={90} />
                <SkillCard skill="css3" percentage={80} />
                <SkillCard skill="html" percentage={80} />
                <SkillCard skill="redux" percentage={90} />
                {/* <SkillCard skill="qt" percentage={30} /> */}
                <SkillCard skill="bootstrap" percentage={85} />
                <SkillCard skill="babel" percentage={60} />
                <SkillCard skill="webpack" percentage={60} />
              </SkillCardContainer>

              <SkillCardContainer title="Backend Development">
                <SkillCard skill="node" percentage={70} />
                <SkillCard skill="express" percentage={60} />
                <SkillCard skill="nginx" percentage={30} />
              </SkillCardContainer>
              <SkillCardContainer title="Mobile App Development">
                <SkillCard skill="react-native" percentage={50} />
              </SkillCardContainer>

              {/* <SkillCardContainer title="AI / Machine Learning">
                <SkillCard skill="tensorflow" percentage={40} />
                <SkillCard skill="pytorch" percentage={30} />
                <SkillCard skill="pandas" percentage={30} />
                <SkillCard skill="opencv" percentage={30} />
                <SkillCard skill="scikit-learn" percentage={30} />
              </SkillCardContainer> */}

              <SkillCardContainer title="Database">
                <SkillCard skill="sqlite" percentage={70} />
                <SkillCard skill="mongodb" percentage={60} />
                <SkillCard skill="mssql" percentage={50} />
                <SkillCard skill="mysql" percentage={40} />
                <SkillCard skill="postgresql" percentage={30} />
              </SkillCardContainer>

              <SkillCardContainer title="Software">
                <SkillCard skill="postman" percentage={90} />
                <SkillCard skill="figma" percentage={90} />
                {/* <SkillCard skill="matlab" percentage={40} /> */}
              </SkillCardContainer>

              <SkillCardContainer title="Static Site Generators">
                <SkillCard skill="nextjs" percentage={90} />
              </SkillCardContainer>
              {/* 
              <SkillCardContainer title="Game Engines">
                <SkillCard skill="unity" percentage={30} />
              </SkillCardContainer> */}

              <SkillCardContainer title="Other">
                <SkillCard skill="git" percentage={80} />
                <SkillCard skill="debian" percentage={70} />
                <SkillCard skill="linux" percentage={60} />
              </SkillCardContainer>
            </div>
          </section>

          <ContactSection />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="w-full bg-second flex justify-center py-4">
          <p className="text-sm">© {new Date().getFullYear()} Muhittin Darı</p>
        </div>
      </footer>
    </div>
  );
}

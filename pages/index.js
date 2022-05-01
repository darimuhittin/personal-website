import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import SkillCard from "../components/skill-card";
import SkillCardContainer from "../components/skill-card-container";


export default function Home() {
  return (
    <div className="bg-first text-fourth">
  
      <Head>
        <title>Muhittin Darı</title>
        <meta name="description" content="Muhittin Darı personal website." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
      
      <main className="">
      
          <section className={`  h-screen justify-center ${styles.container} text-first`}>
          <div className="flex flex-col text-center space-y-4 bg-first bg-opacity-0 rounded-md md:p-20 md:bg-opacity-20">
          <div className={`${styles['bird-container']} ${styles['bird-container--one']}`}>
            <div className={`${styles.bird} ${styles['bird--one']}`}></div>
          </div>
          <div className={`${styles['bird-container']} ${styles['bird-container--two']}`}>
            <div className={`${styles.bird} ${styles['bird--two']}`}></div>
          </div><div className={`${styles['bird-container']} ${styles['bird-container--three']}`}>
            <div className={`${styles.bird} ${styles['bird--three']}`}></div>
          </div><div className={`${styles['bird-container']} ${styles['bird-container--four']}`}>
            <div className={`${styles.bird} ${styles['bird--four']}`}></div>
          </div>
          <h5 className="text-4xl">{"Hello! I'm"}</h5>
          <h1 className="text-6xl font-bold">Muhittin Darı</h1>
          <div>
            <Image
              className="mx-auto rounded-full"
              src="/pp.jpg"
              alt="Muhittin Darı"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-2xl">{"I'm a software engineer"}</h3>
          <h3 className="text-2xl font-bold">{"from Turkey"}</h3>
          <div className="flex mx-auto my-4 space-x-2">
            <button className="bg-third  border-2 px-4 py-2 text-xl text-secondary rounded-md hover:bg-fourth text-first border-secondary">
              Download CV
            </button>
            <button className="bg-secondary border-2 px-4 py-2 text-xl text-fourth rounded-md hover:bg-fourth hover:text-first">
              Contact Me
            </button>
          </div>
          </div>
          
        </section>

        <section className="flex flex-col text-center my-10">
          <h5 className={styles.sectionTitle}>Work History</h5>

        </section>
        <section className="flex flex-col text-center my-10">
          <h5 className={styles.sectionTitle}>My Skills</h5>

          <div className="grid grid-cols-1 mx-auto  xl:grid-cols-2">
            <SkillCardContainer title="Programming Languages">
              <SkillCard skill="javascript" percentage={80}/>
              <SkillCard skill="typescript" percentage={80}/>
              <SkillCard skill="python" percentage={50}/>
              <SkillCard skill="c" percentage={40} />
              <SkillCard skill="c++" percentage={40}/>
              <SkillCard skill="c#" percentage={40} />
              <SkillCard skill="php" percentage={40}/>
            </SkillCardContainer>

            <SkillCardContainer title="Frontend Development">
              <SkillCard skill="tailwind" percentage={95}/>
              <SkillCard skill="react" percentage={70}/>
              <SkillCard skill="css3" percentage={70}/>
              <SkillCard skill="html" percentage={70}/>
              <SkillCard skill="redux" percentage={60}/>
              <SkillCard skill="qt" percentage={40}/>
              <SkillCard skill="bootstrap" percentage={30}/>
              <SkillCard skill="babel" percentage={10}/>
              <SkillCard skill="webpack" percentage={10}/>
            </SkillCardContainer>

            <SkillCardContainer title="Backend Development">
              <SkillCard skill="node" percentage={60}/>
              <SkillCard skill="express" percentage={50}/>
              <SkillCard skill="nginx" percentage={30}/>
            </SkillCardContainer>
            <SkillCardContainer title="Mobile App Development">
              <SkillCard skill="react-native" percentage={50}/>
            </SkillCardContainer>

            <SkillCardContainer title="AI / Machine Learning">
              <SkillCard skill="tensorflow" percentage={40}/>
              <SkillCard skill="pytorch" percentage={30}/>
              <SkillCard skill="pandas" percentage={30}/>
              <SkillCard skill="opencv" percentage={30}/>
              <SkillCard skill="scikit-learn" percentage={30}/>
            </SkillCardContainer>

            <SkillCardContainer title="Database">
              <SkillCard skill="sqlite" percentage={70}/>
              <SkillCard skill="mongodb" percentage={60}/>
              <SkillCard skill="mssql" percentage={50}/>
              <SkillCard skill="mysql" percentage={40}/>
              <SkillCard skill="postgresql" percentage={30}/>
            </SkillCardContainer>

            
            <SkillCardContainer title="Software">
              <SkillCard skill="postman" percentage={60}/>
              <SkillCard skill="figma" percentage={40}/>
              <SkillCard skill="matlab" percentage={40}/>
            </SkillCardContainer>

            
            <SkillCardContainer title="Static Site Generators">
              <SkillCard skill="nextjs" percentage={70}/>
            </SkillCardContainer>


            <SkillCardContainer title="Game Engines">
              <SkillCard skill="unity" percentage={30}/>
            </SkillCardContainer>

            
            <SkillCardContainer title="Other">
              <SkillCard skill="git" percentage={80}/>
              <SkillCard skill="debian" percentage={70}/>
              <SkillCard skill="linux" percentage={60}/>
            </SkillCardContainer>
          </div>
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

import React, { useEffect } from "react";
import Head from "next/head";
const App = () => {
  useEffect(() => {
    window.location.href = "kultur://";
  }, []);
  return (
    <div>
      <Head>
        <title>
          Muhittin Darı - Experienced React & React Native Developer for
          High-Quality Web and Mobile Applications
        </title>
        <meta
          name="description"
          content="Welcome to the website of Muhittin Darı, an experienced React developer specializing in building high-quality web applications. With expertise in the latest React frameworks and tools, Muhittin can help bring your ideas to life and create engaging user experiences. Explore his portfolio and services to learn how he can help take your web development projects to the next level."
        />
        <meta
          name="apple-itunes-app"
          content="app-id=1628356243, app-argument=kultur://"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>
    </div>
  );
};

export default App;

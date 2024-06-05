import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();
  useEffect(() => {
    function openApp(urlScheme, fallbackUrl) {
      var startTime = Date.now();
      var timeout = 1500;
      var checkInterval = 100;
      var elapsedTime = 0;

      function checkElapsedTime() {
        elapsedTime = Date.now() - startTime;
        if (elapsedTime < timeout) {
          setTimeout(checkElapsedTime, checkInterval);
        } else {
          router.push(fallbackUrl);
        }
      }

      router.push(urlScheme);
      checkElapsedTime();
    }

    // Kullanıcının işletim sistemini tespit etme
    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // iOS tespiti
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }
      // Android tespiti
      else if (/android/i.test(userAgent)) {
        return "Android";
      }
      // Diğer
      else {
        return "unknown";
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      // Uygulama mağazası linkleri
      var iosAppStoreLink =
        "https://apps.apple.com/al/app/dijital-kültür-envanteri/id1628356243";
      var androidPlayStoreLink = "https://facebook.com/";

      var urlScheme = "kultur://";

      var os = getMobileOperatingSystem();
      if (os === "iOS") {
        openApp(urlScheme, iosAppStoreLink); // App Store'a yönlendir
      } else if (os === "Android") {
        openApp(urlScheme, androidPlayStoreLink); // Play Store'a yönlendir
      } else {
        console.log("Desteklenmeyen işletim sistemi");
      }
      // Web ise id ile varlığa gidebilir.
    });
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

import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Muhittin Darı - Fullstack Developer | React & React Native Expert",
  description:
    "Professional portfolio of Muhittin Darı, showcasing expertise in building AI-powered solutions, e-commerce platforms, and enterprise applications using React, React Native, and modern web technologies.",
  keywords:
    "React, React Native, Next.js, NestJS, AI Development, Mobile Development, Web Development, JavaScript, TypeScript, Fullstack Development, E-commerce, Enterprise Applications",
  author: "Muhittin Darı",
  openGraph: {
    title: "Muhittin Darı - Fullstack Developer | React & React Native Expert",
    description:
      "Professional portfolio showcasing AI solutions, e-commerce platforms, and enterprise applications built with React, React Native, and modern web technologies.",
    url: "https://www.darimuhittin.com",
    siteName: "Muhittin Darı Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.darimuhittin.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhittin Darı Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-gray-900">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="apple-itunes-app"
          content="app-id=1628356243, app-argument=kultur://"
        />
        <meta name="theme-color" content="#1F2937" />
      </head>
      <body
        className={`${poppins.className} bg-gray-900 text-gray-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

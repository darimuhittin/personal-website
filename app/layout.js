import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
})

export const metadata = {
    title: 'Muhittin Darı - Experienced React & React Native Developer',
    description: 'Welcome to the website of Muhittin Darı, an experienced React developer specializing in building high-quality web applications.',
    keywords: 'React, React Native, Developer, Frontend, Mobile Development, Web Development, JavaScript, TypeScript',
    author: 'Muhittin Darı',
    openGraph: {
        title: 'Muhittin Darı - Experienced React & React Native Developer',
        description: 'Welcome to the website of Muhittin Darı, an experienced React developer specializing in building high-quality web applications.',
        url: 'https://muhittindari.com',
        siteName: 'Muhittin Darı Portfolio',
        locale: 'en_US',
        type: 'website',
    },
}

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
            <body className={`${poppins.className} bg-gray-900 text-gray-100 min-h-screen`}>{children}</body>
        </html>
    )
} 
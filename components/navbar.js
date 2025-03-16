'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900 shadow-md py-2 shadow-purple-500/10'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <span className={`text-xl font-bold ${isScrolled ? 'text-purple-500' : 'text-white'}`}>
                            MD
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#about"
                            className={`font-medium transition-colors ${isScrolled ? 'text-gray-300 hover:text-purple-400' : 'text-white hover:text-purple-200'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="#experience"
                            className={`font-medium transition-colors ${isScrolled ? 'text-gray-300 hover:text-purple-400' : 'text-white hover:text-purple-200'
                                }`}
                        >
                            Experience
                        </Link>
                        <Link
                            href="#skills"
                            className={`font-medium transition-colors ${isScrolled ? 'text-gray-300 hover:text-purple-400' : 'text-white hover:text-purple-200'
                                }`}
                        >
                            Skills
                        </Link>
                        <Link
                            href="#projects"
                            className={`font-medium transition-colors ${isScrolled ? 'text-gray-300 hover:text-purple-400' : 'text-white hover:text-purple-200'
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${isScrolled
                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                : 'bg-white text-purple-600 hover:bg-purple-50'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 ${isScrolled ? 'text-gray-300' : 'text-white'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                        <div className="flex flex-col space-y-4 px-4">
                            <Link
                                href="#about"
                                className="font-medium text-gray-200 hover:text-purple-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#experience"
                                className="font-medium text-gray-200 hover:text-purple-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Experience
                            </Link>
                            <Link
                                href="#skills"
                                className="font-medium text-gray-200 hover:text-purple-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Skills
                            </Link>
                            <Link
                                href="#projects"
                                className="font-medium text-gray-200 hover:text-purple-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="#contact"
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 inline-block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
} 
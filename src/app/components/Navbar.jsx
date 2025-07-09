'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#project"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarVariants = {
        top: {
            backgroundColor: "rgba(18, 18, 18, 0.8)",
            backdropFilter: "blur(8px)",
            borderColor: "rgba(51, 53, 63, 0.3)",
        },
        scrolled: {
            backgroundColor: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(139, 69, 19, 0.3)",
        }
    };

    const logoVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        hover: {
            scale: 1.05,
            background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: { duration: 0.3 }
        }
    };

    const menuButtonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.95 }
    };

    return (
        <motion.nav
            className='fixed mx-auto border top-0 left-0 right-0 z-50 transition-all duration-300'
            initial="top"
            animate={scrolled ? "scrolled" : "top"}
            variants={navbarVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                {/* Logo with animation */}
                <motion.div
                    variants={logoVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ duration: 0.5 }}
                >
                    <Link href={"/"} className='text-lg md:text-5xl text-white font-semibold'>
                        <motion.span
                            className="inline-block"
                            whileHover={{
                                background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            PORTFOLIO
                        </motion.span>
                    </Link>
                </motion.div>


                <motion.div
                    className='mobile-menu block md:hidden'
                    variants={menuButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <AnimatePresence mode="wait">
                        {!navbarOpen ? (
                            <motion.button
                                key="hamburger"
                                onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-3 py-2 border rounded-lg border-slate-200/30 text-slate-200 hover:text-white hover:border-purple-500/50 bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300'
                                initial={{ rotate: 0, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 180, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Bars3Icon className='h-6 w-6' />
                            </motion.button>
                        ) : (
                            <motion.button
                                key="close"
                                onClick={() => setNavbarOpen(false)}
                                className='flex items-center px-3 py-2 border rounded-lg border-slate-200/30 text-slate-200 hover:text-white hover:border-red-500/50 bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10 transition-all duration-300'
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 180, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <XMarkIcon className='h-6 w-6' />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Desktop menu */}
                <motion.div
                    className='menu hidden md:block md:w-auto'
                    id="navbar"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1
                                }}
                                whileHover={{ y: -2 }}
                            >
                                <NavLink href={link.path} title={link.title} />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Mobile menu overlay with animation */}
            <AnimatePresence>
                {navbarOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <MenuOverlay links={navLinks} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
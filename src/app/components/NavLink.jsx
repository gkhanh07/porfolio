
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavLink = ({ href, title }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                href={href}
                className='relative block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white group transition-colors duration-300'
            >
                <motion.span
                    className="relative z-10"
                    whileHover={{
                        background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.span>

                {/* Animated underline */}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </Link>
        </motion.div>
    )
}

export default NavLink
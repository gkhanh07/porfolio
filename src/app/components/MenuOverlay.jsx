'use client'
import React from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 }
    }
};

const MenuOverlay = ({ links }) => {
    return (
        <motion.div
            className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-t border-gray-700/50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.ul className='flex flex-col py-4 items-center space-y-4'>
                {links.map((link, index) => (
                    <motion.li
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="w-full flex justify-center"
                    >
                        <div className="w-full max-w-xs">
                            <NavLink href={link.path} title={link.title} />
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

export default MenuOverlay
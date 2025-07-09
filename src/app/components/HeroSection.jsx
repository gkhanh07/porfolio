'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <section className='py-8 ml-15 lg:py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-24'>
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='col-span-1 lg:col-span-7 place-self-center text-center lg:text-left order-2 lg:order-1'
                    >
                        <h1 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {""}</span>
                            <br />
                            {isClient ? (
                                <TypeAnimation
                                    sequence={[
                                        'Khanh',
                                        2000,
                                        'Web developer',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            ) : (
                                <span>Khanh</span>
                            )}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='text-[#ADB7BE] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0'
                        >
                            {/* Add your description here */}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
                        >
                            <button className='px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white transition-all duration-300 cursor-pointer'>
                                <a href="/HuynhGiaKhanh-FE-CV.pdf" download className='block'>
                                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3 sm:px-8 sm:py-3 transition-all duration-300 text-sm sm:text-base font-medium'>
                                        Download CV
                                    </span>
                                </a>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='col-span-1 lg:col-span-5 place-self-center order-1 lg:order-2 w-full flex justify-center'
                    >
                        <div className='rounded-full bg-[#181818] w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] relative overflow-hidden'>
                            <Image
                                src=''
                                alt='Profile image'
                                className='absolute inset-0 w-full h-full rounded-full object-cover'
                                width={300}
                                height={300}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
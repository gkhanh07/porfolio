'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-20 lg:gap-32'>
                {/* Image on the left */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-12 lg:col-span-5 place-self-center mt-4 lg:mt-0 order-2 lg:order-1'
                >
                    <div className='rounded-full bg-[#181818] mr-8 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src=''
                            alt='image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='col-span-12 lg:col-span-7  place-self-center text-center sm:text-left justify-self-start order-1 lg:order-2'
                >
                    <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {""}</span>
                        <br />
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
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='text-[#ADB7BE] text-lg sm:text-xl mb-8 lg:text-2xl'
                    >

                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white cursor-pointer'>
                            Hire Me
                        </button> */}
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 cursor-pointer'>
                            <a href="/HuynhGiaKhanh-FE-CV.pdf"
                                download>
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                            </a>
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection
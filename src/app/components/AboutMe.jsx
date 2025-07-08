'use client'

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="text-white space-y-6">
                {/* Frontend */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'Tailwind CSS'].map((skill, index) => (
                            <span
                                key={skill}
                                className="bg-[#1f1f1f] px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Backend</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Node.js', 'ExpressJS', 'MongoDB', 'Firebase'].map((skill, index) => (
                            <span
                                key={skill}
                                className="bg-[#1f1f1f] px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-green-500/20 hover:to-blue-500/20 hover:border hover:border-green-500/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Git', 'Postman'].map((skill, index) => (
                            <span
                                key={skill}
                                className="bg-[#1f1f1f] px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:border hover:border-orange-500/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up cursor-pointer"
                                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div className="text-white space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 animate-fade-in-up transform hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 animate-bounce-slow">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 animate-fade-in-right" style={{ animationDelay: '0.1s' }}>FPT University</h3>
                            <p className="text-purple-300 font-medium mb-2 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>Bachelor's Degree in Software Engineering</p>
                            <div className="flex items-center text-gray-400 text-sm mb-3 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                2021 - 2025
                            </div>
                            <div className="flex items-center text-gray-400 text-sm mb-4 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Ho Chi Minh City, Vietnam
                            </div>
                            <div className="space-y-2">
                                {[
                                    "• Focused on modern web development technologies",
                                    "• Specialized in Frontend Development and User Experience",
                                    "• Completed capstone project using React and Node.js"
                                ].map((item, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-300 text-sm animate-fade-in-right hover:text-white transition-colors duration-300"
                                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div className="text-white space-y-4">
                {/* Certification cards với loading animation */}
                {[
                    { href: "https://coursera.org/share/43f1cee3596ee52f297a482875aad934", title: "Web Design for Everybody: Basics of Web Development & Coding", gradient: "from-blue-400 to-purple-600", borderColor: "blue-500", hoverColor: "blue-300" },
                    { href: "https://coursera.org/share/07a288932b4f40e099e01e7c6d6d020c", title: "User Experience Research and Design", gradient: "from-purple-400 to-pink-600", borderColor: "purple-500", hoverColor: "purple-300" },
                    { href: "https://coursera.org/share/e39c20aec2d206ad914e7f3838292648", title: "Software Development Lifecycle", gradient: "from-green-400 to-blue-600", borderColor: "green-500", hoverColor: "green-300" },
                    { href: "https://www.coursera.org/account/accomplishments/specialization/G6X87XAUWUC7", title: "Project Management Principles and Practices", gradient: "from-orange-400 to-red-600", borderColor: "orange-500", hoverColor: "orange-300" },
                    { href: "https://www.coursera.org/account/accomplishments/professional-cert/2KNWNMQ9CXRJ", title: "CertNexus Certified Ethical Emerging Technologist", gradient: "from-teal-400 to-cyan-600", borderColor: "teal-500", hoverColor: "teal-300" },
                    { href: "https://www.coursera.org/account/accomplishments/specialization/5D283PDJAG38", title: "Academic English: Writing", gradient: "from-indigo-400 to-purple-600", borderColor: "indigo-500", hoverColor: "indigo-300" }
                ].map((cert, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-r from-${cert.borderColor}/10 to-purple-500/10 p-4 rounded-lg border border-${cert.borderColor}/20 hover:border-${cert.borderColor}/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-${cert.borderColor}/20 animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <Link href={cert.href} target="_blank" className="flex items-start space-x-3 group">
                            <div className="flex-shrink-0 mt-1">
                                <div className={`w-8 h-8 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className={`font-semibold text-white group-hover:text-${cert.hoverColor} transition-colors duration-200`}>{cert.title}</h4>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">Coursera</p>
                            </div>
                            <svg className={`w-5 h-5 text-gray-400 group-hover:text-${cert.hoverColor} transition-all duration-200 transform group-hover:translate-x-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        )
    },
]

const AboutMe = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id="about" className='text-white relative overflow-hidden'>
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5 animate-pulse-slow"></div>

            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative z-10'>
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>
                    <Image
                        src='/images/IT-tech.jpg'
                        alt='About me image'
                        width={400}
                        height={400}
                        className="relative z-10 rounded-lg transform hover:scale-105 transition-transform duration-500 animate-fade-in-left"
                    />
                </div>

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-fade-in-up'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                        I am passionate about Frontend Development and have a solid foundation in modern web technologies such as HTML, CSS, JavaScript, TypeScript, and ReactJS. I enjoy building responsive and user-friendly interfaces, and I'm eager to enhance my skills through real-world projects. I am ready to learn and contribute to a dynamic frontend development team.
                    </p>

                    <div className='flex flex-row justify-start mt-8 space-x-2 animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === "skills"}
                            className="transform hover:scale-105 transition-all duration-300"
                        >
                            Skills
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === "education"}
                            className="transform hover:scale-105 transition-all duration-300"
                        >
                            Education
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === "certifications"}
                            className="transform hover:scale-105 transition-all duration-300"
                        >
                            Certifications
                        </TabButton>
                    </div>

                    <div className='mt-8 relative'>
                        {/* Loading overlay khi pending */}
                        {isPending && (
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 rounded-lg">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        )}

                        {/* Content với transition */}
                        <div className={`transition-all duration-500 ${isPending ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
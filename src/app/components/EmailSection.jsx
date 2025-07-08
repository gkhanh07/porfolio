'use client'
import React, { useState } from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (error) setError('');
    };

    const validateForm = () => {
        if (!formData.email || !formData.subject || !formData.message) {
            setError('Please fill in all fields');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Message sent successfully");
                setEmailSubmitted(true);
                setFormData({ email: '', subject: '', message: '' });
                setTimeout(() => setEmailSubmitted(false), 5000);
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setError('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="contact" className='relative grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 px-4 xl:px-16 overflow-hidden'>
            {/* Background animations - giữ nguyên */}
            <motion.div
                className='absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10'
                animate={{
                    background: [
                        "linear-gradient(45deg, rgba(147, 51, 234, 0.1), transparent, rgba(59, 130, 246, 0.1))",
                        "linear-gradient(135deg, rgba(147, 51, 234, 0.15), transparent, rgba(59, 130, 246, 0.15))",
                        "linear-gradient(45deg, rgba(147, 51, 234, 0.1), transparent, rgba(59, 130, 246, 0.1))"
                    ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Elements */}
            <motion.div
                className='absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl'
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className='absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-xl'
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1, 0.8, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Left Column - Contact Info - giữ nguyên */}
            <motion.div
                className='relative z-10'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h5 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4'>
                        Let's Connect
                    </h5>
                </motion.div>

                <motion.p
                    className='text-[#ADB7BE] mb-8 max-w-md text-lg leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Looking for new roles in tech! My inbox is always open — don't hesitate to reach out and say hello. I'd love to hear from you!
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    className='socials flex flex-row gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                        <Link href="https://github.com/gkhanh07" target="_blank">
                            <Image src={GithubIcon} alt="Github icon" width={24} height={24} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    className="mt-8 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.div
                        className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/20"
                        whileHover={{ x: 5, borderColor: "rgba(147, 51, 234, 0.4)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-300">gkhanh0706@gmail.com</span>
                    </motion.div>

                    <motion.div
                        className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border border-blue-500/20"
                        whileHover={{ x: 5, borderColor: "rgba(59, 130, 246, 0.4)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-300">Ho Chi Minh City, Vietnam</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
                className='relative z-10'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <form className='flex flex-col space-y-6' onSubmit={handleSubmit}>
                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center space-x-2 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg"
                                >
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-red-400 font-medium">{error}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                                Your Email *
                            </label>
                            <motion.input
                                className='bg-gray-800/50 border border-gray-600/50 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm'
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='your.email@example.com'
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>

                        {/* Subject Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
                                Subject *
                            </label>
                            <motion.input
                                className='bg-gray-800/50 border border-gray-600/50 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm'
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder='What would you like to discuss?'
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                                Message *
                            </label>
                            <motion.textarea
                                name='message'
                                id="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className='bg-gray-800/50 border border-gray-600/50 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none'
                                placeholder='Tell me about your project or just say hello!'
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-medium py-3 px-6 rounded-lg w-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 disabled:cursor-not-allowed'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            whileHover={!isLoading ? { scale: 1.02 } : {}}
                            whileTap={!isLoading ? { scale: 0.98 } : {}}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <motion.div
                                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                <span className="flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <motion.svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </motion.svg>
                                </span>
                            )}
                        </motion.button>

                        {/* Success Message */}
                        <AnimatePresence>
                            {emailSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center space-x-2 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg"
                                >
                                    <motion.svg
                                        className="w-5 h-5 text-green-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </motion.svg>
                                    <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default EmailSection
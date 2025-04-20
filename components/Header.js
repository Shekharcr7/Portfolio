import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { assets } from '@/assests/assets'
import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { motion } from "motion/react"
import Typed from "typed.js";

const Header = () => {


    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: [
                "Full-stack Web Developer",
                "Java Developer",
                "Machine Learning Engineer"
            ],
            typeSpeed: 100,
            backSpeed: 20,
            backDelay: 1500,
            loop: true,
        });

        return () => {
            // Destroy Typed instance on unmount to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <>
            <div id='top' className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center sm:gap-4 gap-2' >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                >
                    <Image src={assets.profileImg} alt='' className='w-24 sm:w-34 bg-black/10 dark:bg-blue-100 drop-shadow-xl  rounded-full border-2 border-gray-700 shadow-sm shadow-black dark:opacity-80 dark:border-white dark:shadow-whitej' />
                </motion.div>
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-lg md:text-2xl font-semibold'>Hi! I&apos;m Boddapu Chandra Shekhar👋</motion.h2>
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-3xl sm:text-5xl lg:text-[60px] font-bold">
                    I am a <span ref={el} className='bg-gradient-to-r from-blue-800 to-cyan-500 dark:from-pink-500 dark:to-violet-500  bg-clip-text text-transparent'  />
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-[0.9rem]">
                    I&apos;m a full-stack web developer skilled in React, Node.js, and MongoDB, building responsive and dynamic apps.
                    As a Java developer, I create efficient, scalable applications using Spring Boot and OOP principles.
                    I also work on machine learning projects using Python, TensorFlow, and scikit-learn.
                    My focus is on building practical, real-world solutions across web, backend, and AI domains.
                </motion.p>
                <div className='flex flex-col sm:flex-row md:gap-5 gap-2 '>
                    <motion.a
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        href="#contact" className='px-7 py-1 md:px-5 xl:py-1 border rounded-full border-gray-500 dark:border-gray-200 text-center bg-black dark:bg-white text-white dark:text-black font-semibold flex items-center gap-2 hover:text-black
                    hover:bg-white/80
                     dark:hover:text-white dark:hover:bg-black transition duration-400'>
                        Contact Me <FaArrowRight />
                    </motion.a>
                    <motion.a
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        href="/sample-resume.pdf" download className='px-7 py-1  font-semibold  xl:py-1 md:px-5 border 
                        rounded-full border-gray-500 dark:border-gray-200 text-center flex items-center justify-center
                        gap-2 hover:text-white hover:bg-black/80 dark:hover:text-black dark:hover:bg-white
                         transition duration-400'>My Resume <FaDownload /> </motion.a>
                </div>
            </div>
        </>
    )
}

export default Header
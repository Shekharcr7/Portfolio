import { assets, infoList, toolsData } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'


const About = (isDarkMode, setisDarkMode) => {
   
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='about' className='min-h-screen w-full px-[12%] py-10 flex flex-col justify-center scroll-mt-20'>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-2 text-lg'>Introduction</motion.h3>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-4xl font-semibold'>About me</motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex 2xl:flex-row flex-col items-center md:gap-20 gap-10 md:mt-9 mt-4' >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image src={assets.profileImg} alt='' className='lg:w-70 w-60 drop-shadow-lg drop-shadow-black bg-blue-100 rounded-2xl  dark:opacity-80 opacity-95' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-3xl leading-5 flex flex-col gap-5  justify-center text-center 2xl:text-start items-center 2xl:items-start">
            <p>
              I&apos;m a passionate developer with a strong foundation in full-stack web development, Java-based backend systems, and machine learning. I enjoy building practical and impactful solutions, whether it&apos;s a web app, a robust API, or an intelligent ML model. Always eager to learn and explore new technologies!
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='grid grid-cols-1 md:grid-cols-3 max-w-2xl gap-4 md:gap-6 '>
              {infoList.map((item, index) => (
                <motion.li

                  key={index} className='border-[0.5px]  rounded-xl cursor-pointer p-4 flex flex-col items-center shadow-sm shadow-black dark:shadow-white hover:bg-white/80 bg-white/30 dark:bg-black/10 dark:hover:bg-black/80 hover:translate-y-1 transition duration-400 '>
                  <Image src={!isDarkMode ? item.iconDark : item.icon} alt="icons" className='' />
                  <h3 className='font-semibold text-lg mt-2'>{item.title}</h3>
                  <p className='text-gray-600 dark:text-gray-300 text-center text-sm '>{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className='mt-4 text-gray-700 dark:text-gray-300 font-semibold '>Tools I use</motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='max-w-2xl grid grid-cols-4 md:grid-cols-9 gap-10'>
              {toolsData.map((tool, index) => (
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  key={index}>
                  <Image src={tool} alt='' className='w-9 hover:-translate-1 transition duration-300 hover:drop-shadow-sm dark:hover:drop-shadow-white' />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default About
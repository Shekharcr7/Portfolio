import { workData } from '@/assests/assets'
import { motion } from 'motion/react';
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaDiceD6,} from 'react-icons/fa';

const Work = () => {
  return (
    <>
      <motion.div
      initial = {{ opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id='work' className='min-h-screen w-full scroll-mt-10 py-[12%] px-12 flex flex-col items-center justify-center '>

        <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg '>My portfolio</motion.h4>
        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-4xl text-center font-semibold'>My latest work</motion.h2>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mb-5 mt-12 text-gray-600 dark:text-gray-300 leading-5'>I’ve worked on diverse projects ranging from full-stack web applications to backend systems and machine learning solutions. My focus is on building clean, scalable, and user-centric products that solve real problems and deliver value.</motion.p>
        <motion.div
        initial={{y:-20 ,  opacity: 0 }}
        whileInView={{y:0 , opacity: 1 }}
        transition={{ duration: 0.8, delay: 1}}
        className='max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-12 mt-3 '>
          {workData.map((item, index) => (
            <motion.div
        
        
            key={index} className='relative w-full rounded-lg border-2 border-white dark:border-black hover:border-gray-500 group transition duration-500 '>
              <Image src={item.bgImage} width={250} height={150} alt='' className=' dark:opacity-60 opacity-85 drop-shadow-2xl shadow-black dark:shadow-white' />
              <motion.div
              className='absolute flex justify-around items-center px-2 py-0.5 rounded-lg  leading-4 inset-x-0 bottom-3  bg-white/30 dark:bg-black/30 backdrop-blur-lg border-2 border-white dark:border-black right-1 left-1 group-hover:bottom-5 duration-500 group1'>
                <div>
                  <h4 className='text-sm font-semibold'>{item.title}</h4>
                  <p className='text-[0.7rem]'>{item.description}</p>
                </div>
                <div className='border dark:border-black border-white p-2 rounded-full bg-white dark:bg-black'> <FaDiceD6 />
                </div>
              </motion.div>
            </motion.div>

          ))}
        </motion.div>
        
      </motion.div>
    </>
  )
}

export default Work
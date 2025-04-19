import { serviceData } from '@/assests/assets'
import { delay } from 'motion'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'



const Services = () => {
    return (
        <>
            <motion.div
            initial = {{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            id='services' className='min-h-screen w-full px-[12%] py-12  flex flex-col items-center justify-center scroll-mt-20'>
                <motion.h3
                 initial = {{y:-20 , opacity:0}}
                 whileInView={{y:0 , opacity:1}}
                 transition={{duration:0.5 , delay:0.3}}
                className='text-center text-lg '>What I offer</motion.h3>
                <motion.h2
                initial = {{y:-20 , opacity:0}}
                whileInView={{y:0 , opacity:1}}
                transition={{duration:0.5 , delay:0.5}}
                className='text-center text-4xl font-semibold'>My Services</motion.h2>
                <motion.p
                initial = {{ opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5 , delay:0.7}}
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mt-12 mb-5  text-center leading-5 ">
                    I offer end-to-end development solutions tailored to your needs — from building modern, responsive web applications to creating powerful backend systems and intelligent machine learning models. Whether you need a dynamic website, a robust API, or data-driven automation, I provide clean, scalable, and efficient solutions that deliver real-world impact.
                </motion.p>
                <motion.div
                initial = {{y:-20, opacity:0}}
                whileInView={{y:0 , opacity:1}}
                transition={{duration:0.6 , delay:0.9}}
                className='grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 '>
                     {serviceData.map((item,index)=>(
                        <motion.div
                        whileHover={{scale:1.05}}
                        key={index} className='border border-gray-400 dark:bg-neutral-950 rounded-lg px-3 py-8 flex flex-col items-center text-center shadow-lg transition duration-500  cursor-pointer'>
                               <Image src={item.icon} alt='' className='w-10 mb-2'/>
                               <h2 className='text-lg font-semibold'>{item.title}</h2>
                               <p className='text-sm text-gray-600 dark:text-gray-300 leading-5'>{item.description}</p>
                               <a href={item.link}>Read more </a>
                        </motion.div>
                     ))}
                </motion.div>
            </motion.div>
        </>
    )
}

export default Services
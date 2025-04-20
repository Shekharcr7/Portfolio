import { assets } from '@/assests/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import sun1  from '@/public/sun1.svg'
import moon from '@/public/moon.svg'

const Navbar = ({isDarkMode , setisDarkMode}) => {

    const ref = useRef();

    const openMenu = ()=>{
        ref.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = () =>{
        ref.current.style.transform = "translateX(16rem)"
    }

    return (
        <> 
       
            <nav className='w-full bg-white/30 dark:bg-black/30 dark:shadow-white/20 dark:shadow-sm  backdrop-blur-lg shadow-sm fixed px-5 lg:px-8 xl:px-[8%] py-2 flex justify-between  items-center z-50'>
                <a href="#top">
                    <h1 className="text-[1.7rem] font-bold w-max text-black dark:text-white cursor-pointer">
                        Shekhar<span className=' text-orange-600'>.</span>
                    </h1>
                </a>
                <ul className='hidden md:flex items-center gap-5 lg:gap-10 rounded-full px-12 py-2 dark:shadow-white/20 shadow-sm bg-opacity-50'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">My Work</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center gap-8 '>
                    <button onClick={()=> setisDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? sun1 : moon } alt='' className='w-6 cursor-pointer'  />
                    </button>
                    <a href="#contact" className ='hidden lg:flex items-center justify-center gap-2 px-6 py-1 border border-gray-500 dark:border-gray-300 font-semibold  rounded-full' >Contact <Image src={isDarkMode ? assets.arrow_icon_dark :assets.arrow_icon} alt='arrow-icon-light' className='w-3'></Image></a>

                    <button className='md:hidden visible'>
                        <Image src={isDarkMode? assets.menu_white : assets.menu_black} alt='' className='w-6 cursor-pointer' onClick={openMenu}></Image>
                    </button>
                </div>

                {/* -------- mobile menu -------- */}
                <ul ref={ref} className='md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-64 h-screen bg-white dark:bg-gray-700 transition duration-1000'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white :assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
                    </div>
                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>
                
            </nav>
        </>
    )
}

export default Navbar
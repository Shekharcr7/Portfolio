
import React from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaMailBulk, FaMailchimp, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    

    return (
        <>
            <div className=''>
                <div className=''>
                    <h1 className="text-[1.7rem] w-max mx-auto font-bold text-black dark:text-white  mb-2">
                        Shekhar<span className=' text-orange-600'>.</span>
                    </h1>
                    <div className='w-max mx-auto flex gap-2 items-center'>
                        <FaMailBulk />
                        boddapushekhar2004@gmail.com
                    </div>
                </div>
                <div className='text-center lg:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-sm lg:text-md'>
                    <p>&copy; 2025 Boddapu Chandra Shekhar. All rights reserved.</p>
                    <ul className='flex gap-4 justify-center items-center'>
                        <li><a target='_blank' href="https://github.com/Shekharcr7" className='flex items-center gap-1'><FaGithub /> GitHub</a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/in/b-c-shekhar" className='flex items-center gap-1'><FaLinkedin /> LinkedIn</a></li>
                        <li><a target='_blank' href="https://x.com/Shekhar___CR7" className='flex items-center gap-1'><FaTwitter /> Twitter</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
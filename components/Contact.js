import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';



const Contact = () => {
  const [result, setResult] = useState("");
  const [showRes, setshowRes] = useState(false)

  useEffect(() => {
    {
      showRes &&
      toast(result, {
        position: "bottom-left",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [result])

  const delay = (s) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        setshowRes(false)
      }, s * 1000);

    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setshowRes(true)
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93728ccb-956a-4415-8188-1ce13ba56d19");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    await delay(2);
  };

  return (
    <>

      <ToastContainer />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='contact' className='min-h-screen w-full scroll-mt-10 py-[12%] px-12 '>
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-2 text-lg '>In touch</motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-4xl text-center font-semibold'>Connect with me</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='text-center max-w-2xl mx-auto mb-5 mt-12 text-gray-600 dark:text-gray-300 leading-5'>Have an idea or project you’d like to discuss?
          I’m open to freelance work, collaborations, or full-time roles.
          Let’s connect and build something impactful together.
          Feel free to reach out — I’d love to hear from you!</motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='max-w-2xl mx-auto' onSubmit={onSubmit}>
          <motion.div

            className='grid lg:grid-cols-2 gap-5 mt-10 mb-8'>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className='flex-1 px-3 py-1 border-[0.5px] outline-none border-gray-500 dark:border-gray-400 rounded-md bg-white dark:bg-black' type="text" name='Name' placeholder='Enter your name' required />
            <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email" className='flex-1 px-3 py-1 border-[0.5px] outline-none border-gray-500 rounded-md bg-white dark:bg-black' placeholder='Enter your email' name='Email' required />
          </motion.div>
          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            rows='6' className='w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-black' placeholder='Enter your message' name='Message' required ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit" className=' w-max flex  items-center px-4 py-1.5 rounded-full mx-auto justify-between gap-2  bg-black/80 hover:bg-black  mt-4 text-white dark:bg-white dark:text-black dark:hover:bg-white/80 font-semibold '>Submit now <FaArrowRight /></motion.button>
        </motion.form>
      </motion.div>
    </>
  )
}

export default Contact
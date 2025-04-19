'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setisDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-schema:dark)').matches)) {
      setisDarkMode(true)
    }
    else {
      setisDarkMode(false)
    }
  }, [])


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Header isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <About  isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode}/>
      <Services isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Work isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Contact isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Footer isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
    </>
  );
}

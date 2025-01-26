import React from 'react';
import landing from "../assets/landing.jpg";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center relative bg-cover bg-center py-28 px-4 "
      style={{ backgroundImage: `url(${landing})` }}
    >


     <div className='flex flex-col justify-center items-start gap-2 px-4'>

      <motion.h1
      initial={{opacity:0, y:-50}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8, delay:0.2}}
      
      
      className="text-4xl text-start sm:text-6xl md:text-7xl md:text-center text-white font-bold px-4">
        Faites briller vos événements dès l’entrée
      </motion.h1>

      <motion.h3

        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8, delay:0.2}}
      
      
      
      className='text-white px-4 text-xl md:text-2xl'>Offrez à vos invités une éxperience mémorable</motion.h3>
      <div className='px-4 mt-2'>
      <motion.div
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.2}}
      
      
      
      
      className='bg-[#c1abbc] py-3 px-4 rounded text-white hover:transition-all hover:duration-300 hover:scale-105'><a href="">Découvrir</a></motion.div>
      </div>
    </div>


    </div>
  );
};

export default Hero;

import React from 'react';
import discovery from '../assets/Discovery.png';
import { motion } from "framer-motion";  // Correction de l'import

const Discovery = () => {
  return (
    <div className='bg-[#fffcf7] grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-36 gap-6'>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='w-full md:w-[350px] lg:w-[400px] mx-auto'
      >
        <img
          src={discovery}
          alt="Discovery"
          className='rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-2xl'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='flex flex-col gap-6'
      >
        <p className='text-lg sm:text-xl md:text-2xl text-black'>
          Que ce soit pour un séminaire, une conférence ou une réception, nous sélectionnons l’hôte ou l’hôtesse idéal(e) parmi notre équipe expérimentée.
          Ils peuvent accueillir vos invités, distribuer des documents, transmettre des informations sur l’événement et s’assurer que tout se déroule parfaitement.
        </p>

        <a
          href="#"
          className="w-[180px] md:w-[200px] inline-block bg-[#c1abbc] text-white py-3 px-6 rounded font-semibold text-center shadow-lg hover:bg-[#b59db3] transition-all hover:scale-105 mx-auto"
        >
          Get In Touch
        </a>
      </motion.div>

    </div>
  );
}

export default Discovery;

import React from 'react';
import caftan from "../assets/caftan.png";
import hps from "../assets/hps.png";
import voiture from "../assets/voiture.png";
import { motion } from 'framer-motion';  // Correction de l'import

const servicesData = [
  {
    title: 'Hôtesses Élégantes en Caftan',
    description: 'Nos hôtesses en caftan ajoutent une touche de luxe et de tradition à vos événements. Élégantes et professionnelles, elles offrent un accueil chaleureux et raffiné à vos invités.',
    imgSrc: caftan,
    alt: 'Caftan',
    delay: 0.2
  },
  {
    title: 'Hôtesse VIP pour Événements Exclusifs',
    description: 'Offrez à vos invités une expérience haut de gamme avec nos hôtesses spécialisées dans les événements VIP. Discrétion, professionnalisme et service impeccable pour un événement sans fausse note.',
    imgSrc: hps,
    alt: 'Hôtesse VIP',
    delay: 0.3
  },
  {
    title: 'Robes Élégantes pour Votre Événement',
    description: 'Laissez vos invités émerveillés dès leur arrivée avec notre sélection de voitures vintage et de robes élégantes. Un duo parfait pour des événements prestigieux, alliant raffinement et nostalgie.',
    imgSrc: voiture,
    alt: 'Robes Élégantes',
    delay: 0.4
  }
];

const Services = () => {
  return (
    <div className='py-28 w-full px-6 md:px-32'>
      <h1 className='text-2xl md:text-5xl text-center mb-12'>Evénements</h1>
      
      <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-12'>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: service.delay }}
            className="card bg-base-100 w-full md:w-96 shadow-sm cursor-pointer hover:transition-all hover:duration-300 hover:scale-105 -translate-y-3"
          >
            <figure>
              <img
                src={service.imgSrc}
                alt={service.alt}
                className="rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-center">{service.title}</h2>
              <p className="text-center">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;

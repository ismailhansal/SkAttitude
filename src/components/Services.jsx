import React from 'react'

import caftan from "../assets/caftan.png"
import hps from "../assets/hps.png"
import voiture from "../assets/voiture.png"
import { motion } from 'motion/react'
import { div, h1 } from 'motion/react-client'


const Services = () => {
  return (





    <div className='py-28 w-full px-14 md:px-32  '>


        <h1 className='text-2xl md:text-5xl text-center mb-22'>Evénements</h1>


        <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-12'>

        




<motion.div

initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:0.8, delay:0.2}}



className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:transition-all hover:duration-300 hover:scale-105 -translate-y-3">
  <figure>
    <img
      src={caftan}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">Hôtesses Élégantes en Caftan</h2>
    <p>Nos hôtesses en caftan ajoutent une touche de luxe et de tradition à vos événements. Élégantes et professionnelles, elles offrent un accueil chaleureux et raffiné à vos invités.</p>
    
  </div>
</motion.div>





<motion.div

initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:0.8, delay:0.3}}


className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">
  <figure>
    <img
      src={hps}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">Hôtesse VIP pour Événements Exclusifs</h2>
    <p>Offrez à vos invités une expérience haut de gamme avec nos hôtesses spécialisées dans les événements VIP. Discrétion, professionnalisme et service impeccable pour un événement sans fausse note.</p>
   
  </div>
</motion.div>






<motion.div

initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:0.8, delay:0.4}}




className="card bg-base-100 w-96 shadow-sm cursor-pointer hover:transition-all hover:duration-300 hover:scale-105">
  <figure>
    <img
      src={voiture}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">Robes Élégantes pour Votre Événement</h2>
    <p> Laissez vos invités émerveillés dès leur arrivée avec notre sélection de voitures vintage et de robes élégantes. Un duo parfait pour des événements prestigieux, alliant raffinement et nostalgie.</p>
    
  </div>
</motion.div>



</div>

    </div>
  )
}

export default Services
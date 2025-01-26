import React from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="bg-black/70 py-10 px-6 sm:px-12 md:px-16 lg:px-32 w-full">
      <div className="container mx-auto text-white">
        {/* Social media links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/skattitude.agency/" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagram className="text-3xl cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-purple-500 rounded-full p-2" />
          </a>
          <a href="https://web.facebook.com/p/SKAttitude-Agency-100090675788695/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
            <BiLogoFacebook className="text-3xl cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-blue-500 rounded-full p-2" />
          </a>
        </div>

        {/* Contact section */}
        <div className="text-center mb-8">
          <label htmlFor="contact" className="block text-xl mb-2 font-semibold mb-8">Nous Contacter</label>
          <div className="flex justify-center space-x-4">
            <input
              type="email"
              id="contact"
              className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 py-3 px-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Saisir votre email"
            />
            <button
              type="submit"
              className="bg-[#c1abbc] text-white py-3 px-6 rounded-md hover:bg-purple-200 transition-all duration-300 cursor-pointer"
            >
              Envoyer
            </button>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Skattitude Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

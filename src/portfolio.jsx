import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaFacebookF, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import selfImage from './images/IMG_7437.JPG';
import XLivesOfWolverine from './images/1_medium.jpg';
import infinity from './images/001.jpg';
import jjk from './images/jjkcover.jpg';

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 text-gray-900 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-1 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            src={selfImage}
            alt="Profile"
            className="w-full rounded-lg object-cover border-4 border-indigo-300 shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-4">Rebwar Omer</h2>
          <p className="text-sm text-gray-600">Professional Translator</p>

          {/* Worked With */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 font-medium">Worked with:</p>
            <ul className="text-gray-700 text-sm mt-2">
              <li>
                <a href="https://kurdcomic.net/" target="_blank" className="text-blue-600 hover:text-blue-800">
                  KurdComic
                </a>
              </li>
              <li>
                <a href="https://kurdprime.com/" target="_blank" className="text-blue-600 hover:text-blue-800">
                  KurdPrime
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://facebook.com/rebwar.omer.03" target="_blank" className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://snapchat.com/t/riMncWw9" target="_blank" className="text-yellow-500 hover:text-yellow-600 transition-transform hover:scale-110">
              <FaSnapchatGhost />
            </a>
            <a href="https://www.tiktok.com/@rebwarkurd03?_t=ZS-8vdHBdTPPww&_r=1" target="_blank" className="text-black hover:text-gray-800 transition-transform hover:scale-110">
              <FaTiktok />
            </a>
            <a href="https://twitter.com/reboo_kurdi" target="_blank" className="text-sky-500 hover:text-sky-600 transition-transform hover:scale-110">
              <FaXTwitter />
            </a>
          </div>

          {/* Phone & Contact Me */}
          <div className="mt-6 text-sm text-gray-700">
            <p><strong>Phone:</strong> +964 770 738 2003</p>
            <p><strong>Email:</strong> rebwaromer03@gmail.com</p>
            <Link
              to="/contact"  // Link to Contact page
              className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              Hire Me!
            </Link>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="md:col-span-3 space-y-10">
          {/* About Me */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-indigo-50 p-8 rounded-2xl shadow-md border-l-4 border-indigo-400"
          >
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">About Me</h1>
            <p className="text-gray-700 leading-relaxed">
              Hi, I'm Rebwar – speaking English for over 8 years and have 3 years of translation experience.
              My journey with English began from a deep passion for language, culture, and human connection.
              I specialize in accurate, culturally relevant translations that feel natural to native speakers.
              Whether it’s everyday conversation, formal documents, or creative storytelling,
              I make sure your message hits just right across languages.
            </p>
          </motion.section>

          {/* My Work */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-md border border-blue-200"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">My Works</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              I've translated a wide range of material—from comic books and graphic novels to technical content
              and culturally sensitive projects. Below are a few examples of titles I've worked with.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[XLivesOfWolverine, infinity, jjk].map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Work ${index + 1}`}
                  className="w-full rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.08 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.01 + index * 0.01 }}
                />
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default Portfolio;

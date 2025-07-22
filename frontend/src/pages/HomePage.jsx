import React from "react";
import profileImage from '../Assets/black.png';
import AboutMe from "./AboutMe.jsx";
import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline.jsx";




const HomePage = () => {
  return (
<>

    {/* <div className="min-h-screen bg-cover bg-center bg-no-repeat text-white font-sans relative" style={{ backgroundImage: `url(${profileImage})` }}> */}
<div className="h-screen bg-cover bg-center bg-no-repeat text-white font-sans relative" style={{ backgroundImage: `url(${profileImage})` }}>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-10 md:px-28 py-28 pt-56">

        {/* Text Section */}
        <div className="max-w-xl mb-16 md:mb-0">
        
        

          <p className="text-gray-400 text-sm mb-4">Data Scientist & AI Enthusiast</p>
          <motion.div
          className="max-w-xl mb-16 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hello! I’m <br /><span className="text-white">Ahamed Mafath</span></h2></motion.div>
          <p className="text-gray-400 text-sm mb-10">I’m passionate about building intelligent systems, solving data problems, and crafting digital experiences using AI & data science.</p>

          {/* <div className="flex flex-col space-y-6"> */}
          <div className="flex flex-col justify-between h-full flex-grow">

            {/* Buttons Row */}
            <div className="flex space-x-6">
              <button className="bg-[#0b0f19] border border-gray-600 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                Get Resume <span className="ml-1"><i class="fa fa-download" aria-hidden="true"></i></span>
              </button>

              <a
                href="#projects"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition duration-300">
                See Projects <span className="ml-1"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
              </a>
            </div>

<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
            {/* Follow Me Section */}
            <div className="mt-32">
              <p className="text-gray-400 text-sm mb-3">Follow me</p>
              <div className="flex space-x-6 text-xl text-gray-400">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            {/* <SocialIcons /> */}


            </motion.div>

          </div>
        
        </div>

        {/* Placeholder for image area (intentionally omitted) */}
        {/* <div className="w-full md:w-[400px] h-[400px] bg-[#131826] rounded-2xl border border-gray-700 flex items-center justify-center text-gray-600"> */}
          {/* Optional: You could place a logo or SVG here */}
          {/* <span className="text-sm">[ Profile Image Area ]</span> */}
        {/* </div> */}
      </section>

    </div>






<AboutMe />
<ExperienceTimeline />




  </>
  );
};

export default HomePage;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import '../styles/AboutMe.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
};

const AboutMe = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div id="about" className="relative text-gray-300 px-6 md:px-28 py-20 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden bg-[#030303]">
    {/* // <div id="about" className="relative text-gray-300 px-6 md:px-28 py-20 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden bg-[#0C0C0C]"> */}

      {/* Background Blob */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-700 rounded-full opacity-20 filter blur-3xl"></div>

      {/* Left Content */}
      <div ref={ref} className="md:w-7/12 z-10 space-y-6">
        <motion.p
          className="text-base leading-relaxed mb-6"
          initial={{ opacity: 0, y: 80 }}                        // More dramatic start
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}                           // Also slide out when scrolling up
          transition={{ duration: 1, ease: "easeInOut" }}        // Slower and smoother
          viewport={{ once: false, amount: 0.3 }}  
        >
          Hello! I’m <span className="text-white font-semibold">Ahamed Mafath</span>, a passionate
          <span className="text-purple-400"> Data Scientist </span> and
          <span className="text-purple-400"> AI Enthusiast</span> dedicated to solving real-world problems through
          intelligent data-driven solutions. My journey began with a fascination for extracting meaningful insights
          from complex datasets and evolved into building scalable machine learning models and interactive tools.
        </motion.p>

        <motion.p
          className="text-base leading-relaxed mb-6"
          initial={{ opacity: 0, y: 80 }}                        // More dramatic start
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}                           // Also slide out when scrolling up
          transition={{ duration: 1, ease: "easeInOut" }}        // Slower and smoother
          viewport={{ once: false, amount: 0.3 }}  
        >
          I love diving deep into data to uncover hidden patterns and transforming them into impactful narratives
          that drive decisions. I also explore full-stack development to deliver end-to-end solutions that are both
          functional and beautiful.
        </motion.p>

        <motion.p
        className="text-base leading-relaxed mb-6"
        initial={{ opacity: 0, y: 80 }}                        // More dramatic start
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}                           // Also slide out when scrolling up
        transition={{ duration: 1, ease: "easeInOut" }}        // Slower and smoother
        viewport={{ once: false, amount: 0.3 }}  
      >
          When I’m not coding or analyzing trends, you’ll find me contributing to open-source projects, reading the
          latest AI research, or brainstorming ideas for smarter applications. My goal is to continuously learn,
          adapt, and contribute to the evolving tech world.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 80 }}                        // More dramatic start
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}                           // Also slide out when scrolling up
          transition={{ duration: 1, ease: "easeInOut" }}        // Slower and smoother
          viewport={{ once: false, amount: 0.3 }}  
        >
          <button className="border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-400 px-6 py-2 rounded-full transition duration-300">
            Let's Connect
          </button>
        </motion.div>
      </div>

      {/* Right Side Bubble */}
      <div className="md:w-5/12 flex justify-center z-10">
        <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm animate-bounce-vertical shadow-2xl">
          ABOUT ME
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

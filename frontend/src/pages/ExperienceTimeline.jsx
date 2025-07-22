import React from "react";
import { motion } from "framer-motion";


const experiences = [
  {
    title: "Data Scientist Intern",
    company: "ABC Analytics",
    date: "Jan 2024 - Apr 2024",
    description: "Worked on building predictive models using Python and Scikit-learn for customer churn analysis.",
  },
  {
    title: "AI Research Assistant",
    company: "University Lab",
    date: "May 2023 - Dec 2023",
    description: "Contributed to NLP research, focused on transformer-based text summarization models.",
  },
  {
    title: "Machine Learning Trainee",
    company: "XYZ Academy",
    date: "Jun 2022 - Dec 2022",
    description: "Completed intensive training on supervised & unsupervised learning with hands-on projects.",
  },
  {
    title: "Freelance Data Analyst",
    company: "Upwork",
    date: "Jan 2022 - May 2022",
    description: "Delivered data visualizations and dashboards using Python, Pandas, and Power BI.",
  },
];

const ExperienceTimeline = () => {
  return (
    // <section className="py-20 bg-[#0b0f19] text-white font-sans">
    
    <section id="work" className="py-10 bg-[#0b0f19] bg-dots text-white font-sans relative">


      <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white" />

        {/* Timeline Items */}
        {experiences.map((exp, index) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      key={index}
      className="relative mb-2 flex items-center justify-between w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Left Block */}
      <div className={`w-2/2 ${isLeft ? "text-right" : "invisible"}`}>
        <div className="mr-4">
          <h3 className="text-sm font-semibold mb-1">{exp.title}</h3>
          <p className="text-purple-400 text-sm mb-1">{exp.company}</p>
          <p className="text-gray-400 text-sm mb-1">{exp.date}</p>
          <p className="text-gray-300 text-sm">{exp.description}</p>
        </div>
      </div>

      {/* Dot */}
      <div className="z-10">
        <div
          className={`w-5 h-5 rounded-full border-4 border-[#0b0f19] ${
            index === experiences.length - 1 ? "bg-purple-600" : "bg-white"
          }`}
        />
      </div>

      {/* Right Block */}
      <div className={`w-2/2 ${isLeft ? "invisible" : ""}`}>
        <div className="ml-4">
          <h3 className="text-sm font-semibold mb-1">{exp.title}</h3>
          <p className="text-purple-400 text-sm mb-1">{exp.company}</p>
          <p className="text-gray-400 text-sm mb-1">{exp.date}</p>
          <p className="text-gray-300 text-sm">{exp.description}</p>
        </div>
      </div>
    </motion.div>
  );
})}

      </div>
    </section>
  );
};

export default ExperienceTimeline;

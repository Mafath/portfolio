import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaPhp, FaGitSquare, FaAndroid, FaJava, FaCuttlefish, FaFigma, FaCode, FaPaperPlane, FaCoffee } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiGraphql, SiMysql, SiRedis, SiKotlin, SiRedux, SiCplusplus, SiR, SiReactquery  } from "react-icons/si";
import { MdApi } from "react-icons/md";

const skills = [
  { icon: <FaPython size={48} color="#3776AB" />, name: "Python" },
  { icon: <FaReact size={48} color="#61DAFB" />, name: "React.js" },
  { icon: <FaNodeJs size={48} color="#339933" />, name: "Node.js" },
  { icon: <SiJavascript size={48} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={48} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiMongodb size={48} color="#47A248" />, name: "MongoDB" },
  { icon: <FaDatabase size={48} color="#4479A1" />, name: "SQL" },
  { icon: <FaGitAlt size={48} color="#F05032" />, name: "Git" },
  { icon: <FaHtml5 size={48} color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt size={48} color="#1572B6" />, name: "CSS" },
  { icon: <SiExpress size={48} color="#000000" />, name: "Express.js" },
  { icon: <FaPhp size={48} color="#777BB4" />, name: "PHP" },
];

const techs = [
  { icon: <SiGraphql size={48} color="#E10098" />, name: "GraphQL" },
  { icon: <SiMysql size={48} color="#4479A1" />, name: "MySQL" },
  { icon: <MdApi size={48} color="#FF6C37" />, name: "REST API" },
  { icon: <SiRedis size={48} color="#DC382D" />, name: "Redis" },
  { icon: <FaGitSquare size={48} color="#F05032" />, name: "GitHub" },
  { icon: <SiKotlin size={48} color="#0095D5" />, name: "Kotlin" },
  { icon: <FaAndroid size={48} color="#3DDC84" />, name: "Android Studio" },
  { icon: <SiRedux size={48} color="#764ABC" />, name: "Redux" },
  { icon: <FaCuttlefish size={48} color="#A8B9CC" />, name: "C" },
  { icon: <SiCplusplus size={48} color="#00599C" />, name: "C++" },
  { icon: <FaJava size={48} color="#007396" />, name: "Java" },
  { icon: <FaFigma size={48} color="#F24E1E" />, name: "Figma" },
  { icon: <SiR size={48} color="#276DC3" />, name: "R" },
  { icon: <FaCode size={48} color="#007ACC" />, name: "VS Code" },
  { icon: <SiReactquery size={48} color="#00C3A7" />, name: "Zustand" },
  { icon: <FaPaperPlane size={48} color="#FF6C37" />, name: "Postman" },
  { icon: <FaCoffee size={48} color="#3D3D3D" />, name: "Insomnia" },
]


// Top row icons
const skillsTop = [
  { icon: <FaPython size={48} color="#3776AB" />, name: "Python" },
  { icon: <FaGitAlt size={48} color="#F05032" />, name: "Git" },
  { icon: <FaReact size={48} color="#61DAFB" />, name: "React.js" },
  { icon: <FaNodeJs size={48} color="#339933" />, name: "Node.js" },
  { icon: <SiJavascript size={48} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={48} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiMongodb size={48} color="#47A248" />, name: "MongoDB" },
  { icon: <FaDatabase size={48} color="#4479A1" />, name: "SQL" },
  { icon: <FaHtml5 size={48} color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt size={48} color="#1572B6" />, name: "CSS" },
  { icon: <SiExpress size={48} color="#000000" />, name: "Express.js" },
  { icon: <FaPhp size={48} color="#777BB4" />, name: "PHP" },
];

// Bottom row icons
const skillsBottom = [
  { icon: <SiGraphql size={48} color="#E10098" />, name: "GraphQL" },
  { icon: <SiMysql size={48} color="#4479A1" />, name: "MySQL" },
  { icon: <MdApi size={48} color="#FF6C37" />, name: "REST API" },
  { icon: <SiKotlin size={48} color="#0095D5" />, name: "Kotlin" },
  { icon: <SiRedis size={48} color="#DC382D" />, name: "Redis" },
  { icon: <FaAndroid size={48} color="#3DDC84" />, name: "Android Studio" },
  { icon: <SiRedux size={48} color="#764ABC" />, name: "Redux" },
  { icon: <FaGitSquare size={48} color="#F05032" />, name: "GitHub" },
  { icon: <FaCuttlefish size={48} color="#A8B9CC" />, name: "C" },
  { icon: <SiCplusplus size={48} color="#00599C" />, name: "C++" },
  { icon: <FaJava size={48} color="#007396" />, name: "Java" },
  { icon: <FaFigma size={48} color="#F24E1E" />, name: "Figma" },
  { icon: <SiR size={48} color="#276DC3" />, name: "R" },
  { icon: <FaCode size={48} color="#007ACC" />, name: "VS Code" },
  { icon: <SiReactquery size={48} color="#00C3A7" />, name: "Zustand" },
  { icon: <FaPaperPlane size={48} color="#FF6C37" />, name: "Postman" },
  { icon: <FaCoffee size={48} color="#3D3D3D" />, name: "Insomnia" },
];


const Skills = () => {
  // Duplicate for infinite loop
  const topIcons = [...skillsTop, ...skillsTop];
  const bottomIcons = [...skillsBottom, ...skillsBottom];

  return (
    <section className="bg-dots relative py-20 px-0 text-white bg-[#0b0f19] overflow-hidden select-none">
      <h2 className="text-3xl font-bold text-center mb-16">Tech & Skills</h2>

      <div className="flex flex-col gap-10 w-full overflow-hidden">
        {/* Top Row */}
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
        >
          {topIcons.map(({ icon, name }, index) => (
            <div
              key={`top-${index}`}
              className="flex flex-col items-center min-w-[80px]"
              title={name}
            >
              {icon}
              <p className="mt-2 text-xs text-gray-300 text-center">{name}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {bottomIcons.map(({ icon, name }, index) => (
            <div
              key={`bottom-${index}`}
              className="flex flex-col items-center min-w-[80px]"
              title={name}
            >
              {icon}
              <p className="mt-2 text-xs text-gray-300 text-center">{name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
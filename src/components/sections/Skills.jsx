import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
  SiKubernetes,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava size={40} className="text-orange-400" /> },
      { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-300" /> },
      { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-400" /> },
  
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-500" /> },
      { name: "REST APIs", icon: "🌐" },
      { name: "JDBC", icon: "⚙️" },
      { name: "Servlets", icon: "☕" },
      { name: "JSP", icon: "📄" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
      { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-violet-400" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql size={40} className="text-blue-400" /> },
      { name: "SQLite", icon: "🗄️" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub size={40} /> },
   {name: "VS Code",icon: <VscVscode size={40} className="text-blue-400" />},

      { name: "Eclipse", icon: <SiEclipseide size={40} className="text-indigo-400" /> },
      { name: "IntelliJ", icon: <SiIntellijidea size={40} className="text-pink-400" /> },
      { name: "Postman", icon: <SiPostman size={40} className="text-orange-400" /> },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Docker", icon: <FaDocker size={40} className="text-blue-400" /> },
      { name: "AWS", icon: <FaAws size={40} className="text-yellow-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-container py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-aurora-cyan uppercase tracking-[0.3em] mb-3">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold mb-5">
            Technologies I
            <span className="gradient-text"> Work With</span>
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto leading-8">
            I enjoy building scalable applications using modern technologies,
            continuously learning, and improving my software engineering skills.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="space-y-14">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
            >
              <h3 className="text-2xl font-semibold mb-6 text-aurora-cyan">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:border-aurora-cyan/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300"
                  >
                    <div className="mb-4">
                      {skill.icon}
                    </div>

                    <h4 className="font-semibold">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
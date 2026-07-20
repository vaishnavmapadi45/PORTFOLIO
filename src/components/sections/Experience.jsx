import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

import {
  FaBriefcase,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";
const experiences = [
  {
    company: "CNC WebWorld Technologies Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "Dec 2025 – Mar 2026",
    icon: "💼",
    description:
      "Completed a 3-month Full Stack Development internship, contributing to web application development while strengthening frontend and backend development skills.",
    skills: [
      "Java",
      "React",
      "MySQL",
      "Full Stack",
    ],
  },

  {
    company: "JP Morgan Chase & Co.",
    role: "Software Engineering Virtual Experience",
    duration: "2026",
    icon: "🏦",
    description:
      "Built backend applications using Spring Boot, Kafka and REST APIs while solving real-world banking software engineering tasks.",
    skills: [
      "Java",
      "Spring Boot",
      "Kafka",
      "REST API",
    ],
  },

  {
    company: "Walmart",
    role: "Advanced Software Engineering Virtual Experience",
    duration: "2026",
    icon: "🛒",
    description:
      "Worked on software engineering challenges involving Java, Python and data processing while following industry development practices.",
    skills: [
      "Java",
      "Python",
      "Data Processing",
    ],
  },

  {
    company: "Deloitte",
    role: "Data Analytics Virtual Experience",
    duration: "2026",
    icon: "📊",
    description:
      "Performed data analytics using Python and Tableau to generate business insights and visual dashboards.",
    skills: [
      "Python",
      "Tableau",
      "Analytics",
    ],
  },

  {
    company: "Tata",
    role: "GenAI Data Analytics Virtual Experience",
    duration: "2026",
    icon: "🤖",
    description:
      "Applied AI-powered data analytics techniques to solve business problems and create meaningful visualizations.",
    skills: [
      "GenAI",
      "Python",
      "Visualization",
    ],
  },
];

const iconMap = {
  Java: <FaJava className="text-orange-400" />,
  Python: <FaPython className="text-yellow-400" />,
  "Spring Boot": <SiSpringboot className="text-green-500" />,
  MySQL: <SiMysql className="text-blue-400" />,

  Kafka: <span>⚡</span>,
  Tableau: <span>📊</span>,
  "REST API": <span>🌐</span>,
  Analytics: <span>📈</span>,
  Visualization: <span>🎨</span>,
  "Data Processing": <span>💾</span>,
  "Full Stack": <span>💻</span>,
  GenAI: <span>🤖</span>,
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-aurora-cyan uppercase tracking-[0.3em] mb-3">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Professional
            <span className="gradient-text"> Journey</span>
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto leading-8">
            My internship experiences and virtual programs have strengthened my
            expertise in software engineering, backend development and data
            analytics.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-aurora-cyan via-aurora-violet to-transparent"></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative pl-20"
              >

                {/* Timeline Circle */}

                <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-r from-aurora-cyan to-aurora-violet flex items-center justify-center text-xl shadow-[0_0_25px_rgba(0,255,255,.5)]">
                  {exp.icon}
                </div>

                {/* Card */}

                <div className="glass-panel rounded-3xl border border-white/10 p-8 hover:border-aurora-cyan/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,.12)]">

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {exp.company}
                      </h3>

                      <p className="text-aurora-cyan font-medium mt-1">
                        {exp.role}
                      </p>

                    </div>

                    <div className="glass-panel px-5 py-2 rounded-full text-sm text-white/80 w-fit">
                      {exp.duration}
                    </div>

                  </div>

                  <p className="text-white/70 mt-6 leading-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {exp.skills.map((skill) => (

                      <motion.div
                        key={skill}
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-aurora-cyan/40 transition"
                      >

                        {iconMap[skill] || <FaBriefcase />}

                        <span className="text-sm">
                          {skill}
                        </span>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>
    </section>
  );
}
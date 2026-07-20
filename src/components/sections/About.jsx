import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import {
  GraduationCap,
  Code2,
  Dumbbell,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Final Year Electrical & Computer Engineering",
  },
  {
    icon: Code2,
    title: "Focus",
    description: "Java Backend • Spring Boot • React",
  },
  {
    icon: Trophy,
    title: "Experience",
    description: "Virtual Internships & Personal Projects",
  },
  {
    icon: Dumbbell,
    title: "Beyond Coding",
    description: "Professional Skater • Gym Enthusiast • Sports Lover",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-container py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-aurora-cyan uppercase tracking-[0.3em] text-sm mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Passionate About Building
            <span className="gradient-text"> Software </span>
            That Makes an Impact
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto leading-8">
            I'm a final-year Electrical & Computer Engineering student with a
            passion for creating scalable backend systems, modern web
            applications, and solving real-world problems through technology.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            variants={fadeUp}
            className="glass-panel rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Who I Am
            </h3>

            <p className="text-white/70 leading-8 mb-6">
              Hello! I'm <span className="text-white font-semibold">Vaishnav Mapadi</span>,
              an aspiring Software Engineer passionate about Java Backend
              Development and Full Stack Development.
            </p>

            <p className="text-white/70 leading-8 mb-6">
              I enjoy designing scalable applications using Java, Spring Boot,
              REST APIs, MySQL, and React while continuously learning modern
              software development practices.
            </p>

            <p className="text-white/70 leading-8">
              Outside coding, I enjoy professional skating, working out in the
              gym, and participating in sports. These activities have helped me
              develop discipline, teamwork, and consistency that I bring into
              every project.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeUp}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-aurora-cyan/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-cyan flex items-center justify-center mb-5">
                    <Icon size={28} />
                  </div>

                  <h4 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h4>

                  <p className="text-white/60 text-sm leading-7">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Stats */}

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            ["8.39", "CGPA"],
            ["5+", "Projects"],
            ["1", "Internships"],
            ["2027", "Graduation"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="glass-panel rounded-2xl text-center py-8"
            >
              <h3 className="text-4xl font-bold gradient-text">
                {number}
              </h3>

              <p className="text-white/60 mt-2">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
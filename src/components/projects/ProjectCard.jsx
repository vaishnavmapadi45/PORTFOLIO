import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github = "#",
  demo = "#",
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 250 }}
      className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-aurora-cyan/40 transition-all duration-500"
    >
      {/* Image */}

      <div className="overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-white/70 leading-7 mb-6">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mb-6">

          {tech.map((item, index) => (
            <span key={index} className="skill-pill">
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-indigo flex justify-center items-center gap-2 hover:scale-105 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl glass-panel flex justify-center items-center gap-2 hover:bg-white/10 transition"
          >
            <FaExternalLinkAlt />
            Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}
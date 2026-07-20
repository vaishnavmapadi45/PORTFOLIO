import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaBootstrap,
   FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import blogImage from "../../assets/projects/blog.png";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-10 items-center glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-aurora-cyan/40 transition-all duration-500"
    >
      {/* Project Image */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden h-full"
      >
        <img
          src={blogImage}
          alt="Blog Management System"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </motion.div>

      {/* Project Details */}

      <div className="p-8">

        <p className="text-aurora-cyan uppercase tracking-[0.25em] text-sm mb-4">
          Featured Project
        </p>

        <h3 className="text-4xl font-bold mb-5">
          Blog Management System
        </h3>

        <p className="text-white/70 leading-8 mb-8">
          A full-stack blogging platform developed using Java, JSP,
          Servlets and MySQL. The application allows users to register,
          authenticate, create blogs, manage posts, comment on articles
          and interact through a responsive interface.
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mb-8">

          <span className="skill-pill">
            <FaJava />
            Java
          </span>

          <span className="skill-pill">
            JSP
          </span>

          <span className="skill-pill">
            Servlets
          </span>

          <span className="skill-pill">
            <SiMysql />
            MySQL
          </span>

          <span className="skill-pill">
  <FaHtml5 />
  HTML
</span>

<span className="skill-pill">
  <FaCss3Alt />
  CSS
</span>
          <span className="skill-pill">
            <FaBootstrap />
            Bootstrap
          </span>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">

          <a
            href="https://github.com/vaishnavmapadi45/Blog-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-indigo flex items-center gap-2 font-medium hover:scale-105 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <button
            className="px-6 py-3 rounded-xl glass-panel flex items-center gap-2 hover:bg-white/10 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </button>

        </div>

      </div>
    </motion.div>
  );
}
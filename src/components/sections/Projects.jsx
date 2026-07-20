import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../lib/motionVariants";

import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";

import portfolioImage from "../../assets/projects/portfolio.png";
import fitnessImage from "../../assets/projects/fitness.png";
import bagImage from "../../assets/projects/bag.png";
import cafeImage from "../../assets/projects/cafe.png";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <FeaturedProject />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid md:grid-cols-2 gap-8 mt-16"
      >
        <ProjectCard
          title="Portfolio Website"
          description="Modern developer portfolio built with React, Tailwind CSS and Framer Motion featuring animations and glassmorphism."
          image={portfolioImage}
          tech={["React", "Tailwind", "Framer Motion"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Fitness Advisor"
          description="Fitness recommendation platform providing workout plans, nutrition guidance and health tracking."
          image={fitnessImage}
          tech={["Python", "Flask", "SQLite"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Bag Theft Alarm"
          description="Hardware-based security system that detects bag movement and alerts users using sensors."
          image={bagImage}
          tech={["Arduino", "Sensors", "Embedded"]}
          github="#"
          demo="#"
        />

        <ProjectCard
          title="Cafe Management System"
          description="Restaurant management software supporting orders, billing, menu management and customer records."
          image={cafeImage}
          tech={["Java", "MySQL", "Swing"]}
          github="#"
          demo="#"
        />

      </motion.div>

    </section>
  );
}
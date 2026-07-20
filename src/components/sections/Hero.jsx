import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";
import profileImage from "../../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-container pt-24"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <div>
          <motion.p
            variants={fadeUp}
            className="text-aurora-cyan font-medium mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6"
          >
            Vaishnav Mapadi 🚀
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl gradient-text font-semibold mb-6"
          >
            Software Engineer & Java Backend Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg leading-8 max-w-xl mb-10"
          >
            Final Year Electrical & Computer Engineering student passionate
            about Java Backend Development, Full Stack Development, and building
            scalable software solutions. I enjoy solving real-world problems
            through clean, efficient, and user-focused applications.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-indigo font-medium hover:shadow-glow transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#Contact"
              className="px-6 py-3 rounded-xl glass-panel font-medium hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
<motion.div
  variants={fadeUp}
  className="flex justify-center lg:justify-end"
>
  <motion.div
    className="relative w-[380px] h-[380px]"
    whileHover={{
      rotateX: -8,
      rotateY: 8,
      scale: 1.05,
    }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 15,
    }}
    style={{
      transformStyle: "preserve-3d",
      perspective: 1000,
    }}
  >
    {/* Animated Glow */}
    <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-aurora-violet via-aurora-cyan to-aurora-indigo blur-3xl opacity-40 animate-pulse"></div>

    {/* Profile Image */}
    <img
      src={profileImage}
      alt="Vaishnav Mapadi"
      className="relative w-full h-full rounded-full object-cover border border-white/20 shadow-2xl"
    />
  </motion.div>
</motion.div>
</motion.div>   {/* <-- Add this */}
    </section>
  )
  }
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fadeUp, staggerContainer } from "../../lib/motionVariants";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_vaishnav",
        "template_aryrbhv",
        form.current,
        "rNb7LUhspx8GtgkgG"
      )
      .then(
        () => {
          setLoading(false);

          alert("✅ Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
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
            CONTACT
          </p>

          <h2 className="text-5xl font-bold mb-5">
            Let's Build Something
            <span className="gradient-text"> Amazing</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto leading-8">
            I'm currently looking for Software Engineering, Java Backend
            Developer, and Full Stack opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            variants={fadeUp}
            className="space-y-6"
          >

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all">
              <FaEnvelope
                size={28}
                className="text-aurora-cyan"
              />

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <a
                  href="mailto:vaishnavmapadi1604@gmail.com"
                  className="text-white/70 hover:text-aurora-cyan"
                >
                  vaishnavmapadi1604@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all">
              <FaGithub
                size={28}
                className="text-aurora-cyan"
              />

              <div>
                <h3 className="font-semibold">
                  GitHub
                </h3>

                <a
                  href="https://github.com/vaishnavmapadi45"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-aurora-cyan"
                >
                  github.com/vaishnavmapadi45
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all">
              <FaLinkedin
                size={28}
                className="text-aurora-cyan"
              />

              <div>
                <h3 className="font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://www.linkedin.com/in/vaishnav-mapadi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-aurora-cyan"
                >
                  linkedin.com/in/vaishnav-mapadi
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-5">
              <FaMapMarkerAlt
                size={28}
                className="text-aurora-cyan"
              />

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-white/70">
                  Panvel, Maharashtra, India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeUp}
            className="glass-panel rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-aurora-cyan"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-aurora-cyan"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-aurora-cyan"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none resize-none focus:border-aurora-cyan"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-aurora-violet to-aurora-cyan font-semibold hover:scale-[1.02] transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </motion.div>
    </section>
  );
}

import "../styles/experience.css";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Internship - Software Developer",
    company: "R.I.S.K",
    duration: "2025 - Present",
    description: "Working on web applications using React, TypeScript.",
  },
  {
    title: "Self-Developer",
    company: "Self-Employed",
    duration: "2024 - Present",
    description: "Developed some games using Unity and C#.",
  },
];

const Experience = () => {
  return (
    <motion.section 
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="neon-text">Experience</h1>
      
      <div className="experience-grid">
        {experienceData.map((job, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p className="duration">{job.duration}</p>
            <p className="description">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
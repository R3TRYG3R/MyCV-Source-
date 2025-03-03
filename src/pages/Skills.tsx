
import "../styles/skills.css";
import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML & CSS",
  "SQL",
  "C++",
  "C#",
  "Unity",
  "Git & GitHub"
];

const Skills = () => {
  return (
    <motion.section 
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="neon-text">My Skills</h1>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

import "../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="neon-text">About Me</h1>

      <div className="about-card">
        <p>
        Hi! My name is Ayhan, at the time of writing this text 
        I am 20 years old and I am a 3rd year student of the 
        <span className="highlight"> National Academy of Aviation</span> majoring in 
        <span className="highlight"> Computer Engineering</span>.
        I am interested in <span className="highlight"> blockchain</span>, 
        as well as improving my skills in the <span className="highlight"> frontend</span> and <span className="highlight"> backend</span> parts.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
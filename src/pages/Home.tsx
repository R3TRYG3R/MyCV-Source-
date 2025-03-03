import "../styles/home.css";
import { motion } from "framer-motion";
import avatar from "../images/avatar.png";

const Home = () => {
  return (
    <motion.section 
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="avatar-container">
        <img src= {avatar} alt="Avatar" className="avatar" />
      </div>

      <h1 className="neon-text">Welcome to My CV</h1>

      <p className="subtitle typing">Frontend Developer | React & TypeScript</p>
    </motion.section>
  );
};

export default Home;
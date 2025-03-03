import "../styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  { name: "To-Do App", link: "https://github.com/R3TRYG3R/ToDo-list-react-js/tree/main/todo_list(react%2Bjs)" },
  { name: "Login Form Example", link: "https://github.com/R3TRYG3R/LoginFormExample" },
  { name: "C# Exam Project", link: "https://github.com/R3TRYG3R/ExamProjectC" },
];

const Projects = () => {
  return (
    <motion.section 
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="neon-text">Projects</h1>
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {project.name}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
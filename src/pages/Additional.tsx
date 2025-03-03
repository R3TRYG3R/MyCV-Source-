import "../styles/additional.css";
import { motion } from "framer-motion";

const contacts = [
  { name: "Email", value: "ayxanabbasov535@gmail.com", link: "mailto:ayxanabbasov535@gmail.com" },
  { name: "GitHub", value: "github.com/R3TRYG3R", link: "https://github.com/R3TRYG3R" },
  { name: "LinkedIn", value: "linkedin.com/in/aki22/", link: "https://www.linkedin.com/in/aki22/" },
  { name: "Telegram", value: "@currleys", link: "https://t.me/currleys" },
  { name: "Instagram", value: "a.abbassovv", link: "https://www.instagram.com/a.abbassovv"}
];

const Additional = () => {
  return (
    <motion.section 
      className="additional-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="neon-text">Socials</h1>

      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <motion.a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="contact-name">{contact.name}:</span> {contact.value}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Additional;
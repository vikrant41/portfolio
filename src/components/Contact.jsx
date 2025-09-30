import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      label: 'Phone',
      value: '9913075152',
      href: 'tel:9913075152'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'vikrantmofficial@gmail.com',
      href: 'mailto:vikrantmofficial@gmail.com'
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      value: 'View Profile',
      href: 'https://www.linkedin.com/in/vikrant-mishra-54a776276'
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-yellow neon-text-yellow">
            // TRANSMIT_SIGNAL
          </h2>
          <div className="section-divider w-48"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-lg p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg group"
              >
                <div className="text-nebula group-hover:text-yellow transition-colors duration-300 mb-4 flex justify-center">
                  {contact.icon}
                </div>
                <h4 className="text-white font-semibold mb-1 font-orbitron">
                  {contact.label}
                </h4>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 text-xs tracking-widest">
            VIKRANT MISHRA | SYSTEMS LOG | STAR DATE 2025
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
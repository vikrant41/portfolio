import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Vikrant_Mishra_Resume.pdf';
    link.download = 'Vikrant_Mishra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-yellow neon-text-yellow">
            // DOWNLOAD_DOSSIER
          </h2>
          <div className="section-divider w-48"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-lg p-8 md:p-12 text-center"
        >
          <p className="text-lg text-gray-300 mb-8">
            Access the complete dossier of my professional experience, skills, and qualifications.
          </p>
          <button
            onClick={handleDownload}
            className="mission-button inline-flex items-center"
          >
            <Download className="mr-3 h-5 w-5" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
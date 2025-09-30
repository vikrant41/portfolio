import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const certifications = [
    'Docker Foundation Professional Certificate',
    'AWS Cloud Practitioner Assessment',
    'Hardware & Network engineer'
  ];

  const education = [
    {
      degree: 'Bachelor of Science, IT',
      institution: 'Lovely Professional University',
      period: 'July 2025'
    },
    {
      degree: 'Advance Diploma, Cyber Security',
      institution: 'Surat',
      period: 'July 2023'
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-yellow neon-text-yellow">
            // ACADEMIC_MODULES
          </h2>
          <div className="section-divider w-48"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-nebula mb-6 flex items-center font-orbitron">
              <Award className="w-6 h-6 mr-3" />
              CERTIFICATIONS
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow mr-2">›</span> {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-nebula mb-6 flex items-center font-orbitron">
              <GraduationCap className="w-6 h-6 mr-3" />
              EDUCATION
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-yellow text-xs">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
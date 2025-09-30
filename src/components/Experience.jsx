import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'System Administrator | DevOps',
      company: 'Toshal Infotech Pvt Ltd',
      period: 'Sep 2024 - July 2025',
      highlights: [
        'Integrated Docker/Jenkins for deployment.',
        'Extensive AWS utilization.',
        'Administered Proxmox virtualization.'
      ]
    },
    {
      title: 'IT Executive',
      company: 'Jainam Broking Ltd',
      period: 'Sep 2023 - July 2024',
      highlights: [
        'Managed physical/virtual servers (high availability).',
        'Deployed desktop virtualization (VMware, VirtualBox).'
      ]
    },
    {
      title: 'Hardware & Network Engineer',
      company: 'Epson Service Center',
      period: 'Sep 2021 - Sep 2023',
      highlights: [
        'Provided technical support and troubleshooting (desktops, laptops).',
        'Installed/maintained OS (Windows, Linux).',
        'Virtualization experience (VMware, Hyper-V).'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-yellow neon-text-yellow">
            // FLIGHT_LOGS (4 YEARS)
          </h2>
          <div className="section-divider w-48"></div>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="glass-effect rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-nebula font-orbitron mb-2 sm:mb-0">
                    {exp.title}
                  </h3>
                  <div className="text-gray-400 text-sm font-mono">{exp.period}</div>
                </div>
                <div className="text-yellow mb-4">{exp.company}</div>
                
                <ul className="space-y-2 text-sm">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-nebula mr-2">›</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
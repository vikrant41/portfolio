import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-yellow neon-text-yellow">
            // MISSION_PROFILE
          </h2>
          <div className="section-divider w-48"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <img 
                className="w-full max-w-xs mx-auto rounded-full border-4 border-nebula glow-nebula" 
                alt="Vikrant Mishra in a suit, looking up with smoke effect"
               src="https://horizons-cdn.hostinger.com/785b8826-f880-4267-b2f4-6fde56f60202/04487223f3a5e988e543986b4f272cc0.jpg" />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-gray-300">
                Dynamic System Administrator with extensive experience at{' '}
                <span className="text-nebula font-semibold">Toshal Infotech</span>, specializing in{' '}
                <span className="text-yellow font-semibold">AWS Cloud</span> and DevOps automation. 
                A proven operator in enhancing IT infrastructure and security, managing virtualization, and driving operational efficiency. 
                Committed to mission success through robust troubleshooting and scripting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
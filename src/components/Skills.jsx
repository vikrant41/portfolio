import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Container, Activity, Shield, Terminal } from 'lucide-react';

const SkillCard = ({ title, icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05, rotateX: 10, rotateY: 5 }}
      className="skill-card rounded-lg p-6 group cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <div className="text-nebula group-hover:text-yellow transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold ml-4 font-orbitron text-white group-hover:text-nebula transition-colors duration-300">
          {title}
        </h3>
      </div>
      <ul className="space-y-2 text-sm">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="text-gray-300 group-hover:text-white transition-colors duration-300">
            › {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Virtualization',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS (EC2, S3, VPC, IAM, RDS, ECS)', 'CloudWatch, Route 53, Load Balancer', 'Azure', 'Proxmox', 'VMware', 'VirtualBox']
    },
    {
      title: 'DevOps & CI/CD',
      icon: <Container className="w-8 h-8" />,
      skills: ['Docker', 'Jenkins', 'Maven', 'Git (Admin)', 'Vagrant']
    },
    {
      title: 'Monitoring & Infra',
      icon: <Activity className="w-8 h-8" />,
      skills: ['Prometheus', 'Grafana', 'Nginx', 'Apache', 'DNS', 'DHCP', 'Snipe-IT']
    },
    {
      title: 'Networking & Security',
      icon: <Shield className="w-8 h-8" />,
      skills: ['SonicWall Firewall', 'Sophos Firewall', 'VPN for RDP users']
    },
    {
      title: 'OS & Scripting',
      icon: <Terminal className="w-8 h-8" />,
      skills: ['Linux Administration', 'Bash Scripting', 'Windows Server', 'AI-based Scripting Tools']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-yellow neon-text-yellow">
            // STARDOCK_INVENTORY
          </h2>
          <div className="section-divider w-48"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
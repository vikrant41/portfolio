import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Profile',
    href: '#about'
  }, {
    name: 'Inventory',
    href: '#skills'
  }, {
    name: 'Logs',
    href: '#experience'
  }, {
    name: 'Training',
    href: '#education'
  }, {
    name: 'Resume',
    href: '#resume'
  }, {
    name: 'Transmit',
    href: '#contact'
  }];
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#')}>
            <div className="text-yellow font-orbitron font-bold text-2xl flex items-center">
              <span className="text-4xl neon-text-yellow">VM</span>
              <div className="ml-2 flex flex-col space-y-1">
                <div className="w-6 h-0.5 bg-yellow"></div>
                <div className="w-4 h-0.5 bg-yellow ml-2"></div>
                <div className="w-2 h-0.5 bg-yellow ml-4"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-white hover:text-nebula transition-colors duration-300 font-orbitron text-sm uppercase tracking-wider">
                  {item.name}
                </button>)}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-nebula transition-colors duration-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden glass-effect mt-2 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-white hover:text-nebula transition-colors duration-300 font-orbitron text-sm uppercase tracking-wider">
                  {item.name}
                </button>)}
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-soft py-4 border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold text-text tracking-tight group">
          SAAD<span className="text-primary group-hover:text-secondary transition-colors">.DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-primary transition-colors font-semibold text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={openEmail}
            className="px-6 py-2.5 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all flex items-center shadow-soft hover:shadow-hover"
          >
            Hire Me <ArrowRight size={18} className="ml-2" />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 space-y-8 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text hover:text-primary text-xl font-bold transition-colors tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { setIsOpen(false); openEmail(); }}
                className="w-full max-w-xs px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all flex items-center justify-center shadow-soft"
              >
                Hire Me <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const openEmail = () => {
  const email = "muhammadsaadhasan622@gmail.com";
  const subjects = [
    "Project Inquiry – Let's Work Together",
    "Hiring Opportunity | Portfolio Contact",
    "Business Collaboration Request",
    "New Project Discussion",
    "Freelance / Full‑Time Opportunity"
  ];

  const messages = [
    "Hello Saad,\n\nI came across your portfolio and would like to discuss a potential project with you.\n\nBest regards,",
    "Hi Saad,\n\nYour work looks impressive. I’m interested in collaborating with you on an upcoming project.\n\nThanks,",
    "Hello Muhammad Saad,\n\nI reviewed your portfolio and would love to connect regarding a professional opportunity.\n\nRegards,"
  ];

  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  let body = messages[Math.floor(Math.random() * messages.length)];
  const projectName = "Portfolio by Saad Hasan";
  body += `\n\n---\nProject Source: ${projectName}`;

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
};

export default Navbar;

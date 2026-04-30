import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform origin-top-right translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            Full Stack Developer
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-text leading-[1.1] mb-6">
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-primary">
              Muhammad Saad Hasan
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            A results-driven <strong>Full Stack Developer</strong> specializing in <strong>React</strong>, <strong>Laravel</strong>, and <strong>Django</strong>. I build high-performance <strong>eCommerce websites</strong> and seamless <strong>Shopify API integrations</strong> to scale your business.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center md:justify-start">
            <button
              onClick={openEmail}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all flex items-center justify-center shadow-soft hover:shadow-hover transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Hire Me <ArrowRight size={18} className="ml-2" />
            </button>


            <a 
              href="/Saad-CV.pdf" 
              download="Saad-Hasan-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-200 text-text rounded-full font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center bg-white shadow-soft text-sm sm:text-base"
            >
              Download CV <Download size={18} className="ml-2" />
            </a>
          </div>

          <div className="mt-8 sm:mt-12 flex items-center space-x-6 justify-center md:justify-start">
            <a href="https://github.com/saad163" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-all transform hover:scale-110"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/muhammad-saad-hasan-7228b2377/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-all transform hover:scale-110"><Linkedin size={22} /></a>
            <div
              onClick={openEmail}
              className="text-muted hover:text-primary transition-all transform hover:scale-110 cursor-pointer"
            >
              <Mail size={22} />
            </div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-square">
            <div className="absolute inset-0 border border-slate-200 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}></div>
            <div className="absolute inset-8 border border-slate-100 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 sm:border-8 border-white shadow-hover bg-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/saad (3).jpg"
                alt="Muhammad Saad Hasan"
                className="w-full h-full object-cover -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-hover border border-slate-50 z-20">
              <div className="text-primary text-2xl sm:text-3xl font-bold">2+</div>
              <div className="text-muted text-[10px] sm:text-xs font-bold uppercase tracking-wider">Years of Exp.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
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

export default Hero;

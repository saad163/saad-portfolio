import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    company: "Blue Cascade",
    role: "Software Engineer",
    duration: "Oct 2025 - Present",
    description: "Spearheading the development of robust, scalable web solutions. Architecting full-stack systems using React and Laravel while ensuring seamless user experiences through optimized code.",
  },
  {
    company: "SparkoSOL",
    role: "Full-Stack Developer",
    duration: "July 2025 - Aug 2025",
    description: "Collaborated on end-to-end web development cycles. Integrated Django backend logic with custom React frontend designs, enhancing system performance and responsiveness.",
  },
  {
    company: "Extreme Commerce",
    role: "Trainee AI/ML Engineer",
    duration: "May 2025 - Oct 2025",
    description: "Focused on integrating Machine Learning models into web platforms. Explored advanced AI libraries and data processing techniques for predictive analytics.",
  },
  {
    company: "Marketing Booster",
    role: "Intern AI/ML Engineer",
    duration: "Feb 2025 - June 2025",
    description: "Contributed to AI model training and data visualization projects. Assisted in developing Python-based automation tools for data analysis.",
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Career Trajectory</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mt-4">Professional Experience</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 mb-12 md:mb-16 group last:mb-0">

              {/* Timeline Connector - Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-64px] w-px bg-slate-200 -translate-x-1/2 group-last:bottom-0"></div>

              {/* Mobile Timeline Connector */}
              <div className="md:hidden absolute left-[11px] top-0 bottom-[-48px] w-px bg-slate-200 group-last:bottom-0"></div>

              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Center Node */}
                <div className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full border-4 border-white bg-primary z-20 shadow-soft group-hover:scale-125 transition-transform duration-300"></div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-[45%] relative"
                >
                  <div className="bg-surface border border-slate-50 rounded-2xl p-6 md:p-8 hover:shadow-hover transition-all duration-300 shadow-soft group-hover:border-blue-100">
                    <div className="flex flex-col mb-4">
                      <span className="text-primary font-bold text-xs mb-2 tracking-widest uppercase flex items-center">
                        <Calendar size={14} className="mr-2" /> {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors font-heading">{exp.company}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.role}</p>
                    </div>

                    <p className="text-muted text-sm leading-relaxed border-t border-slate-50 pt-4">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Globe, Server, Terminal, GraduationCap, BookOpen, User, Sparkles, Cpu } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Globe size={40} />,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
    description: "Expert React Developer crafting high-performance, responsive user interfaces."
  },
  {
    title: "Backend Development",
    icon: <Server size={40} />,
    skills: ["Laravel", "Django", "Python", "Node.js", "PHP"],
    description: "Experienced Backend Developer building robust server-side architectures."
  },
  {
    title: "Database Management",
    icon: <Database size={40} />,
    skills: ["MySQL", "PostgreSQL", "SQLite", "Database Design"],
    description: "Managing secure and scalable data storage with optimized queries."
  },
  {
    title: "APIs & Integrations",
    icon: <Terminal size={40} />,
    skills: ["REST APIs", "Shopify API Integration", "Payment Gateways", "Third-party APIs"],
    description: "Specializing in Shopify API integrations and custom REST API development."
  },
  {
    title: "eCommerce & Tools",
    icon: <Sparkles size={40} />,
    skills: ["eCommerce Development", "Git", "Docker", "VS Code", "Postman", "AI/ML Tools"],
    description: "Delivering end-to-end eCommerce solutions and modern development workflows."
  }
];

const educationData = [
  {
    title: "BS Computer Science",
    institution: "Times University Multan",
    description: "Specialized in Software Engineering, Data Structures, and AI. Completed capstone project on intelligent healthcare systems.",
    year: "2021-2025"
  },
  {
    title: "FSc (Pre-Engineering)",
    institution: "Al-Falah HSS AliPur",
    description: "Focused on Mathematics, Physics, and Computer Science fundamentals, laying the groundwork for engineering analysis.",
    year: "2019-2021"
  }
];

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-50 flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {category.icon}
      </div>

      <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
        {category.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
        {category.skills.slice(0, 3).map((skill, i) => (
          <span key={i} className="text-[10px] font-bold text-muted uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const EducationCard: React.FC<{ edu: typeof educationData[0]; index: number }> = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-soft border border-slate-50 flex flex-col md:flex-row gap-6 items-start"
    >
      <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0">
        <GraduationCap size={32} />
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-text">{edu.title}</h3>
          <span className="text-primary font-bold text-sm bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0 md:ml-4">
            {edu.year}
          </span>
        </div>
        <p className="text-primary font-semibold mb-3">{edu.institution}</p>
        <p className="text-muted text-sm leading-relaxed">
          {edu.description}
        </p>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Bio Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative max-w-md lg:max-w-none"
          >
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-hover z-10 aspect-[4/5] border-4 sm:border-8 border-white">
              <img
                src="/images/saad (2).jpg"
                alt="Muhammad Saad Hasan"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-soft border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] sm:text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Current Role</p>
                    <p className="text-base sm:text-lg font-heading font-bold text-text">Software Engineer</p>
                    <p className="text-xs sm:text-sm text-primary font-semibold">at Blue Cascade</p>
                  </div>
                  <div className="bg-primary text-white p-2 sm:p-3 rounded-full shadow-soft">
                    <User size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-48 h-48 sm:w-60 sm:h-60 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <span className="h-1 w-10 bg-primary rounded-full hidden sm:block"></span>
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text mb-6 sm:mb-8 leading-tight">
              Engineering <span className="text-primary">Intelligent</span> Solutions
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              Hello! I'm <strong>Muhammad Saad Hasan</strong>, a dedicated <strong>Full Stack Developer</strong> and <strong>eCommerce Website Developer</strong>. I specialize in building complex, high-conversion digital experiences that bridge the gap between robust backend logic and intuitive frontend design.
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed mb-10">
              With over 2 years of professional experience, I have mastered the art of <strong>Laravel Development</strong> and <strong>Django Development</strong> for scalable backends, while excelling as a <strong>React Developer</strong> for modern frontends. My expertise extends to <strong>Shopify API Integration</strong>, REST API development, and creating intelligent solutions using Python tools.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-slate-100 max-w-sm mx-auto lg:mx-0">
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-primary mb-1">10+</h4>
                <p className="text-[10px] sm:text-xs text-muted uppercase font-bold tracking-widest">Live Projects</p>
              </div>
              <div>
                <h4 className="text-3xl sm:text-4xl font-bold text-primary mb-1">2+</h4>
                <p className="text-[10px] sm:text-xs text-muted uppercase font-bold tracking-widest">Years Exp.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Arsenal */}
        <div className="mb-20 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text mt-3">Technical Arsenal</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>

        {/* Education History */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
             <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-primary rounded-2xl mb-6">
                <GraduationCap size={32} />
             </div>
             <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text">Education History</h3>
             <p className="text-muted text-sm sm:text-base mt-3">My academic journey and qualifications</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {educationData.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
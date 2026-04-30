import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const projectData: Project[] = [
  {
    title: "Color Lab Tool | Color Picker & Image Color Extractor",
    description: "A web-based tool that allows developers and designers to pick colors, generate HEX/RGB codes, copy them instantly, and extract color palettes from images. It also supports custom color generation.",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    imageUrl: "/images/project-6.png",
    githubLink: "https://github.com/saad163",
    liveLink: "https://colorlab-by-saad.netlify.app/"
  },
  {
    title: "Zamane Watch Store | Full Stack eCommerce Application",
    description: "Built a full stack eCommerce application using React frontend and Laravel backend with product management and responsive UI",
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    imageUrl: "/images/project-1.png", // Reusing existing image paths if possible, or just keeping the structure
    githubLink: "https://github.com/saad163",
    liveLink: "https://zamane-watch-store.netlify.app/"
  },
  {
    title: "BloodLink – AI Blood Donation",
    description: "A comprehensive donation system featuring donor matching, email/WhatsApp alerts, map integration, and an AI-powered recommendation engine with a custom chatbot.",
    techStack: ["Django", "Python", "MySQL", "AI/ML", "Google Maps API"],
    imageUrl: "/images/project-1.png",
    githubLink: "https://github.com/saad163",
    liveLink: "#"
  },
  {
    title: "Network Monitoring System",
    description: "Real-time monitoring of network devices and locations. Visualizes network topology and status to ensure uptime and performance efficiency.",
    techStack: ["Django", "GNS3", "HTML/CSS", "Python"],
    imageUrl: "/images/project-2.png",
    githubLink: "https://github.com/saad163",
    liveLink: "#"
  },
  {
    title: "Breast Cancer Detection",
    description: "A machine learning application providing segmentation, localization, and clinical report generation for early cancer detection.",
    techStack: ["Python", "ML Libraries", "Image Processing"],
    imageUrl: "/images/project-3.png",
    githubLink: "https://github.com/saad163",
    liveLink: "#"
  },
  {
    title: "Service Chatbot",
    description: "An intelligent chatbot built with Python and ML models to provide instant service information and handle customer queries efficiently.",
    techStack: ["Python", "NLP", "Machine Learning"],
    imageUrl: "/images/project-5.png",
    githubLink: "https://github.com/saad163",
    liveLink: "#"
  },
  {
    title: "Brain Tumor Detection",
    description: "AI system for MRI-based prediction, segmentation, and automated report generation to assist medical professionals.",
    techStack: ["Deep Learning", "Python", "MRI Analysis"],
    imageUrl: "/images/project-4.png",
    githubLink: "https://github.com/saad163",
    liveLink: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100 flex flex-col h-full w-full"
    >
      <div className="w-full aspect-video overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 2).map((tech) => (
            <span key={tech} className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            title="View Code"
          >
            <Github size={20} />
          </a>
          
          <div className="flex gap-4">
             {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Live Demo <ExternalLink size={16} className="ml-1" />
                </a>
             )}
             <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-semibold text-text hover:text-primary transition-colors"
            >
              Details <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mt-3">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-20">
          <a 
            href="https://github.com/saad163" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-soft hover:shadow-hover transform hover:-translate-y-1"
          >
            View More Projects <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
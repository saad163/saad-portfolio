import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-background text-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-text">Let's Connect</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-10 rounded-2xl shadow-soft border border-slate-50 text-center flex flex-col items-center group hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl text-primary mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={28} />
              </div>

              <h4 className="text-xs font-bold text-muted uppercase tracking-[0.2em] mb-3">
                Email
              </h4>

              <p
                onClick={openEmail}
                className="text-text font-bold hover:text-primary transition-colors break-all cursor-pointer text-sm"
              >
                muhammadsaadhasan622@gmail.com
              </p>
            </div>


            <div className="bg-surface p-10 rounded-2xl shadow-soft border border-slate-50 text-center flex flex-col items-center group hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl text-primary mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-[0.2em] mb-3">Phone</h4>
              <p
                onClick={callPhone}
                className="text-text font-bold hover:text-primary transition-colors cursor-pointer"
              >
                +92 304 9781382
              </p>

            </div>

            <div className="bg-surface p-10 rounded-2xl shadow-soft border border-slate-50 text-center flex flex-col items-center group hover:shadow-hover transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl text-primary mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-[0.2em] mb-3">Location</h4>
              <p className="text-text font-bold">Multan, Pakistan</p>
            </div>
          </div>

          <div className="mt-16 text-center p-12 bg-white rounded-2xl shadow-soft border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text relative z-10">Let's build something amazing together</h3>
            <p className="text-muted mb-10 max-w-2xl mx-auto relative z-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center space-x-6 relative z-10">
              <a href="https://github.com/saad163" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-xl hover:bg-primary hover:text-white transition-all text-muted shadow-sm hover:shadow-hover"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/muhammad-saad-hasan-7228b2377/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-xl hover:bg-primary hover:text-white transition-all text-muted shadow-sm hover:shadow-hover"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/saad.here9/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-50 rounded-xl hover:bg-primary hover:text-white transition-all text-muted shadow-sm hover:shadow-hover"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 border-t border-slate-100 pt-12 text-center text-muted text-xs font-semibold tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Muhammad Saad Hasan. Designed with Passion.</p>
      </div>
    </section>
  );
};

const openEmail = () => {
  const email = "muhammadsaadhasan622@gmail.com";
  const subjects = ["Project Inquiry", "Collaboration Request", "Hiring Opportunity"];
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const body = "Hello Saad,\n\nI reviewed your portfolio and would love to connect.";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const callPhone = () => {
  window.location.href = "tel:+923049781382";
};

export default Contact;

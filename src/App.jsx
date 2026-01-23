import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, ExternalLink, Menu, X, Code, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Inventory Management System",
      description: "Learning project built by following a tutorial. Features authentication, dashboard analytics, and product management. Still learning many of the concepts used.",
      tech: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Redux Toolkit"],
      github: "https://github.com/Rahul1-design",
      
      featured: true
    },
    {
      title: "Anonymous Messaging App",
      description: "Full-stack platform enabling users to create accounts and receive anonymous messages. Secure authentication and real-time messaging capabilities.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth"],
      github: "https://github.com/Rahul1-design",
      featured: true
    },
    {
      title: "ImageKit Video Shop",
      description: "Modern video content management and sales platform with user authentication, video uploads, and payment processing integration.",
      tech: ["Next.js", "ImageKit", "Razorpay", "Authentication"],
      github: "https://github.com/Rahul1-design",
      featured: true
    },
    {
      title: "SaaS Landing Page",
      description: "Modern, responsive SaaS landing page built with mobile-first principles. Clean design with smooth animations and optimal user experience.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/Rahul1-design",
      featured: true
    },
    {
      title: "Weather App",
      description: "Responsive weather application fetching real-time data from OpenWeatherMap API. Displays temperature, conditions, humidity, and wind speed with elegant UI.",
      tech: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
      github: "https://github.com/Rahul1-design"
    },
    {
      title: "Todo List Application",
      description: "Clean todo app with add, edit, delete, and completion features. Implements localStorage for data persistence and task filtering.",
      tech: ["React", "Vite", "Tailwind CSS", "localStorage"],
      github: "https://github.com/Rahul1-design"
    },
    {
      title: "Spotify Clone",
      description: "Web player clone with dynamic song loading, play/pause controls, track navigation, real-time seek bar, and responsive playlist UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rahul1-design"
    },
    {
      title: "Twitter UI Clone",
      description: "Clean interface clone focusing on design and layout. Practice project for Tailwind utility classes and responsive modern UI styling.",
      tech: ["HTML", "Tailwind CSS"],
      github: "https://github.com/Rahul1-design"
    }
  ];

  const skills = {
    "Frontend": ["HTML/CSS", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"],
    "Learning": ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    "Familiar With": ["Git/GitHub", "Vite", "Prisma", "Redux Toolkit", "NextAuth", "REST APIs"]
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl shadow-purple-500/50 mx-auto">
              <img src="/me.jpg" alt="Rahul Shrestha" className="w-full  h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-900"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Rahul Shrestha
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Aspiring Full-Stack Developer | Learning & Building
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Self-taught developer from Kathmandu, Nepal, learning web development through hands-on projects. Building with React, Next.js, and exploring full-stack technologies while continuously improving my skills.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/Rahul1-design" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rahul-shrestha-3905a2395" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://www.instagram.com/rahulstha21/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://www.facebook.com/rahul.shrestha.374251" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a beginner developer based in Kapan, Kathmandu, Nepal, learning web development by building projects and following tutorials. I'm passionate about coding and committed to improving my skills every day.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I've worked with technologies like React, Next.js, Node.js, MongoDB, and PostgreSQL by following tutorials and building practice projects. While I'm still learning and often need to revisit concepts, each project helps me understand web development better.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm looking for opportunities to gain real-world experience, learn from experienced developers, and grow my skills. I'm honest about what I know and what I'm still learning, and I'm eager to take on challenges that will help me become a better developer.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-center text-gray-400 mb-12">Projects I've built while learning web development (many from tutorials)</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 ${project.featured ? 'md:col-span-1' : ''}`}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 text-yellow-400 mb-3">
                    <Sparkles size={20} />
                    <span className="text-sm font-semibold">Featured Project</span>
                  </div>
                )}
                {project.note && (
                  <p className="text-sm text-gray-500 italic mb-3">{project.note}</p>
                )}
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github size={20} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-purple-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold text-purple-300">{category}</h3>
                </div>
                <div className="space-y-3">
                  {items.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <p className="text-center text-lg text-gray-300 mb-8">
              I'm actively looking for internship or junior developer opportunities where I can learn and grow. I'm honest about my current skill level and excited to work with experienced developers who can mentor me.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:rahulshrestha3132@gmail.com" className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-xl hover:bg-purple-500/20 transition-all">
                <Mail className="text-purple-400" size={32} />
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-purple-300 text-center break-all">rahulshrestha3132@gmail.com</span>
              </a>
              
              <a href="tel:+9779803799417" className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-xl hover:bg-purple-500/20 transition-all">
                <Phone className="text-purple-400" size={32} />
                <span className="text-sm text-gray-400">Phone</span>
                <span className="text-purple-300">+977 9803799417</span>
              </a>
              
              <div className="flex flex-col items-center gap-3 p-6 bg-purple-500/10 rounded-xl">
                <MapPin className="text-purple-400" size={32} />
                <span className="text-sm text-gray-400">Location</span>
                <span className="text-purple-300 text-center">Kapan, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Rahul Shrestha. Built with React & Tailwind CSS</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/Rahul1-design" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rahul-shrestha-3905a2395" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/rahulstha21/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
import React, { useState } from 'react';
import {
  Home,
  User,
  FolderOpen,
  Settings,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Database,
  Send,
  CheckCircle
} from 'lucide-react';

// Custom Logo Component
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">GA</span>
      </div>
      <span className="text-xl font-bold text-gray-800">Gabriella Agyarko</span>
    </div>
  );
}

// Navigation Component
function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={e => setCurrentPage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1"
            >
              {navItems.map(({ id, label }) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Home Page Component
function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer dedicated to creating innovative digital solutions 
            that make a difference. Let's build something amazing together.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission Statement</h2>
            <p className="text-gray-700 leading-relaxed">
              To leverage cutting-edge technology and creative problem-solving to develop scalable, 
              user-centric applications that drive business success and enhance user experiences. 
              I believe in continuous learning, collaborative development, and delivering excellence 
              in every project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
            >
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Me Page Component
function AboutMePage() {
  const handleResumeDownload = () => {
    alert('Resume download would start here. Please add your actual PDF link.');
    // Example for actual download:
    // const link = document.createElement('a');
    // link.href = '/path/to/your/resume.pdf';
    // link.download = 'Gabriella_Agyarko_Resume.pdf';
    // link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                <User size={80} className="text-white" />
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Gabriella Agyarko</h1>
              <h2 className="text-xl text-blue-600 mb-6">Full-Stack Developer</h2>
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="mb-4">
                  Hello! I'm Gabriella Agyarko, a passionate full-stack developer with over 5 years of experience 
                  creating innovative web and mobile applications. I specialize in React, Node.js, and 
                  modern web technologies, with a keen eye for user experience and clean, maintainable code.
                </p>
                <p className="mb-4">
                  My journey in software development began during my Computer Science studies, where I 
                  discovered my love for solving complex problems through code. Since then, I've worked 
                  with startups and established companies, helping them bring their digital visions to life.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge through blog posts and mentoring fellow developers.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <button 
                  onClick={handleResumeDownload}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Projects Page Component
function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with React, Node.js, and MongoDB. Implemented secure payment processing, inventory management, and real-time order tracking.",
      role: "Lead Full-Stack Developer",
      outcome: "Increased client sales by 40% and reduced cart abandonment by 25%",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Developed a collaborative project management tool with real-time updates, file sharing, and team communication features using React and Firebase.",
      role: "Frontend Developer & UI/UX Designer",
      outcome: "Improved team productivity by 35% and adopted by 500+ users",
      tech: ["React", "Firebase", "Material-UI", "WebSocket"],
      image: "📋"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Created an interactive weather analytics platform with data visualization, historical trends, and predictive modeling using Python and React.",
      role: "Full-Stack Developer & Data Analyst",
      outcome: "Processed 1M+ data points daily with 99.9% accuracy",
      tech: ["React", "Python", "D3.js", "PostgreSQL"],
      image: "🌤️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">A showcase of my recent work and achievements</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">My Role:</h4>
                  <p className="text-sm text-gray-600">{project.role}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Outcome:</h4>
                  <p className="text-sm text-green-600">{project.outcome}</p>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Services Page Component
function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular. Responsive design and optimal performance guaranteed.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Deployment"]
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development services from concept to deployment, including architecture design and cloud integration.",
      features: ["System Architecture", "Cloud Deployment", "DevOps Setup", "Maintenance & Support"]
    },
    {
      icon: Database,
      title: "Database & API Design",
      description: "Efficient database design and RESTful API development for scalable and secure data management.",
      features: ["Database Design", "REST APIs", "GraphQL", "Data Migration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Services</h1>
          <p className="text-xl text-gray-600">Comprehensive development solutions for your digital needs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail size={24} className="mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>gabriella.agyarko@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={24} className="mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={24} className="mr-4" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>New York, NY, USA</p>
                </div>
              </div>
              <div className="flex items-center">
                <Github size={24} className="mr-4" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p>github.com/gabriellaagyarko</p>
                </div>
              </div>
              <div className="flex items-center">
                <Linkedin size={24} className="mr-4" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p>linkedin.com/in/gabriellaagyarko</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Message sent successfully! Thank you for reaching out.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutMePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;

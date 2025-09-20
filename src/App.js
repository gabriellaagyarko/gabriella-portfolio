import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AboutPage from './components/AboutPage';
import './App.css';

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-sm sm:text-lg">GA</span>
    </div>
    <span className="text-lg sm:text-xl font-bold text-gray-800 truncate">Gabriella Agyarko</span>
  </div>
);

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center min-h-16 py-2">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex-shrink-0"
          >
            {isMenuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Gabriella</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
          A passionate full-stack developer creating beautiful, functional, and user-centered digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
            View My Work
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors w-full sm:w-auto">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Services Page Component
const ServicesPage = () => {
  // Services data array
  const services = [
    {
      icon: () => <span className="text-2xl">💻</span>,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular. Responsive design and optimal performance guaranteed.",
      features: [
        "Frontend Development",
        "Backend APIs",
        "Database Design",
        "Performance Optimization",
        "SEO Implementation",
        "Cross-browser Compatibility"
      ],
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Express", "Next.js"],
      pricing: "Starting at $3,000",
      timeline: "2-8 weeks"
    },
    {
      icon: () => <span className="text-2xl">📱</span>,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
      pricing: "Starting at $5,000",
      timeline: "4-12 weeks"
    },
    {
      icon: () => <span className="text-2xl">🌐</span>,
      title: "Full-Stack Solutions",
      description: "End-to-end development services from concept to deployment, including architecture design and cloud integration.",
      features: [
        "System Architecture",
        "Cloud Deployment",
        "DevOps Setup",
        "Maintenance & Support",
        "Scalability Planning",
        "Security Implementation"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Microservices", "MongoDB"],
      pricing: "Starting at $8,000",
      timeline: "6-16 weeks"
    },
    {
      icon: () => <span className="text-2xl">🗄️</span>,
      title: "Database & API Design",
      description: "Efficient database design and RESTful API development for scalable and secure data management.",
      features: [
        "Database Design",
        "REST APIs",
        "GraphQL",
        "Data Migration",
        "Performance Tuning",
        "Security Auditing"
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST", "Prisma"],
      pricing: "Starting at $2,500",
      timeline: "2-6 weeks"
    }
  ];

  // Additional service highlights
  const highlights = [
    {
      icon: () => <span className="text-2xl">⚡</span>,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: () => <span className="text-2xl">🛡️</span>,
      title: "Secure Code",
      description: "Security-first approach in all development processes"
    },
    {
      icon: () => <span className="text-2xl">👥</span>,
      title: "Collaborative",
      description: "Regular updates and client involvement throughout"
    },
    {
      icon: () => <span className="text-2xl">🏆</span>,
      title: "Quality Assured",
      description: "Rigorous testing and code review processes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development solutions for your digital needs. From concept to deployment, 
            I provide end-to-end services that help businesses thrive in the digital landscape.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Service Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center">
                        🕒 {service.timeline}
                      </span>
                      <span>{service.pricing}</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Service Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-green-500 mr-3 flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Action */}
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Quote
                </button>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">My Development Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your needs and requirements" },
              { step: "2", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
              { step: "3", title: "Development", desc: "Building your solution with regular updates" },
              { step: "4", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with React, Node.js, and MongoDB. Implemented secure payment processing, inventory management, and real-time order tracking.",
      role: "Lead Full-Stack Developer",
      outcome: "Increased client sales by 40% and reduced cart abandonment by 25%",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js", "JWT Authentication"],
      image: "🛒", // Replace with actual image path
      liveLink: "#", // Add actual project links
      githubLink: "#",
      duration: "3 months",
      teamSize: "4 developers"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Developed a collaborative project management tool with real-time updates, file sharing, and team communication features using React and Firebase.",
      role: "Frontend Developer & UI/UX Designer",
      outcome: "Improved team productivity by 35% and adopted by 500+ users",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket", "Redux", "PWA"],
      image: "📋", // Replace with actual image path
      liveLink: "#",
      githubLink: "#",
      duration: "4 months",
      teamSize: "Solo project"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Created an interactive weather analytics platform with data visualization, historical trends, and predictive modeling using Python and React.",
      role: "Full-Stack Developer & Data Analyst",
      outcome: "Processed 1M+ data points daily with 99.9% accuracy",
      technologies: ["React", "Python", "D3.js", "PostgreSQL", "Flask", "Chart.js"],
      image: "🌤️", // Replace with actual image path
      liveLink: "#",
      githubLink: "#",
      duration: "2 months",
      teamSize: "2 developers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and achievements. Each project represents a unique 
            challenge and demonstrates different aspects of my technical expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                <span className="text-6xl">{project.image}</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* My Role */}
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">My Role:</h4>
                  <p className="text-sm text-gray-600">{project.role}</p>
                </div>
                
                {/* Project Outcome */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">Outcome:</h4>
                  <p className="text-sm text-green-600 font-medium">{project.outcome}</p>
                </div>

                {/* Project Details */}
                <div className="mb-4 text-xs text-gray-500">
                  <span className="mr-4">Duration: {project.duration}</span>
                  <span>Team: {project.teamSize}</span>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">🔗</span>
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">💻</span>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-6">
              These projects represent just a portion of my experience. I'm always excited to take on new challenges 
              and collaborate on innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View All Projects
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          budget: '',
          timeline: ''
        });
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  // Contact information data
  const contactInfo = [
    {
      icon: () => <span className="text-2xl">📧</span>,
      title: "Email",
      value: "gabriella.agyarko@example.com",
      description: "Send me an email anytime!"
    },
    {
      icon: () => <span className="text-2xl">📞</span>,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST"
    },
    {
      icon: () => <span className="text-2xl">📍</span>,
      title: "Location",
      value: "New York, NY, USA",
      description: "Available for remote work worldwide"
    },
    {
      icon: () => <span className="text-2xl">💬</span>,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly"
    }
  ];

  // Social links
  const socialLinks = [
    {
      icon: () => <span className="text-2xl">💻</span>,
      name: "GitHub",
      url: "https://github.com/gabriellaagyarko",
      username: "@gabriellaagyarko"
    },
    {
      icon: () => <span className="text-2xl">💼</span>,
      name: "LinkedIn",
      url: "https://linkedin.com/in/gabriellaagyarko",
      username: "Gabriella Agyarko"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-blue-600 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <IconComponent />
                        <div>
                          <p className="font-medium">{social.name}</p>
                          <p className="text-sm">{social.username}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <span className="mr-2">✅</span>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-plus-months">3+ months</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-white font-semibold transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">⏳</span> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <span className="mr-2">📤</span> Send Message
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;

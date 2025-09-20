// src/pages/ProjectsPage.js
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce solution with React, Node.js, and MongoDB. Implemented secure payment processing, inventory management, and real-time order tracking.",
    role: "Lead Full-Stack Developer",
    outcome: "Increased client sales by 40% and reduced cart abandonment by 25%",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js", "JWT Authentication"],
    image: "🛒",
    liveLink: "#",
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
    image: "📋",
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
    image: "🌤️",
    liveLink: "#",
    githubLink: "#",
    duration: "2 months",
    teamSize: "2 developers"
  }
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and achievements. Each project represents a unique 
            challenge and demonstrates different aspects of my technical expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">My Role:</h4>
                  <p className="text-sm text-gray-600">{project.role}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">Outcome:</h4>
                  <p className="text-sm text-green-600 font-medium">{project.outcome}</p>
                </div>
                <div className="mb-4 text-xs text-gray-500">
                  <span className="mr-4">Duration: {project.duration}</span>
                  <span>Team: {project.teamSize}</span>
                </div>
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
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
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
}

export default ProjectsPage;

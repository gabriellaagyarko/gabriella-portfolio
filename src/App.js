import React, { useState } from 'react';
import {
  Home,
  User,
  FolderOpen,
  Settings,
  Mail
} from 'lucide-react';

// Import all page components from the components folder
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import ContactPage from './components/contact-page.jsx';

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
function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'services', label: 'Services', icon: Settings },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-900 shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
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
              className="border-2 border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
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

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
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
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
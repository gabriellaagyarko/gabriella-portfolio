import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AboutPage from './components/AboutPage.jsx';
import ServicesPage from './components/services-page.jsx';
import ProjectsPage from './components/projects-page.jsx';
import ContactPage from './components/contact-page.jsx';
import HomePage from './components/home-page.jsx';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
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
      <header>
        <nav>
          <ul>
            <li onClick={() => setCurrentPage('home')}>Home</li>
            <li onClick={() => setCurrentPage('about')}>About</li>
            <li onClick={() => setCurrentPage('services')}>Services</li>
            <li onClick={() => setCurrentPage('projects')}>Projects</li>
            <li onClick={() => setCurrentPage('contact')}>Contact</li>
          </ul>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;

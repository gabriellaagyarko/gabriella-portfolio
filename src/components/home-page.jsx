// HomePage.js - Home Page Component
import React from 'react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          {/* Main Heading */}
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            Welcome to My
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative"> Portfolio</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            I'm a passionate Full-Stack Developer dedicated to creating innovative digital solutions 
            that make a difference. Let's build something amazing together.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex justify-center gap-x-6">
            <button
              onClick={() => setCurrentPage('projects')}
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            >
              View My Work
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Mission Statement
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              To leverage cutting-edge technology and creative problem-solving to develop scalable, 
              user-centric applications that drive business success and enhance user experiences. 
              I believe in continuous learning, collaborative development, and delivering excellence 
              in every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
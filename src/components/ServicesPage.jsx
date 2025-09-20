import React from 'react';
import { Code, Smartphone, Globe, Database, CheckCircle } from 'lucide-react';

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

export default ServicesPage;
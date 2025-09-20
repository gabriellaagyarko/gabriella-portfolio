import React from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      description: "Full-stack web applications using React, Node.js, and modern frameworks for scalable solutions"
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile Development", 
      description: "Cross-platform mobile applications with React Native and native iOS/Android development"
    },
    {
      icon: <Globe size={48} />,
      title: "API Development",
      description: "RESTful APIs and GraphQL services with robust authentication and data management"
    },
    {
      icon: <Database size={48} />,
      title: "Database Design",
      description: "Efficient database architecture with PostgreSQL, MongoDB, and cloud optimization"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I offer comprehensive development services to bring your digital ideas to life with cutting-edge technology and best practices.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                    {React.cloneElement(service.icon, { size: 24 })}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Additional Features Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold leading-7 text-blue-600">Development Process</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Agile & Efficient</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                I follow modern development practices including CI/CD, testing, and agile methodologies to ensure high-quality deliverables.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold leading-7 text-blue-600">Technology Stack</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Modern & Scalable</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Utilizing the latest technologies and frameworks to build performant, maintainable, and future-proof applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

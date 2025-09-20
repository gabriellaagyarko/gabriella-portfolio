// ContactPage.js - Contact Page Component
import React, { useState } from 'react';

const ContactPage = () => {
  console.log('ContactPage is rendering'); // Debug log

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
      value: "gagyarko@my.centennialcollege.ca",
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
      value: "Toronto, ON, Canada",
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
    <div className="min-h-screen bg-gray-50 py-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              {/* Contact Details */}
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 lg:space-x-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-blue-600 font-medium text-sm lg:text-base">{info.value}</p>
                        <p className="text-xs lg:text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-200">
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
                          <p className="font-medium text-sm lg:text-base">{social.name}</p>
                          <p className="text-xs lg:text-sm">{social.username}</p>
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
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <span className="mr-2">✅</span>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
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
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your first name"
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
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
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
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="your.email@example.com"
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
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 lg:py-4 px-6 rounded-lg text-white font-semibold transition-colors ${
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

export default ContactPage;
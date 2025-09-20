// ContactPage.js - Contact Page Component
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2
} from 'lucide-react';

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

      // Reset form and redirect after success
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
        // Here you would typically redirect to home page
        // For demo purposes, we're just showing success message
      }, 3000);
    }, 2000);
  };

  // Contact information data
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "john.doe@example.com",
      description: "Send me an email anytime!"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY, USA",
      description: "Available for remote work worldwide"
    },
    {
      icon: MessageCircle,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly"
    }
  ];

  // Social links
  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/johndoe",
      username: "@johndoe"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      username: "John Doe"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss your next project and how I can help bring your ideas to life. 
            I'm always excited to work on new challenges and collaborate with great people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information Panel */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <IconComponent size={24} className="mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-lg mb-1">{info.value}</p>
                        <p className="text-sm opacity-80">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition-colors"
                      >
                        <IconComponent size={20} />
                        <span className="text-sm">{social.username}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle2 size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Available for new projects</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-blue-500 mr-3" />
                  <span className="text-gray-700">Next availability: Immediately</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-purple-500 mr-3" />
                  <span className="text-gray-700">Typical project duration: 2-12 weeks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
            
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                <CheckCircle2 size={20} className="mr-2" />
                <span>Message sent successfully! I'll get back to you soon. Redirecting to home page...</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="full-stack">Full-Stack Solution</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget and Timeline */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Form Note */}
              <p className="text-sm text-gray-500 text-center">
                * Required fields. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How quickly can you start my project?</h4>
                <p className="text-gray-600 text-sm">I'm currently available for new projects and can typically start within 1-2 weeks depending on the scope.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you work with international clients?</h4>
                <p className="text-gray-600 text-sm">Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What's your payment structure?</h4>
                <p className="text-gray-600 text-sm">I typically work with a 50% upfront payment and 50% upon completion, but I'm flexible based on project requirements.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Do you provide ongoing support?</h4>
                <p className="text-gray-600 text-sm">Yes! I offer various maintenance and support packages to keep your application running smoothly after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
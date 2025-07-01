import { useState, useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hisyam.dev@example.com",
      link: "mailto:hisyam.dev@example.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 xxx-xxxx-xxxx",
      link: "tel:+62xxxxxxxxx",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Surabaya, Indonesia",
      link: "https://maps.google.com/?q=Surabaya",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Maaulln",
      color: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/maulana-hisyam",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "#",
      color: "bg-sky-500 hover:bg-sky-600",
    },
  ];

  return (
    <>
      <style>{smoothAnimations}</style>
      <section
        id="contact"
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">
                Get In Touch
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-glow">
                Work Together
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-animate-left">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover-glow">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Contact Information
                </h3>

                {/* Contact Items */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className={`scroll-animate flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group hover-scale`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="scroll-animate">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl ${social.color} text-white transition-all duration-300 hover-scale shadow-md hover:shadow-lg`}
                        title={social.label}
                        style={{ animationDelay: `${500 + index * 100}ms` }}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-animate-right">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover-glow">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="scroll-animate" style={{ animationDelay: '300ms' }}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="scroll-animate" style={{ animationDelay: '400ms' }}>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="scroll-animate" style={{ animationDelay: '500ms' }}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="scroll-animate" style={{ animationDelay: '600ms' }}>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 hover-scale shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="scroll-animate text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-lg hover-glow">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with
                amazing people. Let's create something extraordinary together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hisyam.dev@example.com"
                  className="scroll-animate hover-scale inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: '200ms' }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </a>
                <a
                  href="https://github.com/Maaulln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-animate hover-scale inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: '300ms' }}
                >
                  <Github className="w-5 h-5" />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

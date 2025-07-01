import { useState, useRef } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Users,
  TrendingUp,
  Clock,
  Target,
  BookOpen,
} from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  const caseStudies = [
    {
      id: 1,
      title: "Pump Predictor - Predictive Maintenance System",
      client: "Data Science Project",
      category: "Machine Learning",
      duration: "6 months",
      team: "1 student",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge:
        "Project Pump Predictor was developed to address critical issues in the manufacturing industry where pump failure can result in losses of $50,000-500,000 per hour of downtime and emergency repair costs 3-5x more than planned maintenance.",
      solution:
        "The AI-powered predictive maintenance system uses ensemble machine learning (Random Forest, XGBoost, LightGBM) with >95% accuracy that can predict failures 7-30 days in advance, equipped with real-time monitoring of 13 sensor parameters, explainable AI (SHAP), and enterprise-grade security.",
      results: [
        { metric: "Prediction Accuracy", value: "95.3%", icon: Target },
        { metric: "Data Points Analyzed", value: "10K", icon: Users },
        { metric: "Model Training Time", value: "2 weeks", icon: Clock },
        { metric: "Features Engineered", value: "25", icon: TrendingUp },
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "scipy",
        "LightGBM",
        "XGBoost",
        "Docker",
      ],
      process: [
        "Research & Analysis",
        "Data Engineering",
        "Model Development",
        "Explainability",
        "System Architecture",
        "Production Engineering",
        "Deployment & Testing",
      ],
      github: "https://github.com/Maaulln/pump_Predictor",
      demo: "#",
    },
    {
      id: 2,
      title: "Terminal Assistant with AI",
      client: "AI Innovation Project",
      category: "Natural Language Processing",
      duration: "2 months",
      team: "3 students",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge:
        "Many users struggle with command-line interfaces and need assistance with terminal commands. The goal was to create an AI assistant that understands natural language and helps with terminal operations.",
      solution:
        "Built an AI-powered terminal assistant using natural language processing to interpret user requests and suggest appropriate terminal commands. Integrated with OpenAI API for intelligent responses.",
      results: [
        { metric: "Command Accuracy", value: "92%", icon: Target },
        { metric: "User Queries Handled", value: "500+", icon: Users },
        { metric: "Response Time", value: "<2s", icon: Clock },
        { metric: "Commands Supported", value: "100+", icon: TrendingUp },
      ],
      technologies: [
        "Python",
        "OpenAI API",
        "NLP",
        "Terminal Integration",
        "Flask",
      ],
      process: [
        "Natural language processing research",
        "Command mapping and categorization",
        "AI model integration and testing",
        "User interface development",
        "Performance optimization and testing",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Audio Reactive Neural Visualization",
      client: "Creative AI Project",
      category: "Neural Networks",
      duration: "2.5 months",
      team: "2 students",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge:
        "Create an innovative way to visualize music using artificial intelligence. The challenge was to build a system that generates dynamic visual patterns that respond to audio input in real-time.",
      solution:
        "Developed a neural network-based system that processes audio signals and generates corresponding visual patterns. Used deep learning to create unique visualizations that adapt to different music genres and styles.",
      results: [
        { metric: "Real-time Processing", value: "60 FPS", icon: Clock },
        { metric: "Audio Formats", value: "5+", icon: TrendingUp },
        { metric: "Visual Patterns", value: "50+", icon: Target },
        { metric: "Demo Views", value: "200+", icon: Users },
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Audio Processing",
        "Real-time Graphics",
      ],
      process: [
        "Audio signal processing research",
        "Neural network architecture design",
        "Real-time visualization development",
        "Performance optimization",
        "User testing and refinement",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Digital Library Management System",
      client: "Web Development Project",
      category: "Full-Stack Development",
      duration: "2 months",
      team: "3 students",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge:
        "Traditional library systems are often outdated and difficult to use. The goal was to create a modern, user-friendly digital library management system with advanced features.",
      solution:
        "Built a full-stack web application with React frontend and Node.js backend. Implemented features like book catalog, user authentication, borrowing system, and search functionality.",
      results: [
        { metric: "Books Cataloged", value: "1,000+", icon: Target },
        { metric: "User Registrations", value: "50+", icon: Users },
        { metric: "Search Speed", value: "<1s", icon: Clock },
        { metric: "System Uptime", value: "99%", icon: TrendingUp },
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT Authentication",
      ],
      process: [
        "Requirements analysis and system design",
        "Database schema design and setup",
        "Frontend development with React",
        "Backend API development",
        "Testing and deployment",
      ],
      github: "#",
      demo: "#",
    },
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <>
      <style>{smoothAnimations}</style>
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full border border-orange-200 mb-6">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-medium">
                Case Studies
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-glow">
                Deep Dives
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Detailed breakdown of my featured projects and development process
            </p>
          </div>

          {/* Case Study Selector */}
          <div className="scroll-animate flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setSelectedCase(index)}
                className={`hover-scale px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCase === index
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {study.title.split(" ").slice(0, 2).join(" ")}...
              </button>
            ))}
          </div>

          {/* Case Study Content */}
          <div className="scroll-animate-scale bg-white rounded-3xl shadow-2xl overflow-hidden hover-glow">
            {/* Header */}
            <div className="relative h-64 md:h-80">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
                    {currentCase.category}
                  </span>
                  <span className="text-white/80 text-sm">
                    {currentCase.client}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentCase.title}
                </h3>
                <div className="flex items-center space-x-6 text-white/80 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentCase.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{currentCase.team}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="scroll-animate-left space-y-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      My Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Development Process
                    </h4>
                    <ul className="space-y-3">
                      {currentCase.process.map((step, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="scroll-animate-right space-y-8">
                  {/* Results */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-6">
                      Results & Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {currentCase.results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center border border-orange-100"
                        >
                          <result.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                          <div className="text-2xl font-bold text-gray-800 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={currentCase.github}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={currentCase.demo}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to collaborate on a similar project?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

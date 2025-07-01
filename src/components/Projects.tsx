import { useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Star,
  Calendar,
  Users,
  BookOpen,
} from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  const projects = [
    {
      id: 1,
      title: "Pump Predictor - AI Predictive Maintenance",
      category: "data-science",
      description:
        "AI-powered predictive maintenance system with >95% accuracy that can predict pump failures 7-30 days in advance, featuring ensemble ML models.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "ML", "XGBoost", "Docker", "SHAP"],
      github: "https://github.com/Maaulln/pump_Predictor",
      demo: "#",
      featured: true,
      stats: { stars: 45, users: "234" },
      status: "Data Science Project",
    },
    {
      id: 2,
      title: "Terminal Assistant with AI",
      category: "data-science",
      description:
        "AI-powered terminal assistant using NLP to interpret user requests and suggest appropriate terminal commands with OpenAI integration.",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "OpenAI", "NLP", "CLI", "API"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 28, users: "89" },
      status: "AI Assistant",
    },
    {
      id: 3,
      title: "Music Classification Neural Network",
      category: "data-science",
      description:
        "Deep learning model for music genre classification using audio features and neural networks with TensorFlow.",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Python", "TensorFlow", "Audio Processing", "Visualization"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 31, users: "124" },
      status: "Neural Network Project",
    },
    {
      id: 4,
      title: "Digital Library",
      category: "web-dev",
      description:
        "Full-stack digital library management system with book catalog, user authentication, and borrowing system.",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 22, users: "156" },
      status: "Web Development",
    },
    {
      id: 5,
      title: "ANAK Education Mobile App UI Design",
      category: "design",
      description:
        "Modern UI/UX design concept for PENS student mobile application with improved user experience and interactive learning features.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Figma", "UI/UX Design", "Mobile App", "Prototyping"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 15, users: "45" },
      status: "UI/UX Design",
    },
    {
      id: 6,
      title: "Web Store E-commerce Platform",
      category: "design",
      description:
        "Complete UI/UX design for modern e-commerce web store with intuitive shopping experience and responsive design.",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Figma", "E-commerce", "Web Design", "User Experience"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 12, users: "38" },
      status: "Web Design",
    },
    {
      id: 7,
      title: "After Movie ARDA WISUDA JAYALOKA",
      category: "video",
      description:
        "Professional after movie showcasing graduation ceremony highlights with cinematic editing and storytelling.",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["CapCut", "Adobe Premiere", "Video Editing", "Cinematography"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { stars: 18, users: "127" },
      status: "Video Production",
    },
    {
      id: 8,
      title: "Behind the Scene Angkatan 37",
      category: "video",
      description:
        "Behind the scenes documentation of Angkatan 37 activities with creative storytelling and professional editing.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["CapCut", "Adobe Premiere", "Documentary", "Video Production"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: 9, users: "67" },
      status: "Documentary Video",
    },
    {
      id: 9,
      title: "Intro KMMY Motion Graphics",
      category: "video",
      description:
        "Dynamic motion graphics intro for KMMY organization with professional animations and visual effects.",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["After Effects", "Motion Graphics", "Animation", "Visual Effects"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { stars: 14, users: "82" },
      status: "Motion Graphics",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "data-science",
      label: "Data Science",
      count: projects.filter((p) => p.category === "data-science").length,
    },
    {
      id: "web-dev",
      label: "Web Dev",
      count: projects.filter((p) => p.category === "web-dev").length,
    },
    {
      id: "design",
      label: "UI/UX Design",
      count: projects.filter((p) => p.category === "design").length,
    },
    {
      id: "video",
      label: "Video Production",
      count: projects.filter((p) => p.category === "video").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "data-science":
        return "bg-blue-100 text-blue-600";
      case "design":
        return "bg-purple-100 text-purple-600";
      case "web-dev":
        return "bg-green-100 text-green-600";
      case "video":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <>
      <style>{smoothAnimations}</style>
      <section id="projects" ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200 mb-6">
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 text-sm font-medium">
                My Projects
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-glow">
                Projects
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real projects showcasing my skills in Data Science, Web
              Development, and Design
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="scroll-animate flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`hover-scale transition-all duration-300 group relative flex items-center space-x-3 px-6 py-3 rounded-full font-medium ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{filter.label}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    activeFilter === filter.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${
                  index % 3 === 0
                    ? "scroll-animate"
                    : index % 3 === 1
                    ? "scroll-animate-left"
                    : "scroll-animate-right"
                } group relative bg-white rounded-2xl overflow-hidden border hover-glow hover-scale ${
                  project.featured
                    ? "border-blue-200 shadow-blue-100"
                    : "border-gray-200"
                } shadow-lg`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
                  {project.status}
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors duration-200 shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-blue-600 backdrop-blur-sm rounded-full text-white hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category.replace("-", " ").toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{project.stats.users}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View</span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>2024</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="scroll-animate text-center mt-12">
            <a
              href="https://github.com/Maaulln"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg hover-glow"
            >
              <Github className="w-5 h-5" />
              <span>View More on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

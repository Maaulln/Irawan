import { useRef } from "react";
import { Calendar, MapPin, Award } from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

// Simple smooth scroll animations - ONE animation per element
const experienceStyles = smoothAnimations;

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  const experiences = [
    {
      id: 1,
      title: "D3 Information Technology Student",
      company: "Politeknik Elektronika Negeri Surabaya (PENS)",
      location: "Surabaya, Indonesia",
      period: "2024 - Present",
      type: "Education",
      description:
        "Currently pursuing D3 in Information Technology with focus on Data Science and UI/UX Design. Maintaining excellent academic performance with IPK 3.7.",
      achievements: [
        "IPK 3.7 (Current Semester 2)",
        "Active in programming courses",
        "Active in robotics organization",
        "Participated in design workshops",
        "Participated in IoT workshops",
        "Learning data analysis techniques",
      ],
      technologies: ["Python", "SQL", "Figma", "HTML/CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      title: "UI/UX Design Certificate",
      company: "Professional Certification",
      location: "Online",
      period: "2024",
      type: "Certificate",
      description:
        "Completed comprehensive UI/UX Design certification covering user research, wireframing, prototyping, and design systems.",
      achievements: [
        "User research methodologies",
        "Wireframing and prototyping",
        "Design system creation",
        "Usability testing principles",
      ],
      technologies: ["Figma", "Canva"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: 3,
      title: "Videography Certificate",
      company: "Creative Media Certification",
      location: "Online",
      period: "2024",
      type: "Certificate",
      description:
        "Earned videography certification covering video production, editing techniques, and storytelling through visual media.",
      achievements: [
        "Video production workflow",
        "Advanced editing techniques",
        "Color grading and audio",
        "Storytelling through video",
      ],
      technologies: [
        "Adobe Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Alight Motion",
        "CapCut",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <>
      <style>{experienceStyles}</style>
      <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium">
                Education & Certificates
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-blue-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-glow">
                My Learning Journey
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Academic background and professional certifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="scroll-animate absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
            {/* Experience Items */}
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`${
                    index % 2 === 0
                      ? "scroll-animate-left"
                      : "scroll-animate-right"
                  } relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`group ${exp.bgColor} rounded-3xl p-8 border ${exp.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                    >
                      <div className="transition-all duration-300">
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-bold rounded-full`}
                            >
                              {exp.type}
                            </span>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <span className="font-semibold">{exp.company}</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Key Learning:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-center space-x-2 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Skills & Tools:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white/70 text-gray-700 text-xs font-medium rounded-full border border-gray-200 transition-all duration-300 hover:scale-105 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

import { useRef } from "react";
import { Brain, Palette, Code, Video, Zap } from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const SkillsAnimated = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  const skillCategories = [
    {
      title: "Data Science",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      skills: [
        { name: "Python", level: 75, color: "bg-blue-500" },
        { name: "Pandas & NumPy", level: 70, color: "bg-cyan-500" },
        { name: "Data Visualization", level: 80, color: "bg-blue-400" },
        { name: "SQL", level: 65, color: "bg-cyan-400" },
        { name: "Statistics", level: 60, color: "bg-blue-600" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      skills: [
        { name: "Figma", level: 85, color: "bg-purple-500" },
        { name: "User Research", level: 70, color: "bg-pink-500" },
        { name: "Wireframing", level: 80, color: "bg-purple-400" },
        { name: "Prototyping", level: 75, color: "bg-pink-400" },
        { name: "Design Systems", level: 65, color: "bg-purple-600" },
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      skills: [
        { name: "HTML/CSS", level: 85, color: "bg-green-500" },
        { name: "JavaScript", level: 70, color: "bg-emerald-500" },
        { name: "React", level: 60, color: "bg-green-400" },
        { name: "Tailwind CSS", level: 75, color: "bg-emerald-400" },
        { name: "Responsive Design", level: 80, color: "bg-green-600" },
      ],
    },
    {
      title: "Video Editing",
      icon: Video,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      skills: [
        { name: "Adobe Premiere Pro", level: 80, color: "bg-orange-500" },
        { name: "After Effects", level: 70, color: "bg-red-500" },
        { name: "Color Grading", level: 65, color: "bg-orange-400" },
        { name: "Motion Graphics", level: 60, color: "bg-red-400" },
        { name: "Audio Editing", level: 70, color: "bg-orange-600" },
      ],
    },
  ];

  const certifications = [
    {
      title: "UI/UX Design",
      subtitle: "Professional Certificate",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Videography",
      subtitle: "Creative Media Certificate",
      icon: Video,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <>
      <style>{smoothAnimations}</style>
      <section
        ref={sectionRef}
        id="skills"
        className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
              <Zap className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium">Skills</span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-glow">
                Skills
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Technical skills I'm developing as a D3 IT student
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`${
                  categoryIndex % 2 === 0
                    ? "scroll-animate-left"
                    : "scroll-animate-right"
                } group ${category.bgColor} rounded-3xl p-6 border ${
                  category.borderColor
                } hover-glow hover-scale shadow-lg`}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-gray-800 text-xs font-bold bg-white/70 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-white/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`${skill.color} h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${
                              categoryIndex * 200 + skillIndex * 100
                            }ms`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="scroll-animate relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 text-glow">
                  My Certificates
                </span>
              </h3>
              <p className="text-gray-600">
                Professional certifications earned
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "scroll-animate-left"
                      : "scroll-animate-right"
                  } group ${
                    cert.bgColor
                  } rounded-2xl p-8 border border-gray-200 text-center hover-glow hover-scale shadow-lg`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`${cert.textColor} font-bold text-xl mb-2`}>
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {cert.subtitle}
                  </p>

                  {/* Verification Badge */}
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-600 text-sm font-medium rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Certified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className="scroll-animate mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl hover-glow">
            <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
            <p className="text-xl mb-6">
              Expanding my knowledge in Data Science and Advanced UI/UX Design
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Advanced Python
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                User Research
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                React.js
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsAnimated;

import { useRef } from "react";
import { Brain, Palette, Code, Cloud, Zap } from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  const skillCategories = [
    {
      icon: Brain,
      title: "Data Science",
      description: "Analytics and machine learning expertise",
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Data Analysis", level: 75 },
        { name: "Machine Learning", level: 70 },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design and prototyping",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Canva", level: 85 },
        { name: "User Research", level: 75 },
        { name: "Prototyping", level: 80 },
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web technologies and frameworks",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 },
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      description: "Development and productivity tools",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Adobe Creative Suite", level: 70 },
        { name: "Jupyter Notebook", level: 75 },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <>
      <style>{smoothAnimations}</style>
      <section
        ref={sectionRef}
        id="skills"
        className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full border border-green-200 mb-6">
              <Zap className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium">
                Skills & Expertise
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-glow">
                Technical Skills
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my technical abilities and expertise
              areas
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "scroll-animate-left"
                    : "scroll-animate-right"
                } ${category.bgColor} rounded-3xl p-8 border ${
                  category.borderColor
                } shadow-lg hover-glow hover-scale`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                  >
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1s ease-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="scroll-animate mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="hover-scale">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-gray-600 text-sm">Technologies</div>
                </div>
                <div className="hover-scale">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600 text-sm">Design Tools</div>
                </div>
                <div className="hover-scale">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600 text-sm">Projects</div>
                </div>
                <div className="hover-scale">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    2+
                  </div>
                  <div className="text-gray-600 text-sm">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

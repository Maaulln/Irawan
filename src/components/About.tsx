import { useRef } from "react";
import {
  Brain,
  Palette,
  Code,
  Github,
  Mail,
  Award,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const interests = [
    {
      icon: Brain,
      title: "Data Science",
      description: "Passionate about extracting insights from data",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern web applications and interfaces",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "IPK 3.7 (Current Semester 2)",
      color: "text-blue-600",
    },
    {
      icon: Award,
      title: "Certified Designer",
      description: "UI/UX Design Professional Certificate",
      color: "text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Active in workshops and programming courses",
      color: "text-green-600",
    },
  ];

  return (
    <>
      <style>{smoothAnimations}</style>
      <section
        ref={sectionRef}
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">
                About Me
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-glow">
                Get to Know Me
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A passionate student exploring the intersection of data science
              and design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate-left">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Currently pursuing a D3 in Information Technology at
                    Politeknik Elektronika Negeri Surabaya (PENS), I'm
                    passionate about the fascinating world of data science and
                    user experience design.
                  </p>
                  <p>
                    With a strong academic performance (IPK 3.7), I'm actively
                    involved in programming courses, robotics organizations, and
                    various workshops that enhance my technical and creative
                    skills.
                  </p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/Maaulln"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="mailto:maulana@example.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Contact</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="scroll-animate-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                What I Love
              </h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`${interest.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${interest.color} text-white`}
                      >
                        <interest.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {interest.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="scroll-animate">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full bg-gray-100 ${achievement.color}`}
                    >
                      <achievement.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

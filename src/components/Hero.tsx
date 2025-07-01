import { useRef } from "react";
import { ChevronDown, Github, ArrowRight, Sparkles } from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

// Use unified smooth animations
const heroStyles = smoothAnimations;

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);

  return (
    <>
      <style>{heroStyles}</style>
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        {/* Colorful Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Colorful Dots */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-300 opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-700 opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce delay-1000 opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <div className="scroll-animate inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <Sparkles className="w-6 h-6 text-yellow-500 animate-spin" />
              <p className="text-gray-600 font-medium text-lg">Hello, I'm</p>
            </div>
            <h1 className="scroll-animate text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Maulana Chandra Irawan
              </span>
              <br />
            </h1>
            <p className="scroll-animate text-2xl text-gray-600 font-medium">
              Data Science & UI/UX Design Student
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <h2 className="scroll-animate text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Passionate about{" "}
              <span className="text-blue-600 font-semibold">
                data-driven insights
              </span>{" "}
              and creating{" "}
              <span className="text-purple-600 font-semibold">
                beautiful user experiences
              </span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="scroll-animate-left group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full hover:scale-105 shadow-lg hover:shadow-xl transition-transform duration-300"
            >
              <span className="flex items-center space-x-2">
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>

            <a
              href="https://github.com/Maaulln"
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-animate-right group flex items-center space-x-2 px-8 py-4 bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-animate absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

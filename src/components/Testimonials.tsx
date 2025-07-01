import { useRef } from "react";
import { Star, Quote, GraduationCap, Users, Award } from "lucide-react";
import { smoothAnimations, useScrollAnimation } from "../utils/animations";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use unified scroll animation system
  useScrollAnimation(sectionRef);
  const testimonials = [
    {
      id: 1,
      name: "Dr. Ahmad Saikhu",
      role: "Lecturer",
      company: "PENS - Data Science",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "Maulana shows exceptional dedication in data analysis projects. His ability to visualize complex data and present insights clearly makes him stand out among his peers.",
      rating: 5,
      project: "Student Data Analysis Project",
    },
    {
      id: 2,
      name: "Sarah Putri",
      role: "UI/UX Design Instructor",
      company: "Design Certification Program",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "Maulana completed the UI/UX certification with excellent results. His design thinking process and attention to user experience details are impressive for a student.",
      rating: 5,
      project: "UI/UX Design Certification",
    },
    {
      id: 3,
      name: "Rizki Pratama",
      role: "Senior Student",
      company: "PENS - Semester 6",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content:
        "As a senior student, I mentored Maulana in web development. He learns quickly and always asks thoughtful questions. His portfolio website is really impressive!",
      rating: 5,
      project: "Web Development Mentoring",
    },
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Maintaining IPK 3.7 in D3 IT Program",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "2 Professional Certificates",
      description: "UI/UX Design & Videography",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      title: "Active Learner",
      description: "Participating in workshops and projects",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <>
      <style>{smoothAnimations}</style>
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-animate inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200 mb-6">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-600 text-sm font-medium">
                Testimonials
              </span>
            </div>
            <h2 className="scroll-animate text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 text-glow">
                People Say
              </span>
            </h2>
            <p className="scroll-animate text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Feedback from lecturers, instructors, and fellow students
            </p>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "scroll-animate-left"
                    : index === 1
                    ? "scroll-animate"
                    : "scroll-animate-right"
                } ${
                  achievement.bgColor
                } rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover-glow hover-scale`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl shadow-lg mb-4`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${
                  index % 3 === 0
                    ? "scroll-animate-left"
                    : index % 3 === 1
                    ? "scroll-animate"
                    : "scroll-animate-right"
                } group bg-white rounded-3xl p-8 shadow-lg hover-glow hover-scale border border-gray-100`}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Project */}
                <div className="mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in collaborating or mentoring?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

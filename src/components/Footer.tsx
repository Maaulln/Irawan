import React from 'react';
import { Heart, Brain, Palette, Github, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          
          <div className="text-2xl font-bold mb-4">
            <span className="text-blue-600">Maulana</span>
            <span className="text-gray-800"> Chandra Irawan</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="w-5 h-5 text-green-600" />
            <span className="text-gray-600 font-medium">D3 Information Technology Student at PENS</span>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Passionate about data science and user experience design. 
            Always learning, always growing, always creating.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <a
              href="https://github.com/Maaulln"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-200 group border border-gray-200 shadow-sm hover:shadow-md"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Maaulln</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Brain className="w-4 h-4 text-blue-600" />
            <span>by a PENS student</span>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2024 Maulana Chandra Irawan. All rights reserved. | D3 IT PENS Student
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
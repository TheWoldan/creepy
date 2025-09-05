import React from 'react';
import { Shield, Bot, Users } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md border">
            <Shield className="w-6 h-6 text-purple-500" />
            <span className="text-gray-700 font-medium">Privacy First</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md border">
            <Users className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 font-medium">Community Focused</span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md border">
            <Bot className="w-6 h-6 text-indigo-500" />
            <span className="text-gray-700 font-medium">Multi-Purpose</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
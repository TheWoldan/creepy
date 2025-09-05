import React from 'react';
import { PolicyContent } from '../types';
import { Calendar, ChevronRight } from 'lucide-react';

interface PolicySectionProps {
  content: PolicyContent;
  id: string;
}

const PolicySection: React.FC<PolicySectionProps> = ({ content, id }) => {
  return (
    <section id={id} className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
            <div className="flex items-center gap-2 text-purple-100">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">{content.effectiveDate}</span>
            </div>
          </div>

          <div className="p-8">
            {content.sections.map((section, index) => (
              <div
                key={index}
                className="mb-8 last:mb-0 group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                    {section.title}
                  </h3>
                </div>

                <div className="ml-9">
                  {section.type === 'list' && Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
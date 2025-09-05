import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: 'tr' | 'en';
  onLanguageChange: (lang: 'tr' | 'en') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="flex items-center gap-3">
      <Globe className="w-5 h-5 text-gray-600" />
      <div className="flex bg-white rounded-lg p-1 shadow-md border">
        <button
          onClick={() => onLanguageChange('tr')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'tr'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          🇹🇷 TR
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'en'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
        >
          🇺🇸 EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
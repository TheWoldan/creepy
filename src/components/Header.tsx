import React from 'react';
import { Bot, Shield } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentLanguage: 'tr' | 'en';
  onLanguageChange: (lang: 'tr' | 'en') => void;
  navigation: {
    privacy: string;
    terms: string;
    contact: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, navigation }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Creepy Bot</h1>
              <p className="text-sm text-gray-600">{currentLanguage === 'tr' ? 'Gizlilik ve Güvenlik' : 'Privacy & Security'}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('privacy')}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <Shield className="w-4 h-4" />
              {navigation.privacy}
            </button>
            <button
              onClick={() => scrollToSection('terms')}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <Bot className="w-4 h-4" />
              {navigation.terms}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {navigation.contact}
            </button>
          </nav>

          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
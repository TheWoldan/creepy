import React from 'react';
import { Bot, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  description: string;
  contact: string;
  currentLanguage: 'tr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ description, contact, currentLanguage }) => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Creepy Bot</h3>
            </div>
            <p className="text-purple-100 leading-relaxed">{description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {currentLanguage === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}
            </h4>
            <div className="space-y-3">
              <a href="#privacy" className="flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
                {currentLanguage === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </a>
              <a href="#terms" className="flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-200">
                <ExternalLink className="w-4 h-4" />
                {currentLanguage === 'tr' ? 'Kullanım Şartları' : 'Terms of Service'}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
            </h4>
            <div className="flex items-start gap-3 text-purple-100">
              <Mail className="w-5 h-5 mt-0.5" />
              <div>
                <p className="leading-relaxed">{contact}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-purple-200">
            © 2025 Creepy Bot. {currentLanguage === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
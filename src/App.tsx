import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PolicySection from './components/PolicySection';
import Footer from './components/Footer';
import { content } from './data/content';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'tr' | 'en'>('tr');

  // Detect user's preferred language from browser
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('tr')) {
      setCurrentLanguage('tr');
    } else {
      setCurrentLanguage('en');
    }
  }, []);

  const currentContent = content[currentLanguage];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        navigation={currentContent.navigation}
      />

      <Hero
        title={currentContent.hero.title}
        subtitle={currentContent.hero.subtitle}
      />

      <PolicySection
        content={currentContent.privacyPolicy}
        id="privacy"
      />

      <PolicySection
        content={currentContent.termsOfService}
        id="terms"
      />

      <Footer
        description={currentContent.footer.description}
        contact={currentContent.footer.contact}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

export default App;
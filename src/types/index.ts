export interface PolicyContent {
  title: string;
  effectiveDate: string;
  sections: PolicySection[];
}

export interface PolicySection {
  title: string;
  content: string | string[];
  type?: 'text' | 'list';
}

export interface Language {
  code: 'tr' | 'en';
  name: string;
  flag: string;
}

export interface ContentData {
  tr: {
    privacyPolicy: PolicyContent;
    termsOfService: PolicyContent;
    navigation: {
      privacy: string;
      terms: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    footer: {
      description: string;
      contact: string;
    };
  };
  en: {
    privacyPolicy: PolicyContent;
    termsOfService: PolicyContent;
    navigation: {
      privacy: string;
      terms: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    footer: {
      description: string;
      contact: string;
    };
  };
}
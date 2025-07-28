const arMessages = {
  name: "محمد خير عبده",
  initials: "م.خ.ع",
  location: "أولم، ألمانيا",
  about: "مهندس برمجيات بخبرة دولية في تقنية المعلومات، يجمع بين الدقة الألمانية وروح الابتكار",
  summary: "مهندس برمجيات متمرس حاصل على درجة الماجستير في علوم الحاسوب مع أكثر من 10 سنوات من الخبرة المتنوعة في تقنية المعلومات. متخصص في تطوير التطبيقات الشاملة وخدمات الواجهة الخلفية وإدارة الأنظمة. خلفية قوية في Java و Spring Boot و Python والتقنيات الحديثة للويب. سجل حافل في بيئات الشركات الناشئة والحلول المؤسسية.",
  
  // Section headings
  sections: {
    workExperience: "الخبرة المهنية",
    education: "التعليم",
    recognitions: "الجوائز والتقديرات",
    languages: "اللغات",
    skills: "المهارات والتقنيات",
    projects: "المشاريع",
    personalInfo: "المعلومات الشخصية",
    interests: "الاهتمامات"
  },
  
  // Work experience
  work: {
    ibtikar: {
      title: "مطور برمجيات",
      description: "تطوير شامل للواجهات الأمامية والخلفية باستخدام Java و Spring Boot وتطبيقات الهاتف المحمول باستخدام Flutter. بناء خطوط CI/CD في GitLab، الحاويات باستخدام Docker، النشر عبر Kubernetes، وإدارة المكونات مع Nexus."
    },
    adorsys: {
      title: "مطور برمجيات",
      description: "تطوير شامل مع التركيز على خدمات الواجهة الخلفية لمعالجة البيانات الضريبية في DATEV. تطوير نقاط REST وفقاً لمواصفات OpenAPI وتحسين أداء خطوط CI/CD الموجودة."
    },
    uniulm: {
      title: "مهندس تقنية المعلومات",
      description: "إدارة تقنية المعلومات وتطوير حلول برمجية للأجهزة العلمية. عزل الشبكة عبر VLAN، إعداد جدار الحماية PfSense، أدوات Python/Java لإدارة الأجهزة، الدعم التقني وتحليل الأمان."
    },
    pasifik: {
      title: "مدير VoIP ومطور Python",
      description: "تنفيذ وصيانة أنظمة VoIP (Sippy). التكامل مع FreeSwitch، تطوير REST API باستخدام Python/Django للتحكم الداخلي في النظام."
    },
    kancy: {
      title: "مطور Java",
      description: "تطوير نظام منزل ذكي معياري قائم على OSGi مع هياكل متعددة وواجهات REST."
    }
  },
  
  // Education
  education: {
    university: {
      school: "جامعة أولم",
      degree: "ماجستير في العلوم المعرفية",
      description: "دراسات عليا في العلوم المعرفية (غير مكتملة) - التركيز على فهم الإدراك البشري والذكاء الاصطناعي والنمذجة الحاسوبية"
    },
    bachelor: {
      school: "جامعة القلمون",
      degree: "بكالوريوس الهندسة في علوم الحاسوب",
      description: "برنامج شامل مدته 5 سنوات في علوم الحاسوب والهندسة، سوريا"
    }
  },
  
  // Recognitions
  recognitions: {
    kubernetes: {
      title: "دورة أساسيات Kubernetes و DevOps",
      organization: "التطوير المهني",
      type: "تدريب مهني",
      description: "دورة تدريبية شاملة في تنسيق حاويات Kubernetes وأفضل ممارسات DevOps، تغطي استراتيجيات النشر والتوسع والمراقبة."
    },
    restapi: {
      title: "شهادة تصميم RESTful API",
      organization: "التطوير المهني",
      type: "شهادة",
      description: "شهادة متخصصة في مبادئ تصميم RESTful API وأفضل الممارسات."
    },
    springboot: {
      title: "معسكر Spring Boot",
      organization: "التطوير المهني",
      type: "تدريب مهني",
      description: "برنامج تدريبي مكثف لتطوير إطار عمل Spring Boot."
    },
    rhel: {
      title: "Red Hat Enterprise Linux Essentials",
      organization: "Red Hat",
      type: "شهادة",
      description: "شهادة إدارة أنظمة RHEL والإدارة."
    },
    ccna: {
      title: "CCNA - شهادة شركة سيسكو المعتمدة",
      organization: "Cisco",
      type: "شهادة",
      description: "شهادة في البنية التحتية للشبكات والتوجيه/التبديل."
    },
    comptia: {
      title: "CompTIA A+/Network+/Security+",
      organization: "CompTIA",
      type: "شهادة",
      description: "شهادات شاملة في أساسيات تقنية المعلومات والشبكات والأمان."
    }
  },
  
  // Languages with proficiency levels
  languageSkills: {
    arabic: {
      language: "العربية",
      proficiency: "لغة أم"
    },
    english: {
      language: "الإنجليزية",
      proficiency: "جيد جداً (C1)"
    },
    german: {
      language: "الألمانية",
      proficiency: "جيد (B1)"
    }
  },
  
  // Personal info labels
  personalInfo: {
    dateOfBirth: "تاريخ الميلاد",
    placeOfBirth: "مكان الميلاد",
    nationality: "الجنسية",
    maritalStatus: "الحالة الاجتماعية",
    values: {
      dateOfBirth: "17 يوليو 1992",
      placeOfBirth: "سوريا",
      nationality: "سوري",
      maritalStatus: "أعزب"
    }
  },
  
  // Interests
  interestsList: [
    "نشرات تقنية المعلومات: Import AI بقلم Jack Clark، The Batch بقلم Andrew Ng، مناقشات Reddit",
    "القراءة: المنطق، الرياضيات، علم النفس، العلوم المعرفية",
    "بنية البرمجيات وتصميم الأنظمة",
    "مساهمات المصدر المفتوح وابتكار التكنولوجيا"
  ],
  
  // Projects
  projects: {
    manshoor: {
      title: "منشور: منصة رقمنة المنشورات",
      description: "تطوير شامل لخدمات الواجهة الخلفية باستخدام Java و Spring Boot وتطبيقات الهاتف المحمول باستخدام Flutter. بناء خطوط CI/CD في GitLab، تنفيذ الحاويات مع Docker، النشر عبر Kubernetes."
    },
    klartax: {
      title: "كلارتاكس: رقمنة الإقرار الضريبي",
      description: "تطوير شامل مع التركيز على خدمات الواجهة الخلفية لمعالجة البيانات الضريبية في DATEV. تطوير نقاط REST وفقاً لمواصفات OpenAPI وتحسين أداء خطوط CI/CD الموجودة."
    },
    uniulm: {
      title: "نظام إدارة الأجهزة العلمية",
      description: "إدارة تقنية المعلومات وتطوير البرمجيات للأجهزة العلمية في جامعة أولم. تنفيذ عزل الشبكة عبر VLAN، إعداد جدار الحماية PfSense، وتطوير أدوات Python/Java لإدارة الأجهزة."
    },
    voip: {
      title: "منصة تكامل أنظمة VoIP",
      description: "تنفيذ وصيانة أنظمة VoIP (Sippy) مع تكامل FreeSwitch. تطوير REST API باستخدام Python/Django للتحكم والإدارة الداخلية للنظام."
    },
    iot: {
      title: "منصة أتمتة المنزل الذكي IoT",
      description: "تطوير نظام منزل ذكي معياري قائم على OSGi مع هياكل متعددة وواجهات REST، مما يمكّن من قدرات أتمتة منزلية شاملة."
    }
  },
  
  // Footer
  footer: {
    builtWith: "مبني باستخدام Next.js و Tailwind CSS",
    visitPortfolio: "زيارة GitHub",
    comingSoon: "المزيد من المشاريع قريباً...",
    focusingOn: "يركز حالياً على هندسة البرمجيات وبنية الأنظمة"
  },
  
  // UI Elements
  ui: {
    languageSelector: "اختيار اللغة",
    timeline: {
      professional: "مهني",
      academic: "أكاديمي",
      current: "حالي",
      technologiesExpertise: "التقنيات والخبرة"
    }
  }
};

export default arMessages;

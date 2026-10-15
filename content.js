/* ------------------------------------------------------------------
   EDIT ME — all text, projects and links on the site live in this file.
   Each text has an English (en) and Arabic (ar) version.
   To add a project: copy one block inside `projects`, change the text,
   and drop the images into the /assets folder.
------------------------------------------------------------------- */
window.SITE = {
  name: { en: "Weam Ahmed", ar: "وئام أحمد" },
  role: { en: "Graphic Designer", ar: "مصممة جرافيك" },

  links: {
    whatsapp: "https://wa.me/249113221538",
    linkedin: "https://www.linkedin.com/in/weam-ahmed-893791301",
    email: "" // add an email here, e.g. "hello@example.com", and a button appears
  },

  hero: {
    kicker: { en: "Portfolio 2026", ar: "معرض الأعمال 2026" },
    title: {
      en: "Design that makes people stop, read and remember.",
      ar: "تصميم يجعل الناس يتوقفون، ويقرؤون، ويتذكرون."
    },
    sub: {
      en: "Brand identities, social media campaigns, print and exhibition design, in Arabic and English, for organisations that want to be understood.",
      ar: "هويات بصرية وحملات تواصل اجتماعي ومطبوعات وتصميم معارض، بالعربية والإنجليزية، للجهات التي تريد أن تصل رسالتها بوضوح."
    },
    cta: { en: "See the work", ar: "شاهد الأعمال" },
    cta2: { en: "Let's talk", ar: "تواصل معي" },
    images: ["assets/riforia-big.jpg", "assets/carnival-gate.jpg", "assets/candles-promo.jpg"]
  },

  marquee: {
    en: ["Branding", "Social Media", "Print", "Exhibitions", "Editorial", "Infographics", "Arabic Typography"],
    ar: ["هوية بصرية", "سوشيال ميديا", "مطبوعات", "معارض", "تصميم تحريري", "إنفوجرافيك", "الخط العربي"]
  },

  workTitle: { en: "Selected work", ar: "أعمال مختارة" },
  workIntro: {
    en: "Seven projects, from retail campaigns to university identities and public-health communication.",
    ar: "سبعة مشاريع، من حملات التجزئة إلى هويات الجامعات والتوعية الصحية."
  },

  projects: [
    {
      title: { en: "Riforia Meats", ar: "ريفوريا ميتس" },
      type: { en: "Social media campaigns", ar: "حملات سوشيال ميديا" },
      tags: ["Social", "Retail", "Ramadan"],
      brief: {
        en: "Bold, appetite-driven posts for a premium meat brand: sharp red-and-black styling, clear pricing and seasonal offers, including a Ramadan series.",
        ar: "منشورات جريئة تثير الشهية لعلامة لحوم فاخرة: ألوان الأحمر والأسود، وأسعار واضحة، وعروض موسمية تشمل سلسلة رمضان."
      },
      images: ["assets/riforia-mockup.jpg", "assets/riforia-family.jpg", "assets/riforia-big.jpg"]
    },
    {
      title: { en: "Colors & Candles", ar: "كولورز آند كاندلز" },
      type: { en: "Social media campaigns", ar: "حملات سوشيال ميديا" },
      tags: ["Social", "Events", "Promotions"],
      brief: {
        en: "Playful, high-energy posts for an event and party rental company: bright colour, friendly Arabic lettering and offers that are easy to read at a glance.",
        ar: "منشورات مرحة ونابضة بالحياة لشركة تأجير ألعاب وفعاليات: ألوان زاهية وخط عربي ودود وعروض تُقرأ من النظرة الأولى."
      },
      images: ["assets/candles-mockup.jpg", "assets/candles-promo.jpg"]
    },
    {
      title: { en: "Blocks", ar: "مكعبات" },
      type: { en: "Kids' brand · social content", ar: "علامة أطفال · محتوى اجتماعي" },
      tags: ["Social", "Illustration", "National Day"],
      brief: {
        en: "Cheerful content for a children's brand, from summer-safety tips to Saudi National Day celebrations, built on friendly characters and traditional patterns.",
        ar: "محتوى بهيج لعلامة أطفال، من نصائح السلامة في الصيف إلى احتفالات اليوم الوطني السعودي، بشخصيات لطيفة وزخارف تراثية."
      },
      images: ["assets/blocks-mockup.jpg", "assets/blocks-national.jpg"]
    },
    {
      title: { en: "Volunteer Carnival", ar: "كرنفال التطوع" },
      type: { en: "Event identity · Najran University", ar: "هوية فعالية · جامعة نجران" },
      tags: ["Identity", "Event", "Signage"],
      brief: {
        en: "A fresh blue-and-green identity for a university volunteering event, rolled out across the entrance gate, college booths and street banners.",
        ar: "هوية بصرية بالأزرق والأخضر لفعالية تطوعية في الجامعة، طُبّقت على البوابة وأركان الكليات واللافتات."
      },
      images: ["assets/carnival-gate.jpg", "assets/carnival-booth.jpg", "assets/carnival-banners.jpg"]
    },
    {
      title: { en: "Civilizational Communication", ar: "التواصل الحضاري" },
      type: { en: "Editorial · Najran University", ar: "تصميم تحريري · جامعة نجران" },
      tags: ["Editorial", "Report", "Layout"],
      brief: {
        en: "A long-form Arabic report on heritage and community initiatives, with a warm sand-and-navy palette, geometric motifs and clear data pages.",
        ar: "تقرير عربي مطوّل عن مبادرات التراث والمجتمع، بلوحة ألوان رملية وكحلية، وزخارف هندسية، وصفحات بيانات واضحة."
      },
      images: ["assets/booklet-cover.jpg", "assets/booklet-index.jpg", "assets/booklet-chapter.jpg", "assets/booklet-results.jpg"]
    },
    {
      title: { en: "Student Participation Exhibition", ar: "معرض المشاركات الطلابية" },
      type: { en: "Exhibition design · Najran University", ar: "تصميم معرض · جامعة نجران" },
      tags: ["Exhibition", "Infographics", "Print"],
      brief: {
        en: "Wall graphics and display stands that turn research, statistics and partner logos into clear, readable stories for a health-education conference.",
        ar: "جداريات وستاندات تحوّل الأبحاث والإحصائيات وشعارات الشركاء إلى قصص واضحة في مؤتمر للتعليم الصحي."
      },
      images: ["assets/expo-wall.jpg", "assets/expo-stands-1.jpg", "assets/expo-stands-2.jpg"]
    },
    {
      title: { en: "Public Health Awareness", ar: "التوعية الصحية" },
      type: { en: "Campaign · CAFA", ar: "حملات توعية · منظمة كافا" },
      tags: ["Campaign", "Print", "Health"],
      brief: {
        en: "Posters, brochures, roll-ups and booklets for hand-washing day and Breast Cancer Awareness Month, with simple steps, warm illustration and imagery that fits the community.",
        ar: "ملصقات وبروشورات ورول أب وكتيبات ليوم غسل الأيدي وشهر التوعية بسرطان الثدي، بخطوات مبسطة ورسوم دافئة وصور تناسب المجتمع."
      },
      images: ["assets/cafa-brochure.jpg", "assets/cafa-october-poster.jpg", "assets/cafa-handwash-poster.jpg", "assets/cafa-rollup.jpg", "assets/cafa-notebook.jpg"]
    }
  ],

  about: {
    title: { en: "About", ar: "نبذة" },
    text: {
      en: [
        "I'm Weam, a graphic designer who works across brand, social, print and exhibition design.",
        "Most of my work is in Arabic, so I care about type that reads well, layouts that breathe and ideas that stay simple. I enjoy projects where design has a job to do: teaching, informing, selling or bringing people together."
      ],
      ar: [
        "أنا وئام، مصممة جرافيك أعمل في الهوية البصرية والسوشيال ميديا والمطبوعات وتصميم المعارض.",
        "معظم أعمالي بالعربية، لذلك أهتم بخط واضح ومقروء، وتصاميم متوازنة، وأفكار بسيطة. أحب المشاريع التي يكون للتصميم فيها دور حقيقي: التعليم أو التوعية أو البيع أو جمع الناس."
      ]
    }
  },

  servicesTitle: { en: "What I do", ar: "ماذا أقدم" },
  services: [
    { t: { en: "Brand identity", ar: "الهوية البصرية" }, d: { en: "Logos, colour, type and guidelines.", ar: "شعارات وألوان وخطوط ودليل استخدام." } },
    { t: { en: "Social media design", ar: "تصميم السوشيال ميديا" }, d: { en: "Campaign posts, stories and offers.", ar: "منشورات حملات وقصص وعروض." } },
    { t: { en: "Print & editorial", ar: "المطبوعات والتحرير" }, d: { en: "Brochures, reports, posters and roll-ups.", ar: "بروشورات وتقارير وملصقات ورول أب." } },
    { t: { en: "Exhibition & signage", ar: "المعارض واللافتات" }, d: { en: "Booths, banners, backdrops and gates.", ar: "أركان ولافتات وخلفيات وبوابات." } }
  ],

  clientsTitle: { en: "Worked with", ar: "عملت مع" },
  clients: ["Najran University", "CAFA", "Relief Alliance", "Riforia Meats", "Colors & Candles", "Blocks"],

  contact: {
    title: { en: "Have a project in mind?", ar: "لديك مشروع في بالك؟" },
    text: { en: "Message me on WhatsApp or LinkedIn and let's talk about it.", ar: "راسلني عبر واتساب أو لينكدإن ونتحدث عنه." },
    whatsapp: { en: "WhatsApp", ar: "واتساب" },
    linkedin: { en: "LinkedIn", ar: "لينكدإن" },
    email: { en: "Email", ar: "البريد" }
  },

  ui: {
    next: { en: "Next", ar: "التالي" },
    prev: { en: "Previous", ar: "السابق" },
    close: { en: "Close", ar: "إغلاق" },
    footer: { en: "© 2026 Weam Ahmed. All rights reserved.", ar: "© 2026 وئام أحمد. جميع الحقوق محفوظة." },
    view: { en: "View", ar: "عرض" }
  }
};

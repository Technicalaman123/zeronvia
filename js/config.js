const defaultConfig = {
  site_name: "📚 Zeronvia",
  hero_title: "Free Tools & Study Resources",
  hero_subtitle: "Odisha CHSE & BSE Students के लिए सब कुछ मुफ्त",
  info_line1: "📚 Complete CHSE +2 Study Material",
  info_line2: "✏️ BSE 10th Board Exam Resources",
  info_line3: "🎯 100% Free - Odia & English Medium",
  tools_heading: "Free Online Tools",
  tools_subtitle: "Professional tools, बिल्कुल मुफ्त - कभी भी, कहीं भी use करें",
  education_heading: "Odisha Board Study Resources",
  education_subtitle: "Complete study material - CHSE +2 & BSE 10th के लिए सब कुछ",
  about_heading: "About Zeronvia",
  about_text: "Zeronvia, Odisha के students और professionals के लिए बनाया गया है। हम quality educational resources, free online tools, और study materials provide करते हैं - सब कुछ बिल्कुल मुफ्त में। ଆମର ଲକ୍ଷ୍ୟ ହେଉଛି Odisha Board students (CHSE & BSE) को best resources देना।",
  contact_heading: "Get In Touch",
  contact_email: "contact@zeronvia.com",
  contact_phone: "+91 1234567890"
};

async function onConfigChange(config) {
  const siteName = config.site_name || defaultConfig.site_name;
  const heroTitle = config.hero_title || defaultConfig.hero_title;
  const heroSubtitle = config.hero_subtitle || defaultConfig.hero_subtitle;
  const infoLine1 = config.info_line1 || defaultConfig.info_line1;
  const infoLine2 = config.info_line2 || defaultConfig.info_line2;
  const infoLine3 = config.info_line3 || defaultConfig.info_line3;
  const toolsHeading = config.tools_heading || defaultConfig.tools_heading;
  const toolsSubtitle = config.tools_subtitle || defaultConfig.tools_subtitle;
  const educationHeading = config.education_heading || defaultConfig.education_heading;
  const educationSubtitle = config.education_subtitle || defaultConfig.education_subtitle;
  const aboutHeading = config.about_heading || defaultConfig.about_heading;
  const aboutText = config.about_text || defaultConfig.about_text;
  const contactHeading = config.contact_heading || defaultConfig.contact_heading;
  const contactEmail = config.contact_email || defaultConfig.contact_email;
  const contactPhone = config.contact_phone || defaultConfig.contact_phone;

  document.getElementById('site-name').innerHTML = siteName;
  document.getElementById('hero-title').textContent = heroTitle;
  document.getElementById('hero-subtitle').textContent = heroSubtitle;
  document.getElementById('info-line1').textContent = infoLine1;
  document.getElementById('info-line2').textContent = infoLine2;
  document.getElementById('info-line3').textContent = infoLine3;
  document.getElementById('tools-heading').textContent = toolsHeading;
  document.getElementById('tools-subtitle').textContent = toolsSubtitle;
  document.getElementById('education-heading').textContent = educationHeading;
  document.getElementById('education-subtitle').textContent = educationSubtitle;
  document.getElementById('about-heading').textContent = aboutHeading;
  document.getElementById('about-text').textContent = aboutText;
  document.getElementById('contact-heading').textContent = contactHeading;
  document.getElementById('contact-email').textContent = contactEmail;
  document.getElementById('contact-email').href = `mailto:${contactEmail}`;
  document.getElementById('contact-phone').textContent = contactPhone;
  document.getElementById('contact-phone').href = `tel:${contactPhone}`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ["site_name", config.site_name || defaultConfig.site_name],
      ["hero_title", config.hero_title || defaultConfig.hero_title],
      ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
      ["info_line1", config.info_line1 || defaultConfig.info_line1],
      ["info_line2", config.info_line2 || defaultConfig.info_line2],
      ["info_line3", config.info_line3 || defaultConfig.info_line3],
      ["tools_heading", config.tools_heading || defaultConfig.tools_heading],
      ["tools_subtitle", config.tools_subtitle || defaultConfig.tools_subtitle],
      ["education_heading", config.education_heading || defaultConfig.education_heading],
      ["education_subtitle", config.education_subtitle || defaultConfig.education_subtitle],
      ["about_heading", config.about_heading || defaultConfig.about_heading],
      ["about_text", config.about_text || defaultConfig.about_text],
      ["contact_heading", config.contact_heading || defaultConfig.contact_heading],
      ["contact_email", config.contact_email || defaultConfig.contact_email],
      ["contact_phone", config.contact_phone || defaultConfig.contact_phone]
    ])
  });
}

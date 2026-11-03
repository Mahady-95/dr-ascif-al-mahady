document.getElementById("year").textContent =
  new Date().getFullYear();

const translations = {
  en: {
    "meta.title": "Dr. Ascif Al Mahady (Anik) | ENT Specialist | MBBS, MS",
    "meta.description": "Dr. Ascif Al Mahady (Anik) is an ENT Specialist with MBBS and MS qualification, providing consultation for ear, nose, throat and head & neck conditions in Dhaka.",
    "nav.brandLabel": "Dr. Ascif Al Mahady, ENT Specialist, home",
    "nav.toggleLabel": "Toggle navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.chamber": "Chamber",
    "nav.contact": "Contact",
    "nav.languageLabel": "Select language",
    "nav.book": "Book Appointment",
    "common.doctorName": "Dr. Ascif Al Mahady (Anik)",
    "common.specialist": "ENT Specialist",
    "common.hospital": "Enam Medical College & Hospital",
    "hero.role": "Associate Professor of Otolaryngology",
    "hero.qualification": "MBBS, MS (ENT & Head-Neck Surgery)",
    "hero.description": "Providing specialized care for ear, nose, throat and related head & neck conditions with a patient-focused approach.",
    "hero.book": "Book an Appointment",
    "hero.call": "Call Now",
    "hero.photoAlt": "Dr. Ascif Al Mahady",
    "about.label": "ABOUT THE DOCTOR",
    "about.heading": "Trusted care with experience and compassion.",
    "about.paragraph1": "Dr. Ascif Al Mahady (Anik) is an ENT Specialist with an MBBS and MS qualification, providing consultation and treatment for a wide range of ear, nose, throat and head & neck conditions.",
    "about.paragraph2": "With a patient-centered approach, the doctor focuses on careful evaluation, accurate diagnosis and appropriate treatment for both common and complex ENT conditions.",
    "about.qualifications": "Qualifications",
    "about.qualificationValue": "MBBS, MS",
    "about.experience": "Experience",
    "about.experienceValue": "5+ Years in Clinical Practice",
    "about.affiliation": "Affiliation",
    "about.specialty": "Specialty",
    "about.specialtyValue": "ENT & Head-Neck Surgery",
    "services.label": "SERVICES",
    "services.heading": "Areas of medical care",
    "services.earTitle": "Ear Problems",
    "services.earDescription": "Evaluation and treatment of common ear infections, ear pain, hearing problems and related conditions.",
    "services.noseTitle": "Nose & Sinus Problems",
    "services.noseDescription": "Consultation for sinusitis, nasal blockage, allergy-related problems and other nasal conditions.",
    "services.hearingTitle": "Hearing & Voice",
    "services.hearingDescription": "Assessment of hearing difficulties, voice problems and other related ENT concerns.",
    "services.headNeckTitle": "Head & Neck Conditions",
    "services.headNeckDescription": "Clinical evaluation and treatment guidance for common head and neck conditions.",
    "services.consultTitle": "ENT Consultation",
    "services.consultDescription": "Comprehensive ENT consultation with personalized diagnosis and treatment planning.",
    "why.label": "WHY CHOOSE",
    "why.heading": "Patient-focused ENT care",
    "why.patientTitle": "Patient Focused",
    "why.patientDescription": "Every consultation begins with understanding the patient's symptoms and concerns.",
    "why.evaluationTitle": "Careful Evaluation",
    "why.evaluationDescription": "Detailed clinical assessment to support appropriate diagnosis and treatment.",
    "why.compassionTitle": "Compassionate Care",
    "why.compassionDescription": "Clear communication and personalized care throughout the consultation process.",
    "chamber.label": "CHAMBER",
    "chamber.heading": "Consultation information",
    "chamber.status": "Available for consultation",
    "chamber.address": "Address, Thana Stand Road, Savar, Dhaka, Bangladesh",
    "chamber.hours": "Sat–Thu: 8:00 AM – 2:30 PM",
    "chamber.directions": "Get Directions",
    "appointment.label": "APPOINTMENT",
    "appointment.heading": "Need a consultation?",
    "appointment.description": "Call or send a WhatsApp message to schedule an appointment.",
    "appointment.call": "Call",
    "appointment.whatsapp": "WhatsApp",
    "contact.label": "CONTACT",
    "contact.heading": "Get in touch",
    "contact.description": "For appointments and chamber-related queries, please use the contact details below.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.locationValue": "Dhaka, Bangladesh",
    "contact.qrAlt": "QR code to save Dr. Ascif Al Mahady's contact details",
    "contact.qrLabel": "vCard QR code",
    "contact.vcard": "V-CARD",
    "contact.saveContact": "Save contact",
    "contact.scanDescription": "Scan to add the doctor's details to your contacts.",
    "form.name": "Your Name",
    "form.phone": "Phone Number",
    "form.message": "Write your message or appointment request",
    "form.submit": "Request Appointment",
    "form.redirectNotice": "You will be redirected to WhatsApp to send your appointment request.",
    "footer.rights": "All rights reserved.",
    "footer.notice": "For information and appointment purposes only.",
    "whatsapp.greeting": "Hello Doctor,",
    "whatsapp.request": "I would like to request an appointment.",
    "whatsapp.name": "Name",
    "whatsapp.phone": "Phone",
    "whatsapp.message": "Message"
  },
  bn: {
    "meta.title": "ডা. আসিফ আল মেহেদী (অনিক) | নাক-কান-গলা বিশেষজ্ঞ | এমবিবিএস, এমএস",
    "meta.description": "ডা. আসিফ আল মেহেদী (অনিক) ঢাকায় কান, নাক, গলা এবং হেড-নেকের বিভিন্ন সমস্যার জন্য পরামর্শ ও চিকিৎসা প্রদান করেন।",
    "nav.brandLabel": "ডা. Ascif Al Mahady, নাক-কান-গলা বিশেষজ্ঞ, হোম",
    "nav.toggleLabel": "নেভিগেশন মেনু খুলুন",
    "nav.home": "হোম",
    "nav.about": "পরিচিতি",
    "nav.services": "সেবাসমূহ",
    "nav.chamber": "চেম্বার",
    "nav.contact": "যোগাযোগ",
    "nav.languageLabel": "ভাষা নির্বাচন করুন",
    "nav.book": "সাক্ষাতের সময় নিন",
    "common.doctorName": "ডা. আসিফ আল মেহেদী (অনিক)",
    "common.specialist": "নাক-কান-গলা বিশেষজ্ঞ",
    "common.hospital": "এনাম মেডিকেল কলেজ ও হাসপাতাল",
    "hero.role": "নাক-কান-গলা বিভাগের সহযোগী অধ্যাপক",
    "hero.qualification": "এমবিবিএস, এমএস (নাক-কান-গলা ও হেড-নেক সার্জারি)",
    "hero.description": "কান, নাক, গলা এবং হেড-নেকের বিভিন্ন সমস্যায় রোগীকেন্দ্রিক বিশেষায়িত চিকিৎসাসেবা প্রদান করা হয়।",
    "hero.book": "সাক্ষাতের সময় নিন",
    "hero.call": "এখনই কল করুন",
    "hero.photoAlt": "ডা. আসিফ আল মেহেদী",
    "about.label": "চিকিৎসক পরিচিতি",
    "about.heading": "অভিজ্ঞতা ও সহমর্মিতায় আস্থার চিকিৎসা।",
    "about.paragraph1": "ডা. Ascif Al Mahady (Anik) এমবিবিএস ও এমএস ডিগ্রিধারী নাক-কান-গলা বিশেষজ্ঞ। তিনি কান, নাক, গলা এবং হেড-নেকের বিভিন্ন সমস্যার পরামর্শ ও চিকিৎসা প্রদান করেন।",
    "about.paragraph2": "রোগীকেন্দ্রিক সেবায় তিনি সতর্ক মূল্যায়ন, সঠিক রোগনির্ণয় এবং সাধারণ ও জটিল নাক-কান-গলার সমস্যার উপযুক্ত চিকিৎসায় গুরুত্ব দেন।",
    "about.qualifications": "শিক্ষাগত যোগ্যতা",
    "about.qualificationValue": "এমবিবিএস, এমএস",
    "about.experience": "অভিজ্ঞতা",
    "about.experienceValue": "ক্লিনিক্যাল চিকিৎসায় ৫+ বছরের অভিজ্ঞতা",
    "about.affiliation": "কর্মস্থল",
    "about.specialty": "বিশেষত্ব",
    "about.specialtyValue": "নাক-কান-গলা ও হেড-নেক সার্জারি",
    "services.label": "চিকিৎসাসেবা",
    "services.heading": "চিকিৎসাসেবার ক্ষেত্রসমূহ",
    "services.earTitle": "কানের সমস্যা",
    "services.earDescription": "কানের সাধারণ সংক্রমণ, ব্যথা, শ্রবণ সমস্যা এবং সংশ্লিষ্ট রোগের মূল্যায়ন ও চিকিৎসা।",
    "services.noseTitle": "নাক ও সাইনাসের সমস্যা",
    "services.noseDescription": "সাইনুসাইটিস, নাক বন্ধ থাকা, অ্যালার্জিজনিত সমস্যা এবং নাকের অন্যান্য রোগের পরামর্শ।",
    "services.hearingTitle": "শ্রবণ ও কণ্ঠস্বর",
    "services.hearingDescription": "শ্রবণ সমস্যা, কণ্ঠস্বরের সমস্যা এবং নাক-কান-গলা সংক্রান্ত অন্যান্য সমস্যার মূল্যায়ন।",
    "services.headNeckTitle": "মাথা ও গলার সমস্যা",
    "services.headNeckDescription": "মাথা ও গলার সাধারণ সমস্যার ক্লিনিক্যাল মূল্যায়ন এবং চিকিৎসা পরামর্শ।",
    "services.consultTitle": "নাক-কান-গলা পরামর্শ",
    "services.consultDescription": "ব্যক্তিভিত্তিক রোগনির্ণয় ও চিকিৎসা পরিকল্পনাসহ পূর্ণাঙ্গ নাক-কান-গলা পরামর্শ।",
    "why.label": "কেন বেছে নেবেন",
    "why.heading": "রোগীকেন্দ্রিক নাক-কান-গলা চিকিৎসা",
    "why.patientTitle": "রোগীর প্রতি গুরুত্ব",
    "why.patientDescription": "প্রতিটি পরামর্শ শুরু হয় রোগীর উপসর্গ ও উদ্বেগ মনোযোগ দিয়ে বোঝার মাধ্যমে।",
    "why.evaluationTitle": "সতর্ক মূল্যায়ন",
    "why.evaluationDescription": "সঠিক রোগনির্ণয় ও চিকিৎসায় সহায়তার জন্য বিস্তারিত ক্লিনিক্যাল মূল্যায়ন।",
    "why.compassionTitle": "সহমর্মিতাপূর্ণ সেবা",
    "why.compassionDescription": "পরামর্শের প্রতিটি ধাপে স্পষ্ট যোগাযোগ ও ব্যক্তিভিত্তিক সেবা।",
    "chamber.label": "চেম্বার",
    "chamber.heading": "পরামর্শের তথ্য",
    "chamber.status": "পরামর্শের জন্য উপলভ্য",
    "chamber.address": "ঠিকানা, থানা স্ট্যান্ড রোড, সাভার, ঢাকা, বাংলাদেশ",
    "chamber.hours": "শনিবার–বৃহস্পতিবার: সকাল ৮টা–দুপুর ২:৩০",
    "chamber.directions": "দিকনির্দেশনা দেখুন",
    "appointment.label": "সাক্ষাৎ",
    "appointment.heading": "পরামর্শ প্রয়োজন?",
    "appointment.description": "সাক্ষাতের সময় নিতে কল করুন অথবা হোয়াটসঅ্যাপ-এ বার্তা পাঠান।",
    "appointment.call": "কল করুন",
    "appointment.whatsapp": "হোয়াটসঅ্যাপ",
    "contact.label": "যোগাযোগ",
    "contact.heading": "যোগাযোগ করুন",
    "contact.description": "সাক্ষাৎ বা চেম্বার-সংক্রান্ত তথ্যের জন্য নিচের যোগাযোগের মাধ্যমগুলো ব্যবহার করুন।",
    "contact.phone": "ফোন",
    "contact.email": "ইমেইল",
    "contact.location": "অবস্থান",
    "contact.locationValue": "ঢাকা, বাংলাদেশ",
    "contact.qrAlt": "ডা. আসিফ আল মেহেদীর যোগাযোগের তথ্য সংরক্ষণের QR কোড",
    "contact.qrLabel": "ভিকার্ড QR কোড",
    "contact.vcard": "ভি-কার্ড",
    "contact.saveContact": "যোগাযোগ সংরক্ষণ করুন",
    "contact.scanDescription": "স্ক্যান করে ডাক্তারের যোগাযোগের তথ্য সংরক্ষণ করুন।",
    "form.name": "আপনার নাম",
    "form.phone": "ফোন নম্বর",
    "form.message": "আপনার বার্তা বা সাক্ষাতের অনুরোধ লিখুন",
    "form.submit": "সাক্ষাতের অনুরোধ পাঠান",
    "form.redirectNotice": "অনুরোধ পাঠাতে আপনাকে হোয়াটসঅ্যাপ-এ নেওয়া হবে।",
    "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
    "footer.notice": "শুধুমাত্র তথ্য ও সাক্ষাতের উদ্দেশ্যে।",
    "whatsapp.greeting": "আসসালামু আলাইকুম ডাক্তার,",
    "whatsapp.request": "আমি একটি সাক্ষাতের সময় চাই।",
    "whatsapp.name": "নাম",
    "whatsapp.phone": "ফোন",
    "whatsapp.message": "বার্তা"
  }
};

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage;

  const mapFrame = document.querySelector("[data-language-frame]");
  if (mapFrame && mapFrame.dataset.mapLanguage !== currentLanguage) {
    const mapUrl = new URL(mapFrame.src);
    mapUrl.searchParams.set("hl", currentLanguage);
    mapFrame.src = mapUrl.toString();
    mapFrame.dataset.mapLanguage = currentLanguage;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translatedValue = translations[currentLanguage][element.dataset.i18n];

    if (translatedValue === undefined) {
      return;
    }

    const targetAttribute = element.dataset.i18nAttr;
    if (targetAttribute) {
      element.setAttribute(targetAttribute, translatedValue);
    } else {
      element.textContent = translatedValue;
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isSelected = button.dataset.language === currentLanguage;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  try {
    localStorage.setItem("doctor-website-language", currentLanguage);
  } catch (error) {
    // Language switching still works when browser storage is unavailable.
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("doctor-website-language") || "en";
} catch (error) {
  savedLanguage = "en";
}
setLanguage(savedLanguage);

const vcardQrImage = document.querySelector(".vcard-qr-image");

if (vcardQrImage) {
  const revealVcardQr = () => {
    if (vcardQrImage.naturalWidth > 0) {
      vcardQrImage.closest(".vcard-qr-slot").classList.add("qr-loaded");
    }
  };

  vcardQrImage.addEventListener("load", revealVcardQr, { once: true });
  revealVcardQr();
}


function sendWhatsApp(event) {

  event.preventDefault();

  const name =
    document.getElementById("patientName").value.trim();

  const phone =
    document.getElementById("patientPhone").value.trim();

  const message =
    document.getElementById("patientMessage").value.trim();


  const doctorWhatsApp = "8801799915895";
  // ↑ এখানে doctor's actual WhatsApp number বসাও


  const whatsappText = translations[currentLanguage];
  const text =
`${whatsappText["whatsapp.greeting"]}

${whatsappText["whatsapp.request"]}

${whatsappText["whatsapp.name"]}: ${name}
${whatsappText["whatsapp.phone"]}: ${phone}

${whatsappText["whatsapp.message"]}:
${message}`;


  const whatsappURL =
    `https://wa.me/${doctorWhatsApp}?text=${encodeURIComponent(text)}`;


  window.open(whatsappURL, "_blank");
}

// ================================
// ABOUT SECTION SCROLL ANIMATION
// ================================

const aboutSection = document.querySelector("#about");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("about-visible");

        // Animate only once
        aboutObserver.unobserve(aboutSection);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}

// ================================
// SERVICES SECTION SCROLL ANIMATION
// ================================

const servicesSection = document.querySelector("#services");

const servicesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        servicesSection.classList.add("services-visible");

        // Animate only once
        servicesObserver.unobserve(servicesSection);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (servicesSection) {
  servicesObserver.observe(servicesSection);
}

// ================================
// WHY CHOOSE US SCROLL ANIMATION
// ================================

const whySection = document.querySelector("#why");

const whyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        whySection.classList.add("why-visible");

        // Animate only once
        whyObserver.unobserve(whySection);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (whySection) {
  whyObserver.observe(whySection);
}


// ================================
// CHAMBER SECTION SCROLL ANIMATION
// ================================

const chamberSection = document.querySelector("#chamber");

const chamberObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        chamberSection.classList.add("chamber-visible");

        // Animate only once
        chamberObserver.unobserve(chamberSection);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (chamberSection) {
  chamberObserver.observe(chamberSection);
}


// ================================
// APPOINTMENT SECTION ANIMATION
// ================================

const appointmentSection = document.querySelector("#appointment");

const appointmentObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        appointmentSection.classList.add("appointment-visible");

        // Animate only once
        appointmentObserver.unobserve(appointmentSection);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (appointmentSection) {
  appointmentObserver.observe(appointmentSection);
}

// ================================
// CONTACT SECTION SCROLL ANIMATION
// ================================

const contactSection = document.querySelector("#contact");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contactSection.classList.add("contact-visible");

        // Animate only once
        contactObserver.unobserve(contactSection);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (contactSection) {
  contactObserver.observe(contactSection);
}
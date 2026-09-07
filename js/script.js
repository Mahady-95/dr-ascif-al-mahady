document.getElementById("year").textContent =
  new Date().getFullYear();


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


  const text =
`Hello Doctor,

I would like to request an appointment.

Name: ${name}
Phone: ${phone}

Message:
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
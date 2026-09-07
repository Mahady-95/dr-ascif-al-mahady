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
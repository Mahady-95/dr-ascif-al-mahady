document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(event) {
  event.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent = "Demo form submitted. Connect this form to email/Formspree/Google Forms for real submissions.";
}

function sendEmail(event) {
  event.preventDefault(); // prevent the form from performing default behavior

  const publicKey = emailjs.init("3zO9O70tU7H2qdJ_i");

  emailjs
    .sendForm("service_bixxj1e", "template_if8c9gf", "#contact_me", publicKey)
    .then(
      function (response) {
        console.log("Email sent successfully", response.status, response.text);
        document.getElementById("contact_me").reset();
      },
      function (error) {
        console.error("Error sending email", error);
      }
    );
}

//add the event listener
document.addEventListener("DOMContentLoaded", function () {
  var contact_form = document.getElementById("contact_me");
  if (contact_form) {
    contact_form.addEventListener("submit", sendEmail);
  }
});

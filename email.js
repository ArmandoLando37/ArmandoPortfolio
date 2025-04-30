
emailjs.init("6lrzzcS-KHVxK5p72"); 

// Écouteur d'événement pour la soumission du formulaire
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();  
  // Envoi du formulaire via EmailJS
  emailjs.sendForm("service_thsj447", "template_ndrri93", this)
    .then(function(response) {

      alert("✅ Message envoyé avec succès !");
      e.target.reset();
  
    }, function(error) {

      alert("❌ Erreur : " + JSON.stringify(error));
    });
});
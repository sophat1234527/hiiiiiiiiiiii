document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks! We'll contact you soon.";
  this.reset();
});

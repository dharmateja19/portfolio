document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("status-msg").textContent = "Message sent successfully!";
    document.getElementById("contact-form").reset();
  } else {
    document.getElementById("status-msg").textContent = "Please fill in all fields.";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear old messages
    clearMessages();

    let valid = true;

    // --- Validation checks ---
    if (name.length < 2) {
      showMessage("Please enter your full name.", "error");
      valid = false;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      valid = false;
    }

    if (subject.length < 3) {
      showMessage("Subject should be at least 3 characters long.", "error");
      valid = false;
    }

    if (message.length < 10) {
      showMessage("Message should be at least 10 characters long.", "error");
      valid = false;
    }

    // --- If valid, simulate sending ---
    if (valid) {
      showMessage("🎉 Thank you for reaching out! We will respond soon.", "success");
      contactForm.reset();
    }
  });

  // --- Helper: Email validation regex ---
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // --- Helper: Show messages ---
  function showMessage(text, type = "info") {
    const msg = document.createElement("div");
    msg.className = `form-message ${type}`;
    msg.textContent = text;
    contactForm.insertBefore(msg, contactForm.firstChild);
    setTimeout(() => {
      msg.remove();
    }, 5000);
  }

  // --- Helper: Clear old messages ---
  function clearMessages() {
    const oldMsgs = contactForm.querySelectorAll(".form-message");
    oldMsgs.forEach((m) => m.remove());
  }
});

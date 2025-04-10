// modal
document.querySelectorAll(".switch-btn button").forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle active class
    document
      .querySelectorAll(".switch-btn button")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    // Open modal
    const modal = document.getElementById("auth-modal");
    const modalTitle = document.getElementById("modal-title");
    modal.style.display = "block";

    // Set modal title based on clicked button
    if (this.innerText === "Log in") {
      modalTitle.innerText = "Log In";
    } else {
      modalTitle.innerText = "Sign Up";
    }
  });
});

// Close modal when clicking on close button
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("auth-modal").style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  const modal = document.getElementById("auth-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

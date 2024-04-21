document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    var name = document.querySelector(".contact-form-name").value;
    var email = document.querySelector(".contact-form-email").value;
    var message = document.querySelector(".contact-form-message").value;

    if (!name || !email || !message) {
      e.preventDefault(); // Menghentikan form dari pengiriman
      // Tampilkan pesan error
      if (!name)
        document.querySelector(".form-error-name").style.display = "block";
      if (!email)
        document.querySelector(".form-error-email").style.display = "block";
      if (!message)
        document.querySelector(".form-error-Message").style.display = "block";
    }
  });

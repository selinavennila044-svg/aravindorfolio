```javascript
/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICKING
   A NAVIGATION LINK
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all the fields.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "green";


    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
```


  function sendForm(event) {
    event.preventDefault();

    // get page elements
    var formBox   = document.getElementById("message-form");
    var thankText = document.getElementById("thank-you-text");
    var titleText = document.getElementById("big-title");
    var smallLine = document.getElementById("small-text");
    var navBtns   = document.getElementById("nav-buttons");

    // get values from the form
    var nameValue  = document.getElementById("your-name").value;
    var emailValue = document.getElementById("your-email").value;

    // simple check: name and email must not be empty
    if (nameValue === "" || emailValue === "") {
      alert("Please fill in your name and email.");
      return;
    }

    // simple email check: must contain @ and .
    if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
      alert("Please enter a full email address, like name@example.com");
      return;
    }

    // hide the form
    formBox.style.display = "none";

    // change the big title
    titleText.textContent =
      "If you wake up and still remember this site, that’s worth extra credit, right??? 😊😊😊";

    // hide the small line
    smallLine.style.display = "none";

    // show the thank-you message
    thankText.textContent =
      nameValue + ", thank you for your details. We will be in touch via " +
      emailValue + " shortly.";

    // show the thank-you text and buttons
    thankText.className = "";          // remove hide-me
    navBtns.className   = "nav-buttons"; // show buttons
  }

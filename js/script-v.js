/* JavaScript for The Expanse page */
/* V Surkova */

// Function to make cards a little bit bigger when hovered
function hover() {
  const cards = document.querySelectorAll('.card-space');

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.1)';
      card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
}

hover(); // run the hover function

// Function to open card links in a new tab
function newTab() {
  const cardLinks = document.querySelectorAll('.card .link');
  cardLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(this.href, '_blank');
    });
  });
}

newTab(); // run the newTab function

// Function to check message form before sending
function msg(event) {
  const textarea = document.querySelector('form textarea');
  if (textarea.value.trim() === "") {
    alert("Please provide issue details before submitting!");
    event.preventDefault();
  } else {
    alert("Thank you for letting us know! Your feedback is very important for us!");
  }
}

const form = document.querySelector('form'); // get the form
form.addEventListener('submit', msg); // check form when submitted
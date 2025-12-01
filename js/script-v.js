function hover(){
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
hover();

function newTab() {
  const cardLinks = document.querySelectorAll('.card .link');

  cardLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '_blank');
    });
  });
}

newTab();

function msg(){
	alert("Thank you for letting us know! Your feedback is very important for us!");
}

function msg(event) {
    const textarea = document.querySelector('form textarea');
    if (textarea.value.trim() === "") {
        alert("Please provide issue details before submitting!");
		event.preventDefault();
    } else {
        alert("Thank you for letting us know! Your feedback is very important for us!");
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', msg);

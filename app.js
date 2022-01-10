const cards = document.querySelectorAll(".gallery-card");

if (window.innerWidth > 672) {
	cards.forEach((card, index) => {
		card.style.transform = `translateY(${index % 2 === 0 ? -1 : 1}rem)`;
	});
}

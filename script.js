let score = 0;

const buttons = document
	.querySelector(".button-list")
	.querySelectorAll("button");

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		buttons.forEach((b) => {
			b.classList.remove("active");
			b.setAttribute("aria-checked", "false");
		});
		btn.classList.add("active");
		btn.setAttribute("aria-checked", "true");
		score = btn.textContent;
	});
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (score === 0) return;

	const firstSection = document.querySelector(".first-section");
	const secondSection = document.querySelector(".second-section");

	firstSection.style.display = "none";
	secondSection.style.display = "flex";
	document.getElementById("score").textContent = score;
});

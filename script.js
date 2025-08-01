let score = 0;

const buttons = document
	.querySelector(".button-list")
	.querySelectorAll("button");

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		buttons.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");
		score = btn.textContent;
	});
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
	if (score === 0) return;

	const firstSection = document.querySelector(".first-section");
	const secondSection = document.querySelector(".second-section");

	firstSection.style.display = "none";
	secondSection.style.display = "flex";
	document.getElementById("score").textContent = score;
});

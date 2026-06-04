const form = document.getElementById("rating-form");
const submitBtn = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRatingSpan = document.getElementById("selected-rating");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const selected = document.querySelector('input[name="rating"]:checked');

  if (!selected) return;

  selectedRatingSpan.textContent = selected.value;
  ratingState.style.display = "none";
  thankYouState.style.display = "flex";
});

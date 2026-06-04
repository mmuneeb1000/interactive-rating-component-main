const form = document.getElementById("rating-form");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRatingSpan = document.getElementById("selected-rating");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selected = document.querySelector('input[name="rating"]:checked');

  if (!selected) return;

  selectedRatingSpan.textContent = selected.value;
  ratingState.hidden = true;
  thankYouState.hidden = false;
});

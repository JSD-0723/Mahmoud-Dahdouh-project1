// Show and hide favorite section
const favoriteSection = document.getElementById("favorite-section")
const showFavorite = document.getElementById("show-favorite")

showFavorite.addEventListener("click", () => {
  favoriteSection.classList.toggle("b-0")
})

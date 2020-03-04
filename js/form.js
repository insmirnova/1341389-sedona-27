var buttonCloseForm = document.querySelector(".button-close-form");
var searchForm = document.querySelector(".search-form");
var required = document.querySelectorAll(".required");
var countOfPeople = document.querySelector(".input-number");

buttonCloseForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form-hidden")
})

searchForm.addEventListener("submit", function(evt) {
    var success = true;
    required.forEach(function(elem) {
        if (!elem.value) success = false;
    })
    if (!success) {
        evt.preventDefault();
        console.log("Необходимо заполнить все поля");
    }
    else {
        localStorage.setItem("countOfPeople", required.value);
        console.log("данные по количеству взрослых и детей сохранены");
      }
});
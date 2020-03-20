var buttonCloseForm = document.querySelector(".button-close-form");
var searchForm = document.querySelector(".search-form");
var required = document.querySelectorAll(".required");
<<<<<<< HEAD
var countOfPeople = document.querySelectorAll(".input-number");

searchForm.classList.add("search-form-hidden");
buttonCloseForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form-hidden");
    searchForm.classList.remove("form-error");
});
searchForm.addEventListener("submit", function(evt) {
    var isRequiredCorrect = true;
    for (var i=0; i<required.length; i++) {
        if (!required[i].value) {
            isRequiredCorrect = false;
            break;
        }
    }
    if (isRequiredCorrect == false) {
        evt.preventDefault();
        searchForm.classList.remove("form-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("form-error");
=======
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
>>>>>>> 220fcbedf93b10694cd305a2907b284e685dac63
        console.log("Необходимо заполнить все поля");
    }
    else {
        localStorage.setItem("countOfPeople", required.value);
        console.log("данные по количеству взрослых и детей сохранены");
      }
});
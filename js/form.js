var buttonCloseForm = document.querySelector(".button-close-form");
var searchForm = document.querySelector(".search-form");
var required = document.querySelectorAll(".required");
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
        console.log("Необходимо заполнить все поля");
    }
    else {
        localStorage.setItem("countOfPeople", required.value);
        console.log("данные по количеству взрослых и детей сохранены");
      }
});
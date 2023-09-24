var btn = document.getElementById("form-1");

var search = ""
btn.addEventListener("click", (e) => {
    e.preventDefault();
    search = btn.elements[0].value;


});
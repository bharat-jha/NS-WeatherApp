document.write("Hello Bharat");

console.log("Hi Bharat")


function changeColor() {
    addColor = document.getElementsByTagName("h2")
    addcolorh3 = document.getElementsByTagName("h3")
    console.log(addColor);
    addColor[0].style.color = "green";

    addcolorh3[0].style.color = "red"

    console.log("colored green")

}

setTimeout(changeColor, 2000);
// function changeColor(color) {
//     var parent = document.querySelector('.parent');
//     parent.style.setProperty('--color', color);
// }
function getHeightByClass(className) {
    var element = document.getElementsByClassName(className)[0];
    var style = window.getComputedStyle(element);
    var width = style.getPropertyValue('height');

    return width;
}

var classInput = "";
var width = getHeightByClass("popular-item__content");
console.log(width);
// function changeColor(color) {
//     var parent = document.querySelector('.parent');
//     parent.style.setProperty('--color', color);
// }
function getWidthByClass(className) {
    var element = document.getElementsByClassName(className)[0];
    var style = window.getComputedStyle(element);
    var width = style.getPropertyValue('width');

    return width;
}

var classInput = prompt('Enter the class name:');
var width = getWidthByClass(classInput);
alert('Width of class ' + classInput + ': ' + width);

function getHeightByClass(className) {
    var element = document.getElementsByClassName(className)[0];
    var style = window.getComputedStyle(element);
    var width = style.getPropertyValue('height');

    return width;
}
function getValueFromCSSVariable(className, variableName) {
    var element = document.getElementsByClassName(className)[0];
    var styles = getComputedStyle(element);
    var value = styles.getPropertyValue(variableName);

    return value;
}

var width = getHeightByClass("popular-item__content");
var bottom = getValueFromCSSVariable("popular-item__content", "--bottom-position")
console.log(bottom);


var margin = parseFloat(width) + parseFloat(bottom);
console.log(margin);
console.log(typeof (margin + "px"));
var element = document.getElementsByClassName(".popular-list__item");
margin = margin + "px"
element.style.marginBottom = margin; 
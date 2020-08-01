// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
// push right left keys to scroll through outfits
// puch up and down keys to scroll through body locaiton

document.onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1);
  } else if (e.keyCode == '40') {
    // down arrow
    changeVertical(1);
  } else if (e.keyCode == '37') {
    // left arrow
    changeHorizontal(-1);
  } else if (e.keyCode == '39') {
    // right arrow
    changeHorizontal(1);
  }
}

var indexes = [0, 0, 0];

var positionIndex = 0;

var head = document.getElementById('head');
var body = document.getElementById('body');
var shoes = document.getElementById('shoes');

var imgs = [head, body, shoes];
var strings = ['head', 'body', 'shoes'];

function changeHorizontal(shift) {
  var index = indexes[positionIndex];
  var image = imgs[positionIndex];
  var string = strings[positionIndex];

  index += shift;

  if (index < 0) index = 5;
  if (index > 5) index = 0;

  indexes[positionIndex] = index;

  image.src = './images/' + string + index + '.png';
}

function changeVertical(shift) {
  positionIndex += shift;

  if (positionIndex < 0) positionIndex = 2;
  if (positionIndex > 2) positionIndex = 0;
}

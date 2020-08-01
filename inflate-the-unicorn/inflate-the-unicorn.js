// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!');

var uni0 = (document.getElementById('uni0').onclick = clicked);
var uni1 = (document.getElementById('uni1').onclick = clicked);
var uni2 = (document.getElementById('uni2').onclick = clicked);

var inflation = [0, 0, 0];

function clicked(event) {
  var unicorn = event.target;
  var id = unicorn.id[3];

  inflation[id]++;

  if (inflation[id] == 4) alert(unicorn.id + ' says Thank you!');

  if (inflation[id] == 4) inflation[id] = 0;

  unicorn.src = './images/unicorn-' + inflation[id] + '.png';
}

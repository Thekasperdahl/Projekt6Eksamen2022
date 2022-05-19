//kodet af Kasper

const array1 = ["#e07070", "#Efefef", "#E0F9F0"];

for (let i = 0; i < array1.length ; i++) {
var hejsa = array1[i];}

console.log (hejsa)

let box = document.getElementById('alert-admin');

box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = hejsa;
});

box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

let cancel = array1 [0];

let box2 = document.getElementById('red-cancel');

box2.addEventListener('mouseover', function handleMouseOver() {
  box2.style.color = cancel;
});

box2.addEventListener('mouseout', function handleMouseOut() {
  box2.style.color = 'black';
});
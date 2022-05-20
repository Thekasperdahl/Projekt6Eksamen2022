//kodet af Kasper

const hoverjs = ["#e07070", "#000000", "#E0F9F0"];

for (let i = 0; i < hoverjs.length ; i++) {
var arrayColor = hoverjs[i];}

let box = document.getElementById('alert-admin');

box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = arrayColor;
});

box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

let cancel = hoverjs [0];

let box2 = document.getElementById('red-cancel');

box2.addEventListener('mouseover', function handleMouseOver() {
  box2.style.color = cancel;
});

box2.addEventListener('mouseout', function handleMouseOut() {
  box2.style.color = 'black';
});

//if mouseover også run style color change. 

const adminBox = document.getElementById('admin-oversigt');
let adminClicked = false;
adminBox.addEventListener('click', function onClick(){
  if (adminClicked == false){
    adminBox.style.color = hoverjs[0];
    adminClicked = true;
  } 
  else 
  {
    adminBox.style.color = hoverjs[1];
    adminClicked = false;
  }
}); 
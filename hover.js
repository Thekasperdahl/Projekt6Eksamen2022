const array1 = ["#FF5733", "#FF00F3", "#2AB59D"];

const farve = array1 [1];

const box = document.getElementsByClassName('alert-admin');

addEventListener('mouseover', function handleMouseOver() {
  box.style.color = farve;
});

addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

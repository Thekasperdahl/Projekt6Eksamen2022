//Søren JS Start

const openModalBtn = document.getElementById("open-modal-btn");

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const addNewBtn = document.getElementById("add-bar-btn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const subCount = document.getElementById("sub-count");
const priceTag = document.getElementsByClassName("sub-bars-cost");
const monthlyCost = document.getElementById("sub-cost");
const bars = document.getElementsByClassName("latest-bar");

//creates an array from all the divs that has the class "lates-bar" applied
let barCounter = bars.length;

let duplicates = [];

function checkDuplicates(){
    for (let i = 0; i < bars.length; i++) {
    
        let currentBar = bars[i]
    
        for (let j = 0; j < bars.length; j++) {
            let nextBar = bars[j];
    
            //if currentBar is not the same as nextBar but the child[1].innerText(name) is the same, apply this style:
            if (currentBar != nextBar && currentBar.children[1].innerText == nextBar.children[1].innerText) {
              currentBar.style.backgroundColor = "#EDE5AF";
              nextBar.style.backgroundColor = "#EDE5AF";
            }
        }
    }
}

checkDuplicates()

subCount.innerHTML = barCounter;

// When the user clicks the button, open the modal 
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Søren JS Slut


//Mikkel loop + array start

let sum = 0;

for (let c = 0; c < priceTag.length; c++) {
    const element = priceTag[c];

  //converts priceTag array innerHTML into numbers, and adds them together
  sum += parseFloat(priceTag[c].innerHTML);
}

monthlyCost.innerHTML = sum;

//Mikkel loop slut



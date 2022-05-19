const container = document.getElementById("bar-container");
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
let barCounter = bars.length;
let duplicates = [];

function checkDuplicates(){
    for (let i = 0; i < bars.length; i++) {
    
        let currentBar = bars[i]
    
        for (let j = 0; j < bars.length; j++) {
            let next = bars[j];
    
            if (currentBar != next && currentBar.childNodes[3].innerText == next.childNodes[3].innerText) {
                currentBar.style.backgroundColor = "#EDE5AF";
                next.style.backgroundColor = "#EDE5AF";
            }
        }
    }
}

checkDuplicates()

subCount.innerHTML = barCounter;

addNewBtn.onclick = function(){addBar()};

function addBar() {
    let cost = monthlyCost.innerText;
    let newCost = parseInt(cost)+50;
    monthlyCost.innerText = newCost;

    let bar = document.createElement("div");
    bar.classList.add("latest-bar");

    let thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    bar.append(thumbnail);

    let thumbnailText = document.createElement("h6");
    thumbnailText.classList.add("thumbnail-text");
    thumbnailText.innerHTML = "XX";
    thumbnail.append(thumbnailText);

    let barName = document.createElement("div");
    barName.classList.add("sub-bars-name");
    barName.innerHTML = "TEST NAME";
    bar.append(barName);

    let barProject = document.createElement("div");
    barProject.classList.add("sub-bars-project");
    barProject.innerHTML = "TEST PROJECT";
    bar.append(barProject);

    let barDate = document.createElement("div");
    barDate.classList.add("sub-bars-date");
    barDate.innerHTML = "XX/XX-XXXX";
    bar.append(barDate);

    container.append(bar);
    modal.style.display = "none";

    barCounter++
    subCount.innerHTML = barCounter;
    checkDuplicates()
}

// When the user clicks the button, open the modal 
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let sum = 0;

for (let c = 0; c < priceTag.length; c++) {
    const element = priceTag[c];

    sum += parseInt(priceTag[c].innerHTML);
}

monthlyCost.innerHTML = sum;


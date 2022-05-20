const container = document.getElementById("bar-container");
const subName = document.getElementById("sname");
const subFunc = document.getElementById("funct");
const subMail = document.getElementById("smail");
const subCost = document.getElementById("cost");
const yourName = document.getElementById("yname");
const yourMail = document.getElementById("ymail");
const proClient = document.getElementById("client");
const subDate = document.getElementById("cdate");

let formCheckArray = [0,0,0];

function validateForm() {
    snamevali();
    functvali();
    smailvali();
    check();
    return false;

}

    function snamevali(){
    let sbn = document.forms["subForm"]["subsribtionname"].value;
    if (sbn == "") {
      console.log("Name must be filled out");
      return false;
      
    }
    else {
        formCheckArray[0] = [1];
        return false;
    }}

    function functvali(){
        let fun = document.forms["subForm"]["functionality"].value;
        if (fun == "") {
          console.log("Name must be filled out");
          return false;
          
        }
        else {
            formCheckArray[1] = [1];
            return false;
        }}

    function smailvali(){
        let sma = document.forms["subForm"]["smail"].value;
        if (sma == "") {
            console.log("Name must be filled out");
            return false;
            
         }
        else {
            formCheckArray[2] = [1];
            return false; 
         }}
    
function check(){
    if(formCheckArray == [1, 1, 1]){
        addBar();
        return false;
    }
}
  
function addBar() {
    let cost = monthlyCost.innerText;
    let newCost = parseFloat(cost) + parseFloat(subCost.value);
    monthlyCost.innerText = newCost;

    let bar = document.createElement("div");
    bar.classList.add("latest-bar");

    let thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    bar.append(thumbnail);

    let barName = document.createElement("div");
    barName.classList.add("sub-bars-name");
    barName.innerHTML = subName.value;
    bar.append(barName);

    let thumbnailText = document.createElement("h6");
    thumbnailText.classList.add("thumbnail-text");    
    if (subName.value !== "") {
        let tempName = subName.value.split("");
        thumbnailText.innerHTML = tempName[0].toUpperCase() + tempName[1].toUpperCase();
    }
    thumbnail.append(thumbnailText);

    let barProject = document.createElement("div");
    barProject.classList.add("sub-bars-project");
    barProject.innerHTML = proClient.value;
    bar.append(barProject);

    let barDate = document.createElement("div");
    barDate.classList.add("sub-bars-date");
    barDate.innerHTML = subDate.value;
    bar.append(barDate);

    container.append(bar);
    modal.style.display = "none";

    barCounter++
    subCount.innerHTML = barCounter;
    checkDuplicates()
}

span.onclick = function() {
    modal.style.display = "none";
  }

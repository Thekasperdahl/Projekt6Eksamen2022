//container of all bars
const container = document.getElementById("bar-container");
//name of bar sub
const subName = document.getElementById("sname");
//name of the project/client
const proClient = document.getElementById("client");
//creation date of the sub
const subDate = document.getElementById("cdate");


//name of the admin for the sub (hidden)
const yourName = document.getElementById("yname");
//function of bar sub(hidden)
const subFunc = document.getElementById("funct");
//mail used for the sub(hidden)
const subMail = document.getElementById("smail");
//cost of the sub (hidden)
const subCost = document.getElementById("cost");
//mail used for the admin of the sub(hidden)
const yourMail = document.getElementById("ymail");

addNewBtn.onclick = function(){addBar()};

function addBar() {
    //takes monthlyCost const from index.js, and goes into the inner text of the ID
    let cost = monthlyCost.innerText;
    //adds the cost of the 7 bars together with the newly pushed cost of a newly added bar
    //parsefloat turns string into numbers
    let newCost = parseFloat(cost) + parseFloat(subCost.value);
    monthlyCost.innerText = newCost;

    //creates variable "bar" and adds the ability to create a div
    let bar = document.createElement("div");
    //adds the class "latest-bar" to newly created div
    bar.classList.add("latest-bar");
    //adds newly created bar to myBtn2Array on line 2 in overview.js, so that it can open a modal
    myBtn2Array.push(bar);
    //adds onclick function to open the modal2, on the new bar
    applyOnclickForModal2();

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

    //hidden elements
    let hiddenUserName = document.createElement("p");
    hiddenUserName.style.display = "none";
    hiddenUserName.innerHTML = yourName.value;
    bar.append(hiddenUserName);
    
    let hiddenBarFunction = document.createElement("p");
    hiddenBarFunction.style.display = "none";
    hiddenBarFunction.innerHTML = subFunc.value;
    bar.append(hiddenBarFunction);

    let hiddenMailForSub = document.createElement("p");
    hiddenMailForSub.style.display = "none";
    hiddenMailForSub.innerHTML = subMail.value;
    bar.append(hiddenMailForSub);

    let hiddenSubCost = document.createElement("p");
    hiddenSubCost.style.display = "none";
    hiddenSubCost.innerHTML = subCost.value;
    bar.append(hiddenSubCost);

    let hiddenAdminMail = document.createElement("p");
    hiddenAdminMail.style.display = "none";
    hiddenAdminMail.innerHTML = yourMail.value;
    bar.append(hiddenAdminMail);
    
    //hidden elements

    container.append(bar);
    modal.style.display = "none";

    barCounter++
    subCount.innerHTML = barCounter;
    checkDuplicates()

    bar.addEventListener("click",function(){
        modalFill(bar);
    })
}

span.onclick = function() {
    modal.style.display = "none";
  }
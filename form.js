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

//modal content id list

//name of the sub, displayed in the top bar
let modalBarName = document.getElementById("modalBarName");
//support email
let modalSupportEmail = document.getElementById("modalSupportEmail");
//functionality of the sub
let modalSubFunctionality = document.getElementById("modalSubFunctionality");
//name of the admin, who created the sub
let modalAdminName = document.getElementById("modalAdminName");
//email of the admin, who created the sub
let modalAdminEmail = document.getElementById("modalAdminEmail");
//name of the client and or project the sub was created for
let modalProjectClient = document.getElementById("modalProjectClient");
//monthly price of the sub
let modalPrice = document.getElementById("modalPrice");
//the date of the sub creation
let modalCreationDate = document.getElementById("modalCreationDate");


addNewBtn.onclick = function(){addBar()};

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
}

span.onclick = function() {
    modal.style.display = "none";
  }

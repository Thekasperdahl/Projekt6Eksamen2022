
//Staal JS Start

function validateForm(){
    let sbn = document.forms["subForm"]["subsribtionname"].value;
    if (sbn == "") {
      document.getElementById("sname").style.borderColor = "red";
      return false;
      
    }
    else {
        document.getElementById("sname").style.borderColor = "#47385D";
        functvali();
        return false;
    }}

    function functvali(){
        let fun = document.forms["subForm"]["functionality"].value;
        if (fun == "") {
            document.getElementById("funct").style.borderColor = "red";
          return false;
          
        }
        else {
            document.getElementById("funct").style.borderColor = "#47385D";
            smailvali();
            return false;
        }}

    function smailvali(){
        let sma = document.forms["subForm"]["supportmail"].value;
        if (sma == "") {
            document.getElementById("smail").style.borderColor = "red";
            return false;
            
         }
        else {
            document.getElementById("smail").style.borderColor = "#47385D";
            costvali();
            return false; 
         }}

    function costvali(){
    let cos = document.forms["subForm"]["cost"].value;
    if (cos == "") {
        document.getElementById("cost").style.borderColor = "red";
        return false;
                
        }
     else {
        document.getElementById("cost").style.borderColor = "#47385D";
         ynamevali();
         return false; 
     }}


    function ynamevali(){
         let yna = document.forms["subForm"]["yourname"].value;
        if (yna == "") {
        document.getElementById("yname").style.borderColor = "red";
             return false;
                    
         }
         else {
            document.getElementById("yname").style.borderColor = "#47385D";
            ymailvali();
             return false; 
            }}


        function ymailvali(){
        let yma = document.forms["subForm"]["yourmail"].value;
          if (yma == "") {
            document.getElementById("ymail").style.borderColor = "red";
            return false;
                        
         }
         else {
            document.getElementById("ymail").style.borderColor = "#47385D";
            clientvali();
            return false; 
         }}

         function clientvali(){
            let cli = document.forms["subForm"]["project/client"].value;
            if (cli == "") {
                document.getElementById("client").style.borderColor = "red";
                return false;
                            
                }
            else{
                document.getElementById("client").style.borderColor = "#47385D";
                cdatevali();
                return false; 
             }}

         function cdatevali(){
              let cda = document.forms["subForm"]["creationdate"].value;
             if (cda == "") {
                document.getElementById("cdate").style.borderColor = "red";
                 return false;
                                
             }
            else {
                document.getElementById("cdate").style.borderColor = "#47385D";
                addBar();
                 return false; 
            }}

//Staal JS Slut


//Søren JS Start

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

const latestBarContainer = document.getElementById("latestBarContainer");

const formContent = document.getElementById("formContent");
const formHeader = document.getElementById("formHeader");

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


    //creates variabl "thumbnail" and gives the ability to create an "div"
    let thumbnail = document.createElement("div");
    //applies the class "thumbnail" when the div is created
    thumbnail.classList.add("thumbnail");
    //appends the variable "thumbnail (child)" to the variable "bar"(parent)
    bar.append(thumbnail);

    //same logic as above
    let barName = document.createElement("div");
    barName.classList.add("sub-bars-name");
    //takes the input value of const "subName", at puts it as the innerHTML
    barName.innerHTML = subName.value;
    bar.append(barName);


    let thumbnailText = document.createElement("h6");
    thumbnailText.classList.add("thumbnail-text");  
    //if subName input value isn't empty, then "run this"  
    if (subName.value !== "") {
        //creates an array of letters from the subName and display the first two in uppercasing
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

    //hidden elements Start
    //same logic, but creates a hidden "p" on the newly created bar
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
    //hidden elements End

    //inserts the newly created bar, into the container that holds all bars
    container.append(bar);

    //"closes" the modal used to insert values for the new bar
    modal.style.display = "block";
    formContent.style.display = "none";
    formHeader.style.display = "none";
    setTimeout(subAddClose, 2000)

    //increases the barCounter array with one, and puts it in the innerHTML of the subCount
    barCounter++
    subCount.innerHTML = barCounter;
    checkDuplicates()

    addBarSucces.style.display = "block";
    
    bar.addEventListener("click",function(){
        modalFill(bar);
    })
}

function subAddClose() {
    modal.style.display = "none";
}

//closes the modal when clicking anywhere else on the screen
span.onclick = function() {
    modal.style.display = "none";
  }

//Søren JS Slut

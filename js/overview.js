//Søren JS Start

const btn2 = document.querySelectorAll(".myBtn2");
let myBtn2Array = [];
for (let index = 0; index < btn2.length; index++) {
  const element = btn2[index];
  myBtn2Array.push(element);
}

const span2 = document.getElementsByClassName("close2")[0];
const adminAlert = document.getElementById("test");
const modal2 = document.getElementById("myModal2");
const closeModal = document.getElementById("closeModal");
const alertAdminSucces = document.getElementById("alert-admin-succes");
const confirmAlert = document.getElementById("confirmAlert");
const cancelSub = document.getElementById("red-cancel");
const cancelSubConfirm = document.getElementById("confirmCancelSuccesButton");
const alertBarValue = document.getElementById("alertBarValue");

//modal content id list

// thumbnail text
const modalThumbnailText = document.getElementById("modalThumbnailText");
//name of the sub, displayed in the top bar
const modalBarName = document.getElementById("modalBarName");
//support email
const modalSupportEmail = document.getElementById("modalSupportEmail");
//functionality of the sub
const modalSubFunctionality = document.getElementById("modalSubFunctionality");
//name of the admin, who created the sub
const modalAdminName = document.getElementById("modalAdminName");
//email of the admin, who created the sub
const modalAdminEmail = document.getElementById("modalAdminEmail");
//name of the client and or project the sub was created for
const modalProjectClient = document.getElementById("modalProjectClient");
//monthly price of the sub
const modalPrice = document.getElementById("modalPrice");
//the date of the sub creation
const modalCreationDate = document.getElementById("modalCreationDate");

//placeholder for selected bar
let currentOverviewBar = {};

function applyOnclickForModal2() {
  [].forEach.call(myBtn2Array, function(bar) {
      bar.onclick = function() {
        modalFill(bar);
        modal2.style.display = "block";

        //overrides placeholder with selected bar
        currentOverviewBar = bar;
      }
    })
}

applyOnclickForModal2();

span2.onclick = function() {
  modal2.style.display = "none";
  document.getElementById("alert-admin-parent").style.display = "none";
  document.getElementById("alert-admin-succes").style.display = "none";
  document.getElementById("cancel-sub-parent").style.display = "none";
  document.getElementById("subCancelSuccesParent").style.display ="none"
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

adminAlert.onclick = function myFunction() {
  document.getElementById("alert-admin-parent").style.display = "block";
}

confirmAlert.onclick = function confirmAlertFunction() {
  document.getElementById("alert-admin-succes").style.display = "block";
  document.getElementById("alert-admin-parent").style.display = "none";
}

cancelSub.onclick = function cancelSub() {
  document.getElementById("cancel-sub-parent").style.display = "block";
}

cancelSubConfirm.onclick = function cancelSubConfirm() {
  document.getElementById("subCancelSuccesParent").style.display ="block"
  document.getElementById("cancel-sub-parent").style.display = "none";
  removeBar(currentOverviewBar);
}

function modalFill(bar) {
  modalThumbnailText.innerHTML = bar.children[0].innerHTML;
  modalBarName.innerHTML = bar.children[1].innerHTML;
  modalProjectClient.innerHTML = bar.children[2].innerHTML;
  modalCreationDate.innerHTML = bar.children[3].innerHTML;
  modalAdminName.innerHTML = bar.children[4].innerHTML;
  modalSubFunctionality.innerHTML = bar.children[5].innerHTML;
  modalSupportEmail.innerHTML = bar.children[6].innerHTML;
  modalPrice.innerHTML = bar.children[7].innerHTML;
  modalAdminEmail.innerHTML = bar.children[8].innerHTML;
}

function removeBar(bar) {
  container.removeChild(bar);
}
//Søren JS Slut

let modal2 = document.getElementById("myModal2");
let btn2 = document.querySelectorAll(".myBtn2");
let span2 = document.getElementsByClassName("close2")[0];
let adminAlert = document.getElementById("test");
let closeModal = document.getElementById("closeModal");
let alertAdminSucces = document.getElementById("alert-admin-succes");
let confirmAlert = document.getElementById("confirmAlert");
let cancelSub = document.getElementById("red-cancel");
let cancelSubConfirm = document.getElementById("confirmCancelSuccesButton");

[].forEach.call(btn2, function(el) {
    el.onclick = function() {
        modal2.style.display = "block";
    }
  })

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
}
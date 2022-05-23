function myFunction() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
function enFunction() {
let knapper = ["hjem", "kalender", "nyheder","vitig_info",];
let text ="";
for (let i = 0; i < knapper.length; i++) {
  text += knapper[i]
  if(i==3){
    console.log(text);
  }
  else{
    console.log(i)
  }
}
}

let farver = ["white", "purple", "black","lightblue",];
let text ="";
for (let i = 0; i < farver.length; i++) {
  text += farver [i]
  if(i==2){
    console.log(text);
  }
  else{
    console.log(i)
  }
}

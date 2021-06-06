let theme = localStorage.getItem("theme")
if (theme==null) {
setTheme("purple")
}else{
  setTheme(theme)
}
let tdots = document.getElementsByClassName("themes")
console.log("working");
for (var i = 0; i < tdots.length; i++) {
tdots[i].addEventListener("click", function(){
let mode = this.dataset.mode
console.log("option clicked "+mode);
setTheme(mode)
   })
 }
function setTheme(mode){
if (mode == "purple") {
document.getElementById("theme-change").href="purple.css"
}

if (mode == "gray") {
document.getElementById("theme-change").href="gray.css"
}
if (mode == "green") {
document.getElementById("theme-change").href="green.css"
}
if (mode == "red") {
document.getElementById("theme-change").href="red.css"
}
localStorage.setItem("theme", mode)
}

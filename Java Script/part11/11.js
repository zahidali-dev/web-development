let div = document.querySelector("div");
let ol = document.querySelector("ol");
let li = document.querySelectorAll("li");


div.addEventListener("click", function(event){
console.log("div was clicked");}
)

ol.addEventListener("click", function(event){
event.stopPropagation();
console.log("ol was clicked");}
)
for(li of li){
li.addEventListener("click", function(event){
event.stopPropagation();
console.log("li was clicked");}
)
}
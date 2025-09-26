//Event
// for single button
/*
let btns = document.querySelectorAll("button");

for (let btn of btns) {
 // btn.onclick = function () {
    //alert("btn was clicked");
    // alert("btn was clicked");
  //};



  btn.onmouseenter = function () {
    alert("Mouse entered the button!");
  };
}




let btns = document.querySelectorAll("button");

for (let btn of btns) {
  btn.onclick = function () {
    console.log("btn was clicked");
    // alert("btn was clicked");
  };
btn.onmouseenetr=function(){
alert("btn was clicked");


}

}




let btns =document.querySelectorAll("buttons");

for (btn of btns) {

btn.onclick=function(){
alert("btn was clicked");
//alert("btn was clicked");
}
btn.onmouseenetr=function(){
alert("btn was clicked");


}
}

   

//for all button
let btns = document.querySelectorAll("button");



for (btn of btns) {
btn.onclick = sayHello;
}

function sayHello(){
console.log("Hello");

}




let btns = document.querySelectorAll("button");

for (let btn of btns) {
  btn.onclick = sayHello;


}

function sayHello() {
  alert("Hello");
}




 var btn=document.querySelectorAll("button");
console.dir(btn);
btn.onclick = function(){
// alert("btn was clicked");
console.log("btn was clicked");
}


 var btns=document.querySelectorAll("button");

for (btn of btns) {
btn.onclick= Hizahid; // if here we use () then automaticaly show alert function.
btn.onmouseenter = function(){
console.log("zk");
}

}

function Hizahid(){
alert("Hizahid");
}



 var btns=document.querySelectorAll("button");

for (btn of btns) {
btn.onclick= Hizahid; // if here we use () then automaticaly show alert function.
btn.onclick=sayName;

}

function Hizahid(){
alert("Hizahid");
}

function sayName(){
alert("Mahar Dibai");
}
 


// addEventListener(event, callback(){  });
var btns=document.querySelectorAll("button");

for (btn of btns) {
//btn.onclick= Hizahid;
//btn.onclick=sayName;
//btn.addEventListener("click", Hizahid); 
//btn.addEventListener("click", sayName); 
btn.addEventListener("dblclick", function() {
alert("btn was double clicked");});
}

function Hizahid(){
alert("Hi ZK");
}

function sayName(){
alert("Mahar Dibai");
}
// addeventlistener for other element
let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
alert("it was clicked");});
*/

// this key word use for object
let h1 =document.querySelector("h1");
let btn=document.querySelector("button");
var p=document.querySelector("p");

/*
h1.addEventListener("click", function(){
console.log(this.innerText);
this.style.backgroundColor="yellow";
  });

btn.addEventListener("click", function(){
console.log(this.innerText);
this.style.backgroundColor="yellow";
});

p.addEventListener("click", function(){
console.log(this.innerText);
this.style.backgroundColor="yellow";
});
*/
function changeColor(){
console.log(this.innerText);
this.style.backgroundColor="yellow";
}

h1.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

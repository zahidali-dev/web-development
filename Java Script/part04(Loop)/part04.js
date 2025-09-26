// loops 
// For loop
/*
console.log("set of contries using array and loop:");
var countries=["pakistan","China","Iran","India","Suadia arab"];


for(var z=0; z<countries.length; z=z+1){
console.log(z,countries[z]);
}




// print odd number 1 to 15

console.log("print odd number 1 to 15");

for(let s=1; s<=15; s=s+2){
console.log(s);
}



// reverse direction
console.log("print odd number 1 to 15 using reverse direction");


for(let s=15; s>0; s=s-2){
console.log(s);
}


console.log("print Even number 2 to 10");

for(var f=2; f<=10; f=f+2){
console.log(f);
}

// Infinite loop;
console.log("Infinite loop");

for(var z=1; z>=1; z=z+1){
console.log(z);
}
// Multiplication table 

console.log("5 mult table:");

for(let r=5; r<=50; r=r+5){
console.log(r);
}

// take number print table of

console.log("take user number for  mult table:");

var n = prompt("enter your table");
n = parseInt(n);
for(let g=n; g<=n*10; g=g+n){
console.log(g);
}

// nestled loop

for(s=1; s<=5; s=s+1){

console.log("Outer loop:");
for(z=1; z<=5; z=z+1){
console.log(z);
}
}



// While loop
console.log("While loop:");
let d=1;
while(d<=7){
console.log(d);
d++;
}

// Break Key Word
console.log("Break Key Word:");

var e=1;
while(e<=7){
if(e==4){
break;
}
console.log(e);
e=e+1;
}

// loops 
// For loop
console.log("set of contries using array and loop:");
var countries=["pakistan","China","Iran","India","Suadia arab"];


for(var z=0; z<countries.length; z=z+1){
console.log(z,countries[z]);
}

// for of loop
for(char of "ZAHID ALI MAHAR"){
console.log(char);
}


*/

let todo = [];

var req= prompt("Please enter your choice:");

 while(true) {
if(req=="qiut"){
console.log("Quitting app");
break;
}
else if(req=="list") {
console.log("-------------------");
for(let i=0; i<=todo.length; i++) {
console.log(i, todo[i]);
}

console.log("-------------------");

}

else if(req=="add") {
let task = prompt("Enter your task what you want to add");

todo.push();
console.log("addd task");

}
else if(req=="delete") {
let idx=prompt("enter what you want to delete");
todo.splice(idx,1);
console.log("task deleted");

}
else{
console.log("Wrong request:");
}
 req= prompt("Please enter your choice:");

}










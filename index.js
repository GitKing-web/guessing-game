const input = document.querySelector("#num");
const button = document.querySelector("#button");


button.addEventListener('click', function(e){
   e.preventDefault();
 const me = Math.floor(Math.random() * 10);
// console.log(me);
 if(input.value == ''){
   return alert('Enter a number')
 }
 else if(input.value == me){
   alert("Got it");
   input.value == "";
 } 
 
 else{
   alert("You are wrong");
   input.value = "";
 }
}); 
function calculator(val){
document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function calculate(){
document.getElementById("screen").value="";
}
function equal(){
var text=document.getElementById("screen").value;
var result=eval(text);
document.getElementById("screen").value=result;
}

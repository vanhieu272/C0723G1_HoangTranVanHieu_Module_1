function addFunction() {
  let result;
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let add = parseInt(num1 + num2);
  result = document.getElementById("Result").innerHTML =
    "Kết quả của " + num1 + " + " + num2 + " là " + add;
}
document.getElementById("addittion").addEventListener("click", addFunction);
/*************************************************************************************************************/
function subFunction() {
  let result;
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let sub = parseInt(num1 - num2);
  result = document.getElementById("Result").innerHTML =
    "Kết quả của " + num1 + " - " + num2 + " là " + sub;
}
document.getElementById("subtraction").addEventListener("click", subFunction);
/*************************************************************************************************************/
function multiFunction() {
  let result;
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let multi = parseInt(num1 * num2);
  result = document.getElementById("Result").innerHTML =
    "Kết quả của " + num1 + " * " + num2 + " là " + multi;
}
document
  .getElementById("multiplication").addEventListener("click", multiFunction);
/*************************************************************************************************************/
function diviFunction() {
  let result;
  let num1 = parseInt(document.getElementById("a").value);
  let num2 = parseInt(document.getElementById("b").value);
  let divi = parseFloat(num1 / num2);
  result = document.getElementById("Result").innerHTML =
    "Kết quả của " + num1 + " / " + num2 + " là " + divi;
}
document.getElementById("division").addEventListener("click", diviFunction);

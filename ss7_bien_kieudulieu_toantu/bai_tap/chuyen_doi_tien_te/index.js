document.getElementById("Convert").addEventListener("click", transferMoney);

function transferMoney() {
  let amount = document.getElementById("Amount").value;
  let from = document.getElementById("From").value;
  let to = document.getElementById("To").value;
  let result;
  if (from == "VND" && to == "USD") {
    result = amount / 23000 + "$";
  } else if (from == "USD" && to == "VND") {
    result = amount * 23000 + "VND";
  } else if (from == "VND" && to == "VND") {
    result = amount + "VND";
  } else {
    result = amount + "$";
  }
  document.getElementById("Result").innerHTML = "Result: " + result;
}

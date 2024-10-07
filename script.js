let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  let first = document.getElementById("firstInput").value;
  let secend = document.getElementById("secendInput").value;
  let firstInput = document.getElementById("firstInput").value.length;
  let secendInput = document.getElementById("secendInput").value.length;
  if (firstInput <= 2 || secendInput <= 2) {
    alert("Please, Enter your name.");
  } else {
    let myResult = firstInput * secendInput;
    document.getElementById("result").innerHTML = first +" & "+ secend + " have a love score of: "+ myResult + "%" +"❤️";
    if (myResult >= 100) {
      document.getElementById("result").innerHTML =first +" & "+ secend + " have a love score of: "+ 93 + "%" +"❤️";
    }
  }
});

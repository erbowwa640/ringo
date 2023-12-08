// function calculate() {
//   // Получаем значения из полей ввода
//   var num1 = parseFloat(document.getElementById("num1").value) || 0;
//   var num2 = parseFloat(document.getElementById("num2").value) || 0;
//   var num3 = parseFloat(document.getElementById("num3").value) || 0;
//   var num4 = parseFloat(document.getElementById("num4").value) || 0;
//   var num5 = parseFloat(document.getElementById("num5").value) || 0;
//   var num6 = parseFloat(document.getElementById("num6").value) || 0;

//   // Вычисляем и отображаем результаты
//   var resultDiv = document.getElementById("result");
//   resultDiv.innerHTML = "";

//   var sum12 = num1 + num2;
//   var sum13 = num1 + num3;
//   var sum14 = num1 + num4;
//   var sum15 = num1 + num5;
//   var sum16 = num1 + num6;
//   resultDiv.innerHTML +=
//     num1 +
//     "+" +
//     num2 +
//     "=" +
//     sum12 +
//     ";  " +
//     num1 +
//     "+" +
//     num3 +
//     "=" +
//     sum13 +
//     ";  " +
//     num1 +
//     "+" +
//     num4 +
//     "=" +
//     sum14 +
//     ";  " +
//     num1 +
//     "+" +
//     num5 +
//     "=" +
//     sum15 +
//     ";  " +
//     num1 +
//     "+" +
//     num6 +
//     "=" +
//     sum16 +
//     "<br>";
//   var sum21 = num2 + num1;
//   var sum23 = num2 + num3;
//   var sum24 = num2 + num4;
//   var sum25 = num2 + num5;
//   var sum26 = num2 + num6;
//   resultDiv.innerHTML +=
//     num2 +
//     "+" +
//     num1 +
//     "=" +
//     sum21 +
//     ";  " +
//     num2 +
//     "+" +
//     num3 +
//     "=" +
//     sum23 +
//     ";  " +
//     num2 +
//     "+" +
//     num4 +
//     "=" +
//     sum24 +
//     ";  " +
//     num2 +
//     "+" +
//     num5 +
//     "=" +
//     sum25 +
//     ";  " +
//     num2 +
//     "+" +
//     num6 +
//     "=" +
//     sum26 +
//     "<br>";
//   var sum31 = num3 + num1;
//   var sum32 = num3 + num2;
//   var sum34 = num3 + num4;
//   var sum35 = num3 + num5;
//   var sum36 = num3 + num6;
//   resultDiv.innerHTML +=
//     num3 +
//     "+" +
//     num1 +
//     "=" +
//     sum31 +
//     ";  " +
//     num3 +
//     "+" +
//     num2 +
//     "=" +
//     sum32 +
//     ";  " +
//     num3 +
//     "+" +
//     num4 +
//     "=" +
//     sum34 +
//     ";  " +
//     num3 +
//     "+" +
//     num5 +
//     "=" +
//     sum35 +
//     ";  " +
//     num3 +
//     "+" +
//     num6 +
//     "=" +
//     sum36 +
//     "<br>";
//   var sum41 = num4 + num1;
//   var sum42 = num4 + num2;
//   var sum43 = num4 + num3;
//   var sum45 = num4 + num5;
//   var sum46 = num4 + num6;
//   resultDiv.innerHTML +=
//     num4 +
//     "+" +
//     num1 +
//     "=" +
//     sum41 +
//     ";  " +
//     num4 +
//     "+" +
//     num2 +
//     "=" +
//     sum42 +
//     ";  " +
//     num4 +
//     "+" +
//     num3 +
//     "=" +
//     sum43 +
//     ";  " +
//     num4 +
//     "+" +
//     num5 +
//     "=" +
//     sum45 +
//     ";  " +
//     num4 +
//     "+" +
//     num6 +
//     "=" +
//     sum46 +
//     "<br>";
//   var sum51 = num5 + num1;
//   var sum52 = num5 + num2;
//   var sum53 = num5 + num3;
//   var sum54 = num5 + num4;
//   var sum56 = num5 + num6;
//   resultDiv.innerHTML +=
//     num5 +
//     "+" +
//     num1 +
//     "=" +
//     sum51 +
//     ";  " +
//     num5 +
//     "+" +
//     num2 +
//     "=" +
//     sum52 +
//     ";  " +
//     num5 +
//     "+" +
//     num3 +
//     "=" +
//     sum53 +
//     ";  " +
//     num5 +
//     "+" +
//     num4 +
//     "=" +
//     sum54 +
//     ";  " +
//     num5 +
//     "+" +
//     num6 +
//     "=" +
//     sum56 +
//     "<br>";
//   var sum61 = num6 + num1;
//   var sum62 = num6 + num2;
//   var sum63 = num6 + num3;
//   var sum64 = num6 + num4;
//   var sum65 = num6 + num5;
//   resultDiv.innerHTML +=
//     num6 +
//     "+" +
//     num1 +
//     "=" +
//     sum61 +
//     ";  " +
//     num6 +
//     "+" +
//     num2 +
//     "=" +
//     sum62 +
//     ";  " +
//     num6 +
//     "+" +
//     num3 +
//     "=" +
//     sum63 +
//     ";  " +
//     num6 +
//     "+" +
//     num4 +
//     "=" +
//     sum64 +
//     ";  " +
//     num6 +
//     "+" +
//     num5 +
//     "=" +
//     sum65 +
//     "<br>";
// }
function calculate() {
  // Получаем значения из полей ввода
  var num1 = parseFloat(document.getElementById("num1").value) || 0;
  var num2 = parseFloat(document.getElementById("num2").value) || 0;
  var num3 = parseFloat(document.getElementById("num3").value) || 0;
  var num4 = parseFloat(document.getElementById("num4").value) || 0;
  var num5 = parseFloat(document.getElementById("num5").value) || 0;
  var num6 = parseFloat(document.getElementById("num6").value) || 0;

  // Вычисляем и отображаем результаты
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  calculateAndDisplayResults1(num1, num2, resultDiv, "+");
  calculateAndDisplayResults1(num1, num3, resultDiv, "+");
  calculateAndDisplayResults1(num1, num4, resultDiv, "+");
  calculateAndDisplayResults1(num1, num5, resultDiv, "+");
  calculateAndDisplayResults1(num1, num6, resultDiv, "+");

  calculateAndDisplayResults1(num2, num3, resultDiv, "+");
  calculateAndDisplayResults1(num2, num4, resultDiv, "+");
  calculateAndDisplayResults1(num2, num5, resultDiv, "+");
  calculateAndDisplayResults1(num2, num6, resultDiv, "+");

  calculateAndDisplayResults1(num3, num4, resultDiv, "+");
  calculateAndDisplayResults1(num3, num5, resultDiv, "+");
  calculateAndDisplayResults1(num3, num6, resultDiv, "+");

  calculateAndDisplayResults1(num4, num5, resultDiv, "+");
  calculateAndDisplayResults1(num4, num6, resultDiv, "+");

  calculateAndDisplayResults1(num5, num6, resultDiv, "+");
}

function calculateAndDisplayResults1(num1, num2, resultDiv, operator) {
  var result = num1 + num2;
  if (result <= 36) {
    resultDiv.innerHTML += num1 + operator + num2 + "=" + result + "<br>";
  }
}

function calculate2() {
  // Получаем значения из полей ввода
  var num1 = parseFloat(document.getElementById("num1").value) || 0;
  var num2 = parseFloat(document.getElementById("num2").value) || 0;
  var num3 = parseFloat(document.getElementById("num3").value) || 0;
  var num4 = parseFloat(document.getElementById("num4").value) || 0;
  var num5 = parseFloat(document.getElementById("num5").value) || 0;
  var num6 = parseFloat(document.getElementById("num6").value) || 0;

  // Вычисляем и отображаем результаты
  var resultDiv = document.getElementById("result2");
  resultDiv.innerHTML = "";

  calculateAndDisplayResults(num1, num2, resultDiv, "-");
  calculateAndDisplayResults(num1, num3, resultDiv, "-");
  calculateAndDisplayResults(num1, num4, resultDiv, "-");
  calculateAndDisplayResults(num1, num5, resultDiv, "-");
  calculateAndDisplayResults(num1, num6, resultDiv, "-");

  calculateAndDisplayResults(num2, num3, resultDiv, "-");
  calculateAndDisplayResults(num2, num4, resultDiv, "-");
  calculateAndDisplayResults(num2, num5, resultDiv, "-");
  calculateAndDisplayResults(num2, num6, resultDiv, "-");

  calculateAndDisplayResults(num3, num4, resultDiv, "-");
  calculateAndDisplayResults(num3, num5, resultDiv, "-");
  calculateAndDisplayResults(num3, num6, resultDiv, "-");

  calculateAndDisplayResults(num4, num5, resultDiv, "-");
  calculateAndDisplayResults(num4, num6, resultDiv, "-");

  calculateAndDisplayResults(num5, num6, resultDiv, "-");
}

function calculateAndDisplayResults(num1, num2, resultDiv, operator) {
  var result = num1 - num2;
  if (result >= 0) {
    resultDiv.innerHTML += num1 + operator + num2 + "=" + result + "<br>";
  }
}

function handleCalcSum() {
  var S = 0;
  var x = document.getElementById("xFactor").value;
  var n = document.getElementById("nFactor").value;
  for (let i = 1; i <= n; i++) {
    S += x ** i;
  }
  document.getElementById("showResult").style.display = "block";
  document.getElementById("showTextResult").innerHTML = `Tổng: ${S}`;
}

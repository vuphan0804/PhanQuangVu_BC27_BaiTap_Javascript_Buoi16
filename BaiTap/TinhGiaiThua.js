function handleFactorial() {
  var S = 1;

  var n = document.getElementById("nFactorial").value;
  for (let i = 1; i <= n; i++) {
    S = S * i;
  }
  document.getElementById("showResult").style.display = "block";
  document.getElementById("showTextResult").innerHTML = `Kết quả: ${S}`;
}

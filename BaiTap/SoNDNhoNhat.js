function handleSubmit() {
  var S = 0;

  for (var i = 1; S + i < 10000; i++) {
    S += i;
  }
  document.getElementById("showResult").style.display = "block";
  document.getElementById(
    "showTextResult"
  ).innerHTML = `Số nguyên dương nhỏ nhất: ${i}`;
}

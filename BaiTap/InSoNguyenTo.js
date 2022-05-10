function printPrimeNumber() {
  var n = document.getElementById("nNumber").value;
  var primeNumber = "";
  for (let i = 2; i <= n; i++) {
    if (isPrime(i) === true) {
      primeNumber += i + " ";
    }
  }
  document.getElementById("showResult").style = "display:block";
  document.getElementById(
    "showTextResult"
  ).innerHTML = `Dãy số nguyên tố là: ${primeNumber}`;
}
function isPrime(n) {
  if (n < 2) return false;
  else if (n > 2) {
    if (n % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}

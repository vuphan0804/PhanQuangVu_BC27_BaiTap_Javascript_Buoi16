function createTagDiv() {
  var showResult = document.getElementById("showResult");
  var showTextResult = document.getElementById("showTextResult");

  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      oddDiv(showResult, showTextResult, i);
    } else {
      evenDiv(showResult, showTextResult, i);
    }
  }
}
function oddDiv(showResult, showTextResult, i) {
  showResult.style.display = "block";
  showResult.style = "background-color:blue";
  showTextResult.innerHTML = `Div lẻ ${i}`;
}

function evenDiv(showResult, showTextResult, i) {
  showResult.style.display = "block";
  showResult.style = "background-color:red";
  showTextResult.innerHTML = `Div chẵn ${i}`;
}

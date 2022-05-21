function createTagDiv() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      evenDiv(i);
    } else oddDiv(i);
  }
}
function oddDiv(i) {
  var oddDiv = document.createElement("div");
  oddDiv.innerHTML = `Div lẻ ${i}`;
  oddDiv.style.backgroundColor = "blue";
  oddDiv.style.color = "white";
  oddDiv.style.padding = "12px";
  document.getElementById("showResult").appendChild(oddDiv);
}

function evenDiv(i) {
  var evenDiv = document.createElement("div");
  evenDiv.innerHTML = `Div chẵn ${i}`;
  evenDiv.style.backgroundColor = "red";
  evenDiv.style.color = "white";
  evenDiv.style.padding = "12px";

  document.getElementById("showResult").appendChild(evenDiv);
}

function Q1Check() {
  if (document.getElementById("q1yes").checked) {
    document.getElementById("Q2").style.display = "block";
  } else {
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("passed").style.display = "none";
    document.getElementById("notpassed").style.display = "block";
  }
}

function Q2Check() {
  if (document.getElementById("q1yes").checked) {
    document.getElementById("Q3").style.display = "block";
  } else {
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("passed").style.display = "none";
    document.getElementById("notpassed").style.display = "block";
  }
}

function Q3Check() {
  if (document.getElementById("q1yes").checked) {
    document.getElementById("passed").style.display = "block";
    document.getElementById("notpassed").style.display = "none";
  } else {
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("passed").style.display = "none";
    document.getElementById("notpassed").style.display = "block";
  }
}

function refresh() {
  location.reload();
}
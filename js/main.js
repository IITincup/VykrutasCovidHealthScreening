window.onload = function datetime() {
  let date = new Date();
  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];;
  let formatedDate = date.getDate() + " " + month[date.getMonth()]; // + " " + date.getFullYear();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let formattedTime = date.getHours() + ":" + minutes;
  document.getElementById("passedtext").innerHTML += "<br/>" + "<br/>" +  formatedDate + "<br/>" +formattedTime;
  document.getElementById("notpassedtext").innerHTML += "<br/>" + "<br/>" + formatedDate + "<br/>" +formattedTime;
  console.log(formattedTime);
};

function Q1Check() {
  
  if (document.getElementById("q1no").checked) {
    document.getElementById("Q2").style.display = "block";
  } else {
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("passed").style.display = "none";
    document.getElementById("notpassed").style.display = "block";
  }
}

function Q2Check() {
  if (document.getElementById("q2no").checked) {
    document.getElementById("Q3").style.display = "block";
  } else {
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("passed").style.display = "none";
    document.getElementById("notpassed").style.display = "block";
  }
}

function Q3Check() {
  document.getElementById("Q2").style.display = "none";
  document.getElementById("Q3").style.display = "none";
  document.getElementById("passed").style.display = "none";

  if (document.getElementById("q3no").checked) {
    document.getElementById("passed").style.display = "block";
  } else {
    document.getElementById("notpassed").style.display = "block";
    
  }
}

function refresh() {
  location.reload();
}

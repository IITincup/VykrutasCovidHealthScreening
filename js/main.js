var adult = true;
var over12 = false;
window.onload = function datetime() {
  let date = new Date();
  // let month = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "June",
  //   "July",
  //   "Aug",
  //   "Sept",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let formatedDate = month[date.getMonth()] + " " + date.getDate();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedTime = "<br/>" + date.getHours() + ":" + minutes;
  let times = document.querySelectorAll("h1.time");

  times.forEach(
    (time) => (time.innerHTML = formatedDate + " " + formattedTime)
  );
};

function q1(who) {
  switch (who) {
    case "myself":
      document.getElementById("age").style.display = "block";
      document.getElementById("q1Under12").disabled = true;
      document.getElementById("q1Over12").disabled = true;
      break;
    case "over12":
      over12 = true;
      adult = false;
      document.getElementById("q1Under12").disabled = true;
      document.getElementById("q1Myself").disabled = true;
      document.getElementById("contact").style.display = "block";
      break;
    default:
      document.getElementById("q1Over12").disabled = true;
      document.getElementById("q1Myself").disabled = true;
      adult = false;
      document.getElementById("contact").style.display = "block";
      break;
  }
}

function age(age) {
  switch (age) {
    case "under":
      document.getElementById("who").style.display = "none";
      document.getElementById("exception").style.display = "block";
      break;
    default:
      document.getElementById("contact").style.display = "block";
      document.getElementById("ageUnder").disabled = true;
      break;
  }
}

function contact(YN) {
  switch (YN) {
    case "yes":
      document.getElementById("who").style.display = "none";
      document.getElementById("notpassed").style.display = "block";
      break;
    default:
      document.getElementById("travel").style.display = "block";
      document.getElementById("contactYes").disabled = true;

      break;
  }
}

function travel(YN) {
  switch (YN) {
    case "yes":
      document.getElementById("who").style.display = "none";
      document.getElementById("notpassed").style.display = "block";
      break;
    default:
      switch (adult) {
        case true:
          document.getElementById("fullSymptomps").style.display = "block";
          document.getElementById("travelYes").disabled = true;

          break;
        default:
          document.getElementById("seriousSymptomps").style.display = "block";
          document.getElementById("travelYes").disabled = true;

          break;
      }
      break;
  }
}

function fullSymptomps(YN) {
  switch (YN) {
    case "yes":
      document.getElementById("who").style.display = "none";
      document.getElementById("notpassed").style.display = "block";
      break;
    default:
      document.getElementById("proof").style.display = "block";
      document.getElementById("fullSymptomsYes").disabled = true;

      break;
  }
}

function seriousSymptomps(YN) {
  switch (YN) {
    case "yes":
      document.getElementById("who").style.display = "none";
      document.getElementById("notpassed").style.display = "block";
      break;
    default:
      document.getElementById("smallSymptomps").style.display = "block";
      document.getElementById("seriousSymptompsNo").disabled = true;

      break;
  }
}

function smallSymptomps(YN) {
  switch (YN) {
    case "yes":
      document.getElementById("who").style.display = "none";
      document.getElementById("notpassed").style.display = "block";
      break;
    default:
      switch (over12) {
        case true:
          document.getElementById("proof").style.display = "block";
          document.getElementById("smallSymptompsNo").disabled = true;

          break;
        default:
          document.getElementById("who").style.display = "none";
          document.getElementById("passed").style.display = "block";
          break;
      }
      break;
  }
}

function proof(YN) {
  switch (YN) {
    case "yes":
      document.getElementById("who").style.display = "none";
      document.getElementById("passed").style.display = "block";
      break;
    default:
      document.getElementById("who").style.display = "none";
      document.getElementById("notpassed").style.display = "block";
      break;
  }
}
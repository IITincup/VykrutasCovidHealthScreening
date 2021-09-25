var adult = true;
var over12 = false;

function datetime() {
  let date = new Date();
  let month = [ "Jan", "Feb","Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec", ];
  // let month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  let formatedDate = month[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedTime = "<br/>" + date.getHours() + ":" + minutes;
  let times = document.querySelectorAll("h1.time");

  times.forEach(
    (time) => (time.innerHTML = formatedDate + " " + formattedTime)
  );
}



function q1(who) {
  switch (who) {
    case "myself":
      document.querySelectorAll("h4.you").forEach((you) => (you.style.display = "inline"));
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
      document.querySelectorAll("h4.child").forEach((child) => (child.style.display = "inline"));
      window.scrollBy(0, 1000);
      break;
    default:
      document.getElementById("q1Over12").disabled = true;
      document.getElementById("q1Myself").disabled = true;
      adult = false;
      document.getElementById("contact").style.display = "block";
      document.querySelectorAll("h4.child").forEach((child) => (child.style.display = "inline"));
      window.scrollBy(0, 1000);
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
      window.scrollBy(0, 1000);
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
      window.scrollBy(0, 1000);
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
          window.scrollBy(0, 520);

          break;
        default:
          document.getElementById("seriousSymptomps").style.display = "block";
          document.getElementById("travelYes").disabled = true;
          window.scrollBy(0, 1000);
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
      window.scrollBy(0, 1000);
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
      window.scrollBy(0, 1000);
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
          window.scrollBy(0, 1000);
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
import entrepenurship from "/questions/entrepenurship.json" assert { type: "json" };
import bac from "/questions/bac.json" assert { type: "json" };
import market from "/questions/market.json" assert { type: "json" };
import bma from "/questions/bma.json" assert { type: "json" };
import finance from "/questions/finance.json" assert { type: "json" };
import hoptou from "/questions/hoptou.json" assert { type: "json" };
import perfinli from "/questions/perfinli.json" assert { type: "json" };


var data = entrepenurship;
var curAnswer = 0;
getData();

var total = 0;
var correctCount = 0;

function reset() {
  var ele = document.getElementsByName("answers");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

function getData() {
  var datas = data[getRandomInt(Object.keys(data).length)]

  datas[0] = datas[0].replaceAll("NEWLINE", "<br />");

  document.getElementById("question").innerHTML = datas[0];
  var shuffledIndex = shuffleArray([0, 1, 2, 3]);
  var shuffledArray = ["A. ", "B. ", "C. ", "D. "];
  var answeredArray = ["", "", "", ""];

  for (var i = 0; i < 4; i++) {
    shuffledArray[i] = shuffledArray[i] + datas[1][shuffledIndex[i]];
    answeredArray[i] = datas[1][shuffledIndex[i]];
  }

  var answerIndex = answeredArray.indexOf(datas[2]);
  curAnswer = answerIndex + 1;

  document.getElementById("la1").innerHTML = shuffledArray[0];
  document.getElementById("la2").innerHTML = shuffledArray[1];
  document.getElementById("la3").innerHTML = shuffledArray[2];
  document.getElementById("la4").innerHTML = shuffledArray[3];
}

function changeColor(value, colorz) {
  if (value.toString() == "1") {
    document.getElementById("la1").style.color = colorz;
  } else if (value.toString() == "2") {
    document.getElementById("la2").style.color = colorz;
  } else if (value.toString() == "3") {
    document.getElementById("la3").style.color = colorz;
  } else if (value.toString() == "4") {
    document.getElementById("la4").style.color = colorz;
  }
}

function changebutton() {
  document.getElementById("button").value = "Continue"
}

function check() {
  var radios = document.getElementsByName('answers');
  var value;
  var checked = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = radios[i].value;
      checked = true;
      if (value.toString() == curAnswer.toString()) {
        changeColor(value, "green");
        changebutton()
        correctCount += 1;
        addcorQ();
        
        return true;
      } else {
        changeColor(value, "red");
        changeColor(curAnswer, "green");
        changebutton();
        if (info["username"] != "") {
          addtotQ();
        }
        return true;
      }
    }
  }
  if (checked == false) {
    return false;
  }
}

function updateAccount(corQ = 0, totQ = 0) {//not done
  if (curAcc["Username"] != "") {
    updateInfo(corQ, totQ);
  }
}

function addcorQ() {
  if (info["username"] != "") {
    updateInfo(info["corQ"] + 1, parseInt(info["totQ"]) + 1);
  }
}

function addtotQ() {
  if (info["username"] != "") {
    updateInfo(info["corQ"], parseInt(info["totQ"]) + 1);
  }
}


function resetColors() {
  document.getElementById("la1").style.color = "black";
  document.getElementById("la2").style.color = "black";
  document.getElementById("la3").style.color = "black";
  document.getElementById("la4").style.color = "black";
}

document.getElementById('button').onclick = function() {
  if (document.getElementById("button").value == "Submit") {
    check();
    total += 1;
    reset();
  } else {
    getData();
    resetColors();
    document.getElementById("button").value = "Submit";
  }
  
  document.getElementById("score").innerHTML = correctCount.toString() + "/" + total.toString();

  if (total == 0, correctCount == 0) {
	document.getElementById("score2").innerHTML = "0%";
} else {
	document.getElementById("score2").innerHTML = Math.round(((correctCount / total) * 100) * 100) / 100 + "%";
}
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

document.getElementById('changeValue').onclick = function() {
  var e = document.getElementById("choices");
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
  switch(value) {
    case "bac" :
      data = bac;
      break;
    case "entrepeur":
      data = entrepeur;
      break;
    case "market" :
      data = market;
      break;
    case "bma" :
      data = bma;
      break;
    case "finance" :
      data = finance;
      break;
    case "hoptou" :
      data = hoptou;
      break;
    case "perfinli" :
      data = perfinli;
      break;
  }
  
  document.getElementById("header").innerText = "DECA " + text + " Practice Exam thingie";
  getData();
}

dragElement(document.getElementById("calculatormain"));

const element = document.querySelector('#examContent');
var viewportWidth = document.documentElement.clientWidth;
var wid = viewportWidth - 200;
element.style.cssText = "inline-size: " + wid.toString() + "px;";

var url = "https://fakesneakysnake.pythonanywhere.com";

var info = {
  "username": "",
  "password": "",
  "corQ": 0,
  "totQ": 0,
}

function updateInfo(corQ, totQ) {
  if (parseInt(corQ) != 0) {
    info["corQ"] = parseInt(corQ);
  }
  if (parseInt(totQ) != 0) {
    info["totQ"] = parseInt(totQ);
  }
  console.log(info)
  console.log(JSON.stringify({
    "username": info["username"],
    "password": info["password"],
    "corQ": info["corQ"],
    "totQ": info["totQ"]
  }));
  fetch(url + "/update", {
    method: "POST",
    body: JSON.stringify({
      "username": info["username"],
      "password": info["password"].trim(),
      "corQ": info["corQ"],
      "totQ": info["totQ"]
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })

}

function login(text) {
  text = text.replaceAll("[", "")
  text = text.replaceAll("]", "")
  text = text.replaceAll("\n", "")
  text = text.replaceAll('"', "")
  text = text.split(",")
  if (text == "Wrong") {
    alert("password incorrect or account does not exist")
  }
  if (text != "Wrong") {
    info["username"] = text[0].trim();
    info["password"] = text[1].trim();
    info["corQ"] = parseInt(text[2]);
    info["totQ"] = parseInt(text[3]);
    document.getElementById('signedinTag').innerHTML = "Signed In As: " + info["username"];
    document.getElementById('p2').style = "display:block";
    document.getElementById('p1').style = "display:none";

    resetColors();
    reset();

    correctCount = info["corQ"];
    total = info["totQ"];
    document.getElementById("score").innerHTML = correctCount.toString() + "/" + total.toString();

	if (total == 0, correctCount == 0) {
		document.getElementById("score2").innerHTML = "0%";
	} else {
		document.getElementById("score2").innerHTML = Math.round(((correctCount / total) * 100) * 100) / 100 + "%";
	}

    

  }

}

function resetInfo() {
  info = {
    "username": "",
    "password": "",
    "corQ": 0,
    "totQ": 0,
  }
}

document.getElementById('signOut').onclick = function() {
  document.getElementById('p1').style = "display:block";
  document.getElementById('p2').style = "display:none";
  reset();
  resetColors();
  resetInfo();
  reset();
}
document.getElementById('p1').style = "display:block";
document.getElementById('p2').style = "display:none";


document.getElementById('register').onclick = function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch(url + "/newAcc", {
    method: "POST",
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
    .then((response) => response.text())
    .then((text) => reg(text));

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch(url + "/login", {
      method: "POST",
      body: JSON.stringify({
        "username": username,
        "password": password
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
      .then((response) => response.text())
      .then((text) => login(text));
}

function reg(text) {
  console.log(text);
  if (text == "already exists") {
    alert("account already exists")
  }
}

document.getElementById('login').onclick = function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch(url + "/login", {
    method: "POST",
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    headers: {
      "Content-type": "application/json",
    }
  })
    .then((response) => response.text())
    .then((text) => login(text));
}

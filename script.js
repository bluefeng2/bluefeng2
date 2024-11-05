var entrepeur;
var bac;
var bma;
var finance;
var hoptou;
var perfinli;
var market;

await fetch("/questions/entrepenurship.json" ).then(response => response.json())
 .then(data => {
    entrepeur =data ;
 }); 

 await fetch("/questions/bac.json" ).then(response => response.json())
 .then(data => {
    bac =data ;
 }); 

 await fetch("/questions/bma.json" ).then(response => response.json())
 .then(data => {
    bma =data ;
 }); 

 await fetch("/questions/finance.json" ).then(response => response.json())
 .then(data => {
    finance =data ;
 }); 

 await fetch("/questions/hoptou.json" ).then(response => response.json())
 .then(data => {
    hoptou =data ;
 }); 

 await fetch("/questions/perfinli.json" ).then(response => response.json())
 .then(data => {
    perfinli =data ;
 }); 

 await fetch("/questions/market.json" ).then(response => response.json())
 .then(data => {
    market =data ;
 }); 


 window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if (window.mobileCheck()) {
  document.getElementById("side").style = "display:none";

}

var data = market;
var curAnswer = 0;
var aitoggle = false;
var wrongQuestions = [];
var currentQuestion = 0;
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
  if (aitoggle) { 
    
  } else {
    if (wrongQuestions.length >= 1 ) {
      if (wrongQuestions[0][1] == 0) {
        var num = wrongQuestions.shift()[0];
      } else {
        var num = getRandomInt(Object.keys(data).length);
        for (var i = 0; i < wrongQuestions.length; i++) { 
          wrongQuestions[i][1] -= 1;
        }
      }
    } else {
      var num = getRandomInt(Object.keys(data).length);
    }
    
    console.log(wrongQuestions);
    currentQuestion = num;
    console.log(num);
    var datas = data[num];
    
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
  }

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
        wrongQuestions.push([currentQuestion, 10]);
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

function aiHelpButton(onOff) {
  if (onOff) {
    document.getElementById('aiHelpButton').style.visibility = 'visible';
  } else {
    document.getElementById("aiHelpButton").style.visibility = "hidden";
  }
}
aiHelpButton(false);

const llmUrl = "https://api.groq.com/openai/v1/chat/completions";
const apiKey = "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";
function getAiHelp() {
  document.getElementById('aihelp').showModal();
  document.getElementById("aicontent").innerHTML = "Loading...";
  var question = document.getElementById("question").innerHTML + "\n" +  document.getElementById("la1").innerHTML + "\n" +  document.getElementById("la2").innerHTML + "\n" +  document.getElementById("la3").innerHTML + "\n" +  document.getElementById("la4").innerHTML;
  var query = 'Answer this question:\n\n'+question+'\n\nProvide an in-depth explanation of your answer. Include the question in your answer and make it less than 200 words. Make sure to include why this answer is correct and the others are wrong.';
  
  fetch(llmUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "messages": [
        {
          "role": "user",
          "content": query
        }
      ],
      "model": "llama3-8b-8192"
    })
  })
    .then((response) => response.text())
    .then((text) => setDialog(text));
  

    }

function setDialog(text) {
  var content = JSON.parse(text)["choices"][0]["message"]["content"];
  
  content = content.replaceAll("\n", "<br>");
  document.getElementById("aicontent").innerHTML = content;
}

document.getElementById('aiHelpButton').onclick = function() {
  getAiHelp();
}

document.getElementById('button').onclick = function() {
  if (document.getElementById("button").value == "Submit") {
    if(check()) {
      total += 1;
      reset();

      aiHelpButton(true);
    }
  } else {
    getData();
    resetColors();
    document.getElementById("button").value = "Submit";
    aiHelpButton(false)
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
  
  document.getElementById("header").innerText = "DECA " + text + " Practice Exam";
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

    document.getElementById("deleteacc").style.visibility = "visible";
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
  total = 0;
  correctCount = 0;
  document.getElementById("deleteacc").style.visibility = "hidden";
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
}

document.getElementById('deleteacc').onclick = function() {
  fetch(url + "/deleteAcc", {
    method: "POST",
    body: JSON.stringify({
      "username": info["username"],
      "password": info["password"]
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
    .then((response) => response.text())
    .then((text) => de2(text));
}
document.getElementById("deleteacc").style.visibility = "hidden";

function de2(text) {
  if (text == "completed") {
    alert("Account Deleted")
  } else if(text == "Wrong credentials") {
    alert("Wrong Credentials")
  } else {
    alert("error")
  }
  document.getElementById('p1').style = "display:block";
  document.getElementById('p2').style = "display:none";
  reset();
  resetColors();
  resetInfo();
  reset();
  total = 0;
  correctCount = 0;
  document.getElementById("deleteacc").style.visibility = "hidden";
}

function reg(text) {
  if (text == "already exists") {
    alert("account already exists")
  } else {
    alert("account created")
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

/*
document.getElementById('aibutton').onclick = function() {
    if (aitoggle) {
        document.getElementById('aibutton').innerHTML = "Turn on AI";
        document.getElementById('aiwarning').innerHTML = "";
        aitoggle = false;
    } else {
        document.getElementById('aibutton').innerHTML = "Turn off AI";
        document.getElementById('aiwarning').innerHTML = "May have bugs/increase wait time/wrong answers";
        aitoggle = true;
    }
}
*/
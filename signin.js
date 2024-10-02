var url = "http://127.0.0.1:5167";
import curAccount from "/curAcc.json" assert { type: "json" };
//import reset from "/script.js";


var info = {"username": "",
            "password": "",
            "corQ": 0,
            "totQ": 0,}
    

function getInfo() {
    return info;
}

function updateInfo(username = "", password = "", corQ = 0, totQ = 0) {
    if (username != ""){
        info["username"] = username;
    }
    if (password != ""){
        info["password"] = password;
    }
    if (parseInt(corQ) != 0){
        info["corQ"] = parseInt(corQ);
    }
    if (parseInt(totQ) != 0){
        info["totQ"] = parseInt(totQ);
    }

}

function login(text) {
    text = text.replaceAll("[","")
    text = text.replaceAll("]","")
    text = text.replaceAll("\n","")
    text = text.replaceAll('"',"")
    text = text.split(",")
    if (text != "Wrong") {
 
        info["username"] = text[0];
        info["password"] = text[1];
        info["corQ"] = parseInt(text[2]);
        info["totQ"] = parseInt(text[3]);
        
    }
    document.getElementById('signin').innerHTML = "<h1>signed in</h1>";
    reset();
}

document.getElementById('register').onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch(url+"/newAcc", {
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
        .then((text) => console.log(text));

        alert("account created");
}

document.getElementById('login').onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
        
    fetch(url+"/login", {
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
    .then((text) => login(text));
}

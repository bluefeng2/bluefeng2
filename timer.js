var timertime = 0;
var totTime = 0;
var ints;
var hasReset = 1;

function timerPause(){
	clearInterval(ints);
	document.getElementById('timerstartstop').value = "Start";
}

function timerStart(){
	
		ints = setInterval(moveTimer, 1000);	convertTimer();
	
}

document.getElementById('timerstartstop').onclick = function() {
	var docs = document.getElementById('timerstartstop').value;
	if (docs == "Start"){
		convertTimer()
		if (timertime != 0){
			document.getElementById('timerstartstop').value = "Pause";
			timerStart();
		}
		
	} else{
		timerPause();
	}
}

function moveTimer(){
	
	if (timertime == 0) {
		timerPause();
		alert("timer is up!!!");
	} else {
		timertime--;

	}
	document.getElementById("timercount").value = convertBack(timertime);
}

function convertTimer(){
	var str = document.getElementById("timercount").value.split(":");
	var total = parseInt(str[0])*3600+parseInt(str[1])*60+parseInt(str[2]);
	timertime = total;
	if (hasReset) {
		totTime = total;
		hasReset = 0;
	}
}

function convertBack(time){
	var s1 = parseInt(time/3600).toString();
	var s2 = parseInt((time-(s1*3600))/60).toString();
	var s3 = parseInt((time-(s1*3600)-(s2*60))).toString();

	var sees = [s1,s2,s3]
	for (var i = 0; i<3; i++){
		if (sees[i].length == 1){
				sees[i] = "0"+sees[i].toString();
		}
	}

	return sees[0]+":"+sees[1]+":"+sees[2];
}

document.getElementById('timerreset').onclick = function() {
	hasReset = 1;
	document.getElementById("timercount").value = convertBack(totTime);
	timerPause();
	document.getElementById('timerstartstop').value = "Start";
}
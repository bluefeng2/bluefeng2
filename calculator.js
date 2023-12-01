document.getElementById('calcButton').onclick = function() {
	var x = document.getElementById("calculatormain");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	var y = document.getElementById("calcButton");
	if (y.innerHTML == "Open Calculator"){
		y.innerHTML = "Close Calculator";
	} else{
		y.innerHTML = "Open Calculator";
	}
};

var x = document.getElementById("calculatormain");
if (x.style.display === "none") {
	x.style.display = "block";
} else {
	x.style.display = "none";
};
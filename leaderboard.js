var url = "https://fakesneakysnake.pythonanywhere.com";

function getInfo(type) {
  fetch(url + "/fetchAll", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
    .then((response) => response.json())
    .then((text) => setInfo(text, type));
}

var leaderboardMinimized = false;
document.getElementById('minimizeLeaderboard').onclick = function() {
  if (leaderboardMinimized) {
    document.getElementById("notnessecaryleaderboard1").innerHTML = '<select name="leaderboardChoices" id="leaderboardChoices"><option value="percentage">Correct Percentage</option><option value="total">Total Questions</option><option value="correct">Correct Questions</option></select>';
    document.getElementById("notnessecaryleaderboard2").innerHTML = '<p id="leaderboarditems">no one: 1<br>person: 1<br>person: 1</p><p style="font-size: 10px;">*accounts must have more than 10 questions answered to show up</p>';
    document.getElementById("minimizeLeaderboard").innerHTML = 'Minimize';
    leaderboardMinimized = false;
    getInfo();
  } else {
    document.getElementById("notnessecaryleaderboard1").innerHTML = '';
    document.getElementById("notnessecaryleaderboard2").innerHTML = '';
    document.getElementById("minimizeLeaderboard").innerHTML = 'Maximize';
    leaderboardMinimized = true;
  }
  
}
document.getElementById("notnessecaryleaderboard1").innerHTML = '';
document.getElementById("notnessecaryleaderboard2").innerHTML = '';
document.getElementById("minimizeLeaderboard").innerHTML = 'Maximize';
leaderboardMinimized = true;

function setInfo(values, type) {
  var indexToSortBy;
  var isPercentage = 0;
  for (var i = values.length-1; i >= 0; i--) {
    if (values[i][3] < 10) {
      values.splice(i, 1);
    }
  }

  switch (type) {
    case "total":
      indexToSortBy = 3;
      break;
    case "correct":
      indexToSortBy = 2;
      break;
    case "percentage":
      isPercentage = 1;
      break;
  }
  
  if (isPercentage) {
    
    for (var i = 0; i < values.length; i++) {
      if (values[i][2] == 0 && values[i][3] == 0) {
        values[i].push(0);
      } else {
        var percentage = values[i][2]/values[i][3];
        values[i].push(percentage);
      }
    }
    values.sort(function(a, b) {
      return a[4] - b[4];
    });
    values.reverse();
    var final = "";
    var count = 10;
    if (values.length <= 10) {
      count = values.length
    }
    // putting info on leaderboard
    for (var i = 0; i < count; i++) {
      var x = Math.round(((values[i][4]) * 100) * 100) / 100 + "%"
      final = final + values[i][0] + ": " + x + " "+values[i][2].toString() + "/" + values[i][3].toString()+"<br><br>"
    }

    final = final.slice(0,-4);


    document.getElementById("leaderboarditems").innerHTML = final
  } else { 
    values.sort(function(a, b) {
      return a[indexToSortBy] - b[indexToSortBy];
    });
    values.reverse();

    var final = "";
    var count = 10;
    if (values.length <= 10) {
      count = values.length
    }
    // putting info on leaderboard
    for (var i = 0; i < count; i++) {
      final = final + values[i][0] + ": " +values[i][indexToSortBy] + "<br><br>"
    }

    final = final.slice(0,-4);

    document.getElementById("leaderboarditems").innerHTML = final
  }

}

updateInfo();

function updateInfo() {
  setTimeout(updateInfo, 1000);
  if (leaderboardMinimized == false) {
    var e = document.getElementById("leaderboardChoices");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    getInfo(value);
  }
}

function chunkArray(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}

function sortMatrixByColumn(matrix, columnIndex) {
    // Use the sort() method to sort the matrix based on the elements in the specified column
    matrix.sort(function (a, b) {
        // Compare the elements in the specified column
        return a[columnIndex] - b[columnIndex];
    });

    // Return the sorted matrix
    return matrix;
}


function getTotQ(){
    
}

function getCorQ(){

}

function getCorPer(){

}
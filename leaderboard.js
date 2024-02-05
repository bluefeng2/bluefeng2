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

function setInfo(values, type) {
  var indexToSortBy;
  var isPercentage = 0;

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
      final = final + values[i][0] + ": " +values[i][indexToSortBy] + "<br>"
    }

    document.getElementById("leaderboarditems").innerHTML = final
  }

}

updateInfo();

function updateInfo() {
  var e = document.getElementById("leaderboardChoices");
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
  getInfo(value);
  setTimeout(updateInfo, 1000);
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
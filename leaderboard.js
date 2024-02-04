var url = "https://fakesneakysnake.pythonanywhere.com";


fetch(url + "/fetchAll", {
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
    .then((text) => setInfo(text));

function setInfo(values) {
    values = values.replaceAll("[", "")
    values = values.replaceAll("]", "")
    values = values.replaceAll("\n", "")
    values = values.replaceAll('"', "")
    values = values.split(",")
    values = chunkArray(values,4);
    console.log(values);
    console.log(sortMatrixByColumn([values],3))
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
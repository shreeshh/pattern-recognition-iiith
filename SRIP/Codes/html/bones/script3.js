
var t3 = [
["ID",18,32,42,47,56,86,95,98,126,138,145,147,161,189,198,203,226,241,246,266,296,301,313,334,344,5,20,23,34,44,46,49,55,58,81,88,111,117,134,154,155,163,168,171,173,177,184,196,227],
["Class",8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
["CRatio",0.163,0.195,0.175,0.126,0.201,0.156,0.156,0.168,0.155,0.174,0.107,0.172,0.126,0.165,0.143,0.153,0.201,0.110,0.231,0.219,0.150,0.131,0.191,0.197,0.161,0.131,0.098,0.083,0.117,0.100,0.143,0.092,0.131,0.120,0.151,0.155,0.145,0.155,0.106,0.089,0.125,0.120,0.153,0.120,0.143,0.112,0.156,0.131,0.136],
["ARatio",0.090,0.097,0.085,0.085,0.095,0.095,0.085,0.090,0.090,0.082,0.085,0.097,0.085,0.082,0.095,0.097,0.092,0.080,0.090,0.090,0.090,0.080,0.100,0.090,0.095,0.087,0.085,0.080,0.092,0.077,0.085,0.075,0.095,0.080,0.085,0.087,0.085,0.082,0.075,0.080,0.092,0.080,0.085,0.082,0.095,0.077,0.085,0.085,0.082],
["Perim",62,69,67,82,75,86,67,75,74,54,89,82,70,86,77,70,81,65,79,75,78,58,80,94,76,69,57,64,57,59,72,64,83,66,92,64,73,67,56,65,86,70,70,71,72,59,73,68,70],
["X-Sym",116,141,103,115,143,127,118,130,107,76,96,132,90,118,121,127,141,83,118,136,120,91,127,119,136,102,84,83,96,83,102,96,116,92,100,109,90,87,79,84,118,95,110,89,116,86,85,102,93],
["Y-Sym",117,141,104,86,127,123,109,120,95,85,102,128,90,101,122,120,144,82,115,135,124,81,124,105,131,102,85,83,105,78,97,82,94,82,109,104,96,93,75,74,104,84,105,88,101,88,68,103,92],
["Holes",3,3,3,3,3,3,3,3,2,3,3,2,3,2,4,3,2,3,3,3,3,2,3,3,2,2,2,2,2,2,2,1,2,3,3,2,2,2,2,1,2,2,2,2,2,2,2,2]
]
//taking transpose 
function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}
// check
function dispcheck(newt) {
	for( var i = 0; i <newt.length; i++){
		for(var j = 0; j<newt[0].length;j++) {
			document.write(newt[i][j]);
			document.write("____");
			if(j == newt[0].length-1) {
				document.write("<br>");
			};
		};
	};

};
//to append the path to image id
// function addpath(arr) {
// 	for (var i = 1; i<arr[0].length;i++){
// 		// id = arr[0][i];
// 		// const imgCell = document.createElement('td');
// 		// const arr[0][i] = document.createElement('img');
// 		// arr[0][i].src = `https://raw.githubusercontent.com/shreeshh/pattern-recognition-iiith/master/SRIP/Libraries/T1/${id}.gif`;
// 		// imgCell.appendChild(arr[0][1]);
// 		// arr[0].appendChild(imgCell);
// 		const imgCell = document.createElement('td');
// 		const img = document.createElement('img');
// 		img.src = `https://raw.githubusercontent.com/shreeshh/pattern-recognition-iiith/master/SRIP/Libraries/T1/${id}.gif`;
// 		imgCell.appendChild(img);
// 		arr[0].appendChild(imgCell);
// 	}
// 	return arr;
// }

// populating html table 
function makeTable(tableData) {
  var table = document.getElementById('table');
  var tableBody = document.getElementById('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });


  table.appendChild(tableBody);
  document.body.appendChild(table);  
}



makeTable(transpose((t3)));








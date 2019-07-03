
// test set 1 data
var t1= [
["ID",2,22,35,38,52,57,64,69,70,76,82,89,96,109,115,119,120,122,157,170,193,207,210,211,217,4,7,9,15,24,25,41,60,68,71,73,78,79,100,103,105,106,113,114,125,129,135,153,175,178],
['Class',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
['CRatio',0.190,0.204,0.216,0.237,0.279,0.277,0.300,0.148,0.273,0.202,0.231,0.201,0.242,0.161,0.269,0.153,0.281,0.285,0.161,0.246,0.184,0.239,0.235,0.100,0.174,0.092,0.093,0.061,0.055,0.089,0.123,0.081,0.097,0.074,0.123,0.057,0.097,0.107,0.068,0.052,0.059,0.112,0.074,0.118,0.052,0.109,0.141,0.078,0.057,0.117],
['ARatio',0.092,0.095,0.085,0.090,0.097,0.095,0.100,0.100,0.087,0.090,0.090,0.095,0.085,0.100,0.108,0.090,0.100,0.100,0.117,0.090,0.090,0.100,0.100,0.085,0.087,0.085,0.070,0.062,0.062,0.085,0.090,0.065,0.082,0.075,0.080,0.060,0.077,0.080,0.080,0.060,0.067,0.080,0.065,0.082,0.065,0.067,0.090,0.070,0.065,0.077],
['Perim',87,86,77,73,93,90,94,103,77,77,84,92,79,99,86,91,87,105,92,76,82,101,95,87,84,50,49,46,47,46,77,46,48,73,62,46,49,49,47,45,46,51,44,48,45,49,52,50,46,51],
['X-sym',131,143,113,132,149,150,154,72,125,127,135,110,107,112,136,108,166,111,120,105,98,140,110,92,125,86,52,39,28,86,104,50,85,71,74,28,75,88,72,31,53,81,34,79,48,48,107,58,51,77],
['Y-sym',137,133,119,130,125,139,160,96,116,128,127,109,108,124,132,116,160,142,123,107,115,104,102,90,104,84,69,45,33,85,100,45,83,79,72,40,75,91,74,38,53,84,53,87,51,62,108,58,47,82,],
['Holes',2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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

makeTable(transpose((t1)));







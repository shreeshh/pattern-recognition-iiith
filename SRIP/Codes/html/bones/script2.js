var t2 = [
["ID",6,17,26,29,77,83,110,118,121,123,144,160,162,172,179,181,188,190,191,200,214,221,234,253,254,8,11,13,28,31,45,50,51,75,87,99,108,112,131,136,137,150,158,180,182,199,204,208,216,229],
["Class",2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
['CRatio',0.168,0.151,0.248,0.260,0.143,0.246,0.126,0.256,0.244,0.140,0.155,0.179,0.214,0.216,0.155,0.098,0.252,0.206,0.184,0.167,0.242,0.223,0.183,0.174,0.229,0.223,0.163,0.225,0.300,0.155,0.098,0.186,0.106,0.153,0.120,0.118,0.186,0.292,0.126,0.201,0.104,0.219,0.195,0.223,0.206,0.160,0.184,0.161,0.204,0.103],
["ARatio",0.117,0.117,0.100,0.100,0.100,0.092,0.173,0.117,0.100,0.090,0.155,0.140,0.100,0.117,0.095,0.075,0.100,0.140,0.095,0.173,0.100,0.100,0.095,0.117,0.100,0.095,0.085,0.100,0.100,0.140,0.085,0.100,0.085,0.082,0.100,0.080,0.095,0.100,0.085,0.100,0.085,0.092,0.100,0.108,0.100,0.092,0.108,0.117,0.095,0.092],
["Perim",82,88,98,87,84,83,75,97,79,73,83,92,97,85,97,58,89,81,81,82,86,109,81,80,94,92,67,94,90,78,72,83,84,73,81,75,87,113,69,90,75,100,88,105,97,83,89,92,86,73],
["X-Sym",135,107,120,142,108,124,101,123,117,114,100,115,129,120,108,67,153,121,124,96,153,140,156,117,181,134,76,147,124,113,86,123,89,104,132,99,103,182,88,122,100,120,119,142,155,115,144,133,112,113,],
["Y-Sym",128,108,125,134,110,101,83,111,139,88,100,108,133,114,103,68,121,92,106,94,128,134,136,111,149,134,97,127,129,109,79,130,82,89,115,83,124,134,99,135,84,114,137,137,139,122,140,116,135,110],
["Holes",2,3,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1]
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



makeTable(transpose((t2)));








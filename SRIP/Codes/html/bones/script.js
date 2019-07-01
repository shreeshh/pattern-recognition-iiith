
// test set 1 data
var t1= [
["img",2,22,35,38,52,57,64,69,70,76,82,89,96,109,115,119,120,122,157,170,193,207,210,211,217,4,7,9,15,24,25,41,60,68,71,73,78,79,100,103,105,106,113,114,125,129,135,153,175,178],
['id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
['CR',0.190,0.204,0.216,0.237,0.279,0.277,0.300,0.148,0.273,0.202,0.231,0.201,0.242,0.161,0.269,0.153,0.281,0.285,0.161,0.246,0.184,0.239,0.235,0.100,0.174,0.092,0.093,0.061,0.055,0.089,0.123,0.081,0.097,0.074,0.123,0.057,0.097,0.107,0.068,0.052,0.059,0.112,0.074,0.118,0.052,0.109,0.141,0.078,0.057,0.117],
['AR',0.092,0.095,0.085,0.090,0.097,0.095,0.100,0.100,0.087,0.090,0.090,0.095,0.085,0.100,0.108,0.090,0.100,0.100,0.117,0.090,0.090,0.100,0.100,0.085,0.087,0.085,0.070,0.062,0.062,0.085,0.090,0.065,0.082,0.075,0.080,0.060,0.077,0.080,0.080,0.060,0.067,0.080,0.065,0.082,0.065,0.067,0.090,0.070,0.065,0.077],
['perim',87,86,77,73,93,90,94,103,77,77,84,92,79,99,86,91,87,105,92,76,82,101,95,87,84,50,49,46,47,46,77,46,48,73,62,46,49,49,47,45,46,51,44,48,45,49,52,50,46,51],
['X-sym',131,143,113,132,149,150,154,72,125,127,135,110,107,112,136,108,166,111,120,105,98,140,110,92,125,86,52,39,28,86,104,50,85,71,74,28,75,88,72,31,53,81,34,79,48,48,107,58,51,77],
['Y-sym',137,133,119,130,125,139,160,96,116,128,127,109,108,124,132,116,160,142,123,107,115,104,102,90,104,84,69,45,33,85,100,45,83,79,72,40,75,91,74,38,53,84,53,87,51,62,108,58,47,82,],
['holes',2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var t2 = [
[6,17,26,29,77,83,110,118,121,123,144,160,162,172,179,181,188,190,191,200,214,221,234,253,254,8,11,13,28,31,45,50,51,75,87,99,108,112,131,136,137,150,158,180,182,199,204,208,216,229],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[0.168,0.151,0.248,0.260,0.143,0.246,0.126,0.256,0.244,0.140,0.155,0.179,0.214,0.216,0.155,0.098,0.252,0.206,0.184,0.167,0.242,0.223,0.183,0.174,0.229,0.223,0.163,0.225,0.300,0.155,0.098,0.186,0.106,0.153,0.120,0.118,0.186,0.292,0.126,0.201,0.104,0.219,0.195,0.223,0.206,0.160,0.184,0.161,0.204,0.103],
[0.117,0.117,0.100,0.100,0.100,0.092,0.173,0.117,0.100,0.090,0.155,0.140,0.100,0.117,0.095,0.075,0.100,0.140,0.095,0.173,0.100,0.100,0.095,0.117,0.100,0.095,0.085,0.100,0.100,0.140,0.085,0.100,0.085,0.082,0.100,0.080,0.095,0.100,0.085,0.100,0.085,0.092,0.100,0.108,0.100,0.092,0.108,0.117,0.095,0.092],
[82,88,98,87,84,83,75,97,79,73,83,92,97,85,97,58,89,81,81,82,86,109,81,80,94,92,67,94,90,78,72,83,84,73,81,75,87,113,69,90,75,100,88,105,97,83,89,92,86,73],
[135,107,120,142,108,124,101,123,117,114,100,115,129,120,108,67,153,121,124,96,153,140,156,117,181,134,76,147,124,113,86,123,89,104,132,99,103,182,88,122,100,120,119,142,155,115,144,133,112,113,],
[128,108,125,134,110,101,83,111,139,88,100,108,133,114,103,68,121,92,106,94,128,134,136,111,149,134,97,127,129,109,79,130,82,89,115,83,124,134,99,135,84,114,137,137,139,122,140,116,135,110],
[2,3,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1]
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

// document.write("<h1>Imported data </h1><br>")
// dispcheck(t1)
newt1 = transpose(t1);
// document.write("<h1>After transposing </h1> <br>")
// dispcheck(newt1)

newt2 = transpose(t2);
// newt3 = transpose(t3);
//attempt1
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
makeTable(newt1);

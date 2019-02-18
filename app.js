var fs = require('fs');
fs.readFile('./package-lock.json',function(err, data){
	if(err) throw err;
	console.log(JSON.parse(data));
});

console.log('Selanjutnya....');
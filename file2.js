var fs = require('fs');
fs.readFile("demo.html","utf8", function(err,data){
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
        

})
console.log(" file operation completed");
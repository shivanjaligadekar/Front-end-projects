var fs = require('fs');
var ans=fs.readFileSync("demo.html", "utf8");
console.log(ans);
console.log("file operations completed");
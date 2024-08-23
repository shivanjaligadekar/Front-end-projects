var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'cdac'
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sample')
  .then(() => console.log('Connected!'));
  const Schema = mongoose.Schema;
  const usersSchema=new Schema({
    name:String,age:Number
  });
  const MyModel = mongoose.model('users', usersSchema);

// console.log("hello world!");
var express = require('express');
// console.log(typeof express );
var app = express();
// console.log(app);

//http://localhost:9000/users

app.get('/users',async function(req, res) {
    // res.send("get data from MongoDB");
    try {
        var ans=await MyModel.find();
        res.send(ans);
    }catch(err) {
        res.send("Something went to wrong");
    }
})
app.get('/mysqlusers', function(req, res) {
    connection.query('select * from emp', 
    function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    })
       
      });
app.post('/users', function(req, res) {
    res.send("store data from MongoDB");
})
app.put('/users', function(req, res) {
    res.send("update data from MongoDB");
})
app.delete('/users', function(req, res) {
    res.send("delete data from MongoDB");
})
app.listen(9000);

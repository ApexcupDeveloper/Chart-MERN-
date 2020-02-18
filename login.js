var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select * from tb_user where email='ui_email' and password='ui_pass'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
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
  var sql = "INSERT INTO tb_user (email, password, u_name, birthday, address, phone) VALUES ('ui_email', 'ui_pass', 'ui_name','ui_birth','ui_add','ui_phone')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

var connect=require("./mysql_c");
var connection=connect.connect();
 var category={
 	list:function(showList){
 		connection.query('SELECT * from categoey', function(err, rows){
          showList(rows);
    });
 },
 };
module.exports=category;
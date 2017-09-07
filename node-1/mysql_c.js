var mysql=require('mysql');




var connect={
	connect:function(){
		var connection=mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '12345678',
                database : 'news',
                port:'3306'
             });
              connection.connect();
              return connection;
	},
	
}
module.exports=connect;
var http=require("http");
var fs=require("fs");
var url=require("url");
var ejs=require("ejs");
var category=require("./categorydao");
var server=http.createServer(function(req,res){
	if(req.url=="/list"){
       category.list(function(rows){
            var  str=fs.readFileSync("./tpl/list.html", 'utf8');
            var  ret=ejs.render(str,{rows});
            console.log(rows);
               res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
      	       res.end(ret);
      	 });
     }else if(req.url=="/add"){
     	fs.readFile("./tpl/add.html",function(err,data){
     		 res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
     		 res.write(req.url)
     	   res.end(data);
     	})
     	
     }else{
     category.list(function(rows){
            var  str=fs.readFileSync("./tpl/list.html", 'utf8');
            var  ret=ejs.render(str,{rows});
            console.log(rows);
               res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
      	       res.end(ret);
      	 });
     }
    
});
server.listen(112,"127.0.0.1");

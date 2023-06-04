var mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database:"testing",
    part:3306
});

mysqlconnection.connect(function(err){
    if(err){
        console.log("connection failed "+JSON.stringify(err));
    }else{
        console.log("connection done successfully");
    }
});

module.exports=mysqlconnection;
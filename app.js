const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const routes=require("./router/routers");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/",routes);

app.listen(3007,function(){
    console.log("server started at port number 3007");
});

module.exports=app;
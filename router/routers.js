const express = require("express");
const router = express.Router();
const connection = require("../db/dbconnect");

//first url
//using the get method
//for reading the data
router.get("/products", function (req, resp) {
    connection.query("select * from product", function (err, data) {
        if (err) {
            resp.status(500).send("data not found " + JSON.stringify(err));
        } else {
            resp.send(data);//it will send data in the json format
        }
    });
});

//second url
//using the post method
//for writing the data
router.post("/products/product/:prodid", function (req, resp) {
    var prodid=req.body.prodid;
    var prodname=req.body.prodname;
    var qty=req.body.qty;
    var price=req.body.price;
    connection.query("insert into product values (?,?,?,?)", [prodid, prodname, qty, price], function (err, result) {
        console.log(result);
        if(err){
            resp.status(500).send("Data not inserted....");
        }else{
            resp.send("{'msg':'inserted successfully'}");
        }
    });
});

//third url
//using the put method
//for updation of data
router.put("/products/product/:prodid",function(req,resp){
    var prodid=req.body.prodid;
    var prodname=req.body.prodname;
    var qty=req.body.qty;
    var price=req.body.price;
    connection.query("update product set prodname=? , qty=? , price=? where prodid=?",[prodname,qty,price,prodid],function(err,result){
        console.log(result);
        if(err){
            resp.status(500).send("data not updated");
        }else{
            resp.send("data updated successfully!!!");
        }
    });
});

//fourth url
//using the delete method
//for deletion of data
router.delete("/products/product/:prodid",function(req,resp){
    connection.query("delete from product where prodid=?",[req.params.prodid],function(err,result){
        console.log(result);
        if(err){
            resp.status(500).send("Data Not Deleted....");
        }else{
            resp.send("Data is deleted!!!");
        }
    });
});

module.exports = router;
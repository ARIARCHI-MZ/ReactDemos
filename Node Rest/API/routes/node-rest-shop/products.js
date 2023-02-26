const express = require("express");
const router = express.Router();


router.post("/" , (req,res, next)=>{
    const product = {
        name : req.body.name,
        price : req.body.price,
    }
    res.status(200).json ({
        message: "this is post request with res status",
        createProduct : product
    })
    
}) 
router.get(`/:productID` , (req,res, next)=>{
    const id = req.params.productID;
    if (id === `special`) {
        res.status(200).json({
            message: "you discovered the special ID",
            id: id 
        })
    } else {
        res.status(200).json({
            message : "you passed an ID",
           
        });
    }
});

module.exports = router;
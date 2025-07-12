const express=require("express");
const { insertProduct } = require("../controllers/Product");
const router=express.Router();

router.post("/create",insertProduct);
module.exports=router;
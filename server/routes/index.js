const express=require("express");
const router=express.Router();

router.use("/product",require("./productroute"));
module.exports=router;
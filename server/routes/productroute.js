const express=require("express");
const { insertProduct,getAllProduct } = require("../controllers/Product");
const router=express.Router();

router.get("/getall",getAllProduct);
router.post("/create",insertProduct);
module.exports=router;
const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: Number, required: true },
  productimage: { type: String, required: true },
  categoryid: {type:mongoose.Schema.Types.ObjectId,
    ref:"Category",require:true},
})
const Product=mongoose.model("Product",productSchema);
module.exports=Product;
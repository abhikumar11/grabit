const mongoose = require("mongoose");
const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");

const insertProduct = async (req, res) => {
    try {
        const { name, quantity, price, productimage, catname, subcategory } = req.body;
        if (!name || !quantity || !price || !productimage || !catname || !subcategory) {
            return res.status(400).json({ message: "All fields are required" });
        }
        let iscat = await Category.findOne({ name: catname });
        if (!iscat) {
            iscat = await new Category({ name: catname }).save();
        }
        let pro = new Product({ name, quantity, price, productimage, categoryid: iscat._id, subcategory })

        const savedProduct = await pro.save();

        res.status(201).json({
            message: "Product added successfully",
            product: savedProduct,
            category: iscat,
        });
    } catch (err) {
        console.error("Error adding product:", err.message);
        res.status(500).json({ message: err.message });
    }
}
const getAllProduct=async(req,res)=>{
    try {
        const pro=await Product.find({}).populate("categoryid","name");
         res.status(201).json(pro);
    } catch (err) {
         console.error("Error while fetching product:", err.message);
        res.status(500).json({ message: err.message });
    }
}
module.exports = { insertProduct,getAllProduct };
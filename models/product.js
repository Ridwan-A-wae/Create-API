const mongoose =require("mongoose");

const ProductSchema = new mongoose.Schema({
    product_name: String,
    product_desc: String,
    product_price: Number,
    updated_at: {type:Date, default: Date.now}
})

module.exports = mongoose.model("Product",ProductSchema)
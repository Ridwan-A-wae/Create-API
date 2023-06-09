const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/product");

router.get('/', (req, res,) => {
    Product.find()
    .then(products => {
        res.json(products);
    }).catch(err => console.error(err));
});

// get
router.get('/:id',(req,res) => {
    Product.findById(req.params.id)
    .then(products => {
        res.json(products)
    }).catch(err => console.error(err))
})
// post
router.post('/',(req,res) => {
    Product.create(req.body)
    .then(products => {
        res.json(products)
    }).catch(err => console.error(err))
})
// put
router.put('/:id',(req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
    .then(products => {
        res.json(products)
    }).catch(err => console.error(err))
})

router.delete('/:id',(req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(products => {
        res.json(products)
    }).catch(err => console.error(err))
})



module.exports = router;

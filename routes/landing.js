const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('landing/index')
})

router.get('/products', (req,res)=>{
    res.render('product/index')
})
module.exports = router;
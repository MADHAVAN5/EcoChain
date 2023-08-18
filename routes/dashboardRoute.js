const express = require("express");

const router = express.Router();

// authentication routes
router.get("/marketplace",(req,res)=>{
    res.render('marketplace')
})

module.exports = router;
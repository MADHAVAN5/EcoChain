const express = require("express");

const router = express.Router();

// authentication routes
router.get("/industry",(req,res)=>{
    res.render('marketplace')
})

router.get("/dashboard",(req,res)=>{
    if(req.cookies.role == "government"){
        res.render('dashboard',{title:"Allocate Tokens for Industries",routeLink:'/allowance'})
    }else if (req.cookies.role == "individual"){
        res.render('dashboard',{title:"",routeLink:""})
    }else{
        res.render('dashboard',{title:"Update Co2 Emission",routeLink:"/mark-co2"})
    }
})

router.get("/mark-co2",(req,res)=>{
    res.render('markCo2')
})

router.get("/report-co2",(req,res)=>{
    res.render('reportCo2')
})

router.get("/allowance",(req,res)=>{
    res.render('allowance')
})

module.exports = router;
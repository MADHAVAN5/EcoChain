const express = require("express");

// route controller
const AuthController = require("../controller/authController");
const router = express.Router();

// authentication routes
router.get("/login", AuthController.Login)
router.get("/register", AuthController.Register)

router.post("/login", AuthController.Post)
router.post("/register", AuthController.Post)

router.get('/logout',(req,res)=>{
    res.clearCookie("name");
    res.clearCookie("role");
    res.clearCookie("walletID");
    res.redirect('/')
})
module.exports = router;
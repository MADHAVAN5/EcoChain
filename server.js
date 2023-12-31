require('dotenv').config()
const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const cors = require('cors')
var request = require('request');

app.set('view engine', 'ejs')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())

// const { createProxyMiddleware } = require('http-proxy-middleware');
// const flaskProxy = createProxyMiddleware({
//     target: 'http://192.168.137.160:3000', // Flask server address
//     changeOrigin: true,
//   });
// app.use('/ai', flaskProxy);

const PORT = 5000;

//Routes
const AuthenticationRoute = require('./routes/authRoutes.js')
const DashboardRoute = require('./routes/dashboardRoute')

app.use('/auth', AuthenticationRoute)
app.use('/',DashboardRoute)

app.set('view engine', 'ejs')


app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/transparency",(req,res)=>{
    res.render('transparent')
})

app.get("/all-emmision",(req,res)=>{
    res.render('allEmmission')
})




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
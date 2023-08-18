require('dotenv').config()
const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser())

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

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
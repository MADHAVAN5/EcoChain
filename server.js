const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 5000;

//Routes


app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))


app.use(bodyParser.json());
app.set('view engine', 'ejs')


app.get("/",(req,res)=>{
    res.render('index')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
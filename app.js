const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('public'));
app.listen(3020, () => {
    console.log("Servidor corriendo en el puerto 3020")
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})

app.post("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
})
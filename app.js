const express=require('express');
const hbs=require('hbs')
var app=express();


app.set('view engine','hbs');

app.get('/', (req,res) =>{
    res.render('index.hbs')
    // res.send('welcome to my website')
});
app.get('/home',(req,res)=>{
 res.send('welcome to home page')
})
app.get('/contact',(req,res)=>{
res.send('<h1>contact:amalraj1264@gmail.com</h1>')
})

app.listen(3000);
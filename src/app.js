/* const express=require('express');
const re=require('https');
console.log(express); */


const express = require('express');
const path = require('path')
const ejs = require('ejs');
const app = express();
const expressSession=require('express-session');
const Request = require('./models/request');
const MSG = require('./models/msg');
const cookieParser=require('cookie-parser');
require('./db/mongodb');
app.use(express.urlencoded({ extended: false }))

app.use(expressSession({secret:'hashahmed',saveUninitialized:true,resave:false}))
app.use(cookieParser());
const pathd = path.join(__dirname, '../public')
const pathd2 = path.join(__dirname, '../src')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const rout=require('./routers/rout');
const blog=require('./routers/blog');
const { Session } = require('inspector');
app.use(express.static(pathd));
app.use(express.static(pathd2));

app.set('view engine', 'ejs');
//hbs file
app.set('views', viewsPath);
//partials
/* ejs.registerPartials(partialsPath); */
app.use(rout)
app.use(blog)

const port = process.env.PORT || 3000;
/* app.get('*',(req,res)=>{
  res.redirect('/')
}) */
app.get('/test1', (req, res) => {

  res.render('playGroundh')

})
app.get('/test', (req, res) => {

  console.log(req.query);
  res.send({ data: 'done' })

})
app.listen(port, () => {

  console.log('connect on port:' + port)
})
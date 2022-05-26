var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
const layout = require("express-ejs-layouts");
app.use(layout);
app.listen(9099,_=>{
    console.log(`Server is running on PORT: ${9099}`);
});


const homeRoute = require('./routes/home_route');
app.use('/',homeRoute);


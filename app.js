var express=require("express");
var mypert=process.env.PORT || 3000;
var app=express();
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
/////////////////////////////////////////////////////////
//Home
app.get("/",(req,res)=>{
    res.render("home");
});
/////////////////////////////////////////////////////////
//News
app.get("/news",(req,res)=>{
    res.render("news/new");
});
app.get("/news/blog",(req,res)=>{
    res.render("news/blog");
});
app.get("/news/magzine",(req,res)=>{
    res.render("news/magzine");
});
/////////////////////////////////////////////////////////
//Days
app.get("/days",(req,res)=>{
    res.render("days/day");
});
app.get("/days/carnival",(req,res)=>{
    res.render("days/carnival");
});
app.get("/days/clan",(req,res)=>{
    res.render("days/clan");
});
app.get("/days/corporate",(req,res)=>{
    res.render("days/corporate");
});
app.get("/days/traditional",(req,res)=>{
    res.render("days/traditional");
});
/////////////////////////////////////////////////////////
//Events
app.get("/events",(req,res)=>{
    res.render("events/event");
});
app.get("/events/event1",(req,res)=>{
    res.render("events/event1");
});
/////////////////////////////////////////////////////////
//Departmental Fests
app.get("/departmentalfests",(req,res)=>{
    res.render("departmental fests/departmentalfest");
});
app.get("/departmentalfests/departmentalfest1",(req,res)=>{
    res.render("departmental fests/departmentalfest1");
});
/////////////////////////////////////////////////////////
//Login Signup Admin
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/signup",(req,res)=>{
    res.render("signup");
});
app.get("/admin",(req,res)=>{
    res.render("admin");
});
/////////////////////////////////////////////////////////
//Error Page Route
app.get("*",(req,res)=>{
    res.send("Wrong address");
});
/////////////////////////////////////////////////////////
app.listen(mypert, process.env.IP,(req,res)=>{
    console.log("SERVER CONNECTED");
});
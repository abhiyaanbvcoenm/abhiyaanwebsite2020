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
    res.render("news/news");
});
app.get("/news/blog",(req,res)=>{
    res.render("news/blog");
});
app.get("/news/magzine",(req,res)=>{
    res.render("news/magzine");
});
//News Curd
app.get("/news/new",(req,res)=>{
    res.render("news/new");
});
app.get("/news/show",(req,res)=>{
    res.render("news/show");
});
app.get("/news/edit",(req,res)=>{
    res.render("news/edit");
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
//Days Curd
app.get("/days/new",(req,res)=>{
    res.render("days/new");
});
app.get("/days/show",(req,res)=>{
    res.render("days/show");
});
app.get("/days/edit",(req,res)=>{
    res.render("days/edit");
});
/////////////////////////////////////////////////////////
//Events
app.get("/events",(req,res)=>{
    res.render("events/event");
});
app.get("/events/event1",(req,res)=>{
    res.render("events/event1");
});
//Events Curd
app.get("/events/new",(req,res)=>{
    res.render("events/new");
});
app.get("/events/show",(req,res)=>{
    res.render("events/show");
});
app.get("/events/edit",(req,res)=>{
    res.render("events/edit");
});
/////////////////////////////////////////////////////////
//Departmental Fests
app.get("/departmentalfests",(req,res)=>{
    res.render("departmental fests/departmentalfest");
});
app.get("/departmentalfests/departmentalfest1",(req,res)=>{
    res.render("departmental fests/departmentalfest1");
});
//Departmental Fests Curd
app.get("/departmentalfests/new",(req,res)=>{
    res.render("departmental fests/new");
});
app.get("/departmentalfests/show",(req,res)=>{
    res.render("departmental fests/show");
});
app.get("/departmentalfests/edit",(req,res)=>{
    res.render("departmental fests/edit");
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
//Footer links
//Previous Events
app.get("/previousevents",(req,res)=>{
    res.render("footer links/previousevents");
});
//About Developers
app.get("/aboutdevelopers",(req,res)=>{
    res.render("footer links/aboutdevelopers");
});
//Award
app.get("/awards",(req,res)=>{
    res.render("footer links/awards");
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
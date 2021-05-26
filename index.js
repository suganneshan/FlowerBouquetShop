const express= require('express'),
    app = express(),
    bodyparser= require('body-parser');
    app.use(express.static(__dirname));
    app.use(bodyparser.urlencoded({extended:false}))

// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/Flower Arrangements.html")
// })
// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/Bouqute Arrangements.html")
// })
// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/Contact.html")
// })
// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/login.html")
// })
app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/signup.html")
})
// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/enquiry.html")
// })
// app.get("/",(req, res)=>{
//     res.sendFile(__dirname+"/Feedback.html")
// })
// app.get("/details",(req, res)=>{
//     res.send("Hello "+req.query.fname+" !Welcome To our Flower GET METHOD");
// })
// app.post("/signup",(req, res)=>{
//     res.send("Hello "+req.body.fname+" !Welcome To our Flower"+req.body.lname+req.body.emailAddr+"POST METHOD");
// })
// app.post("/Feedback",(req, res)=>{
//     res.send("Hello "+req.body.lname+"Your Feed Back is Submited");
// })
// app.post("/Enquiry",(req, res)=>{
//     res.send("Hello "+req.body.emailAddr+"Your Enquiry is Submited");
// })
app.listen(7777,()=>{
     console.log("App Started");
})
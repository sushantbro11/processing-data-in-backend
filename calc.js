const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {

    // res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/index.html");
    
});


app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is: " + result);

});

app.get("/bmicalc", function(req, res) {

    // res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/bmiCalculator.html");
    
});

app.post("/bmicalc", function(req, res) {
    
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMI = weight / (height*height);

    
    res.send("The BMI is: " + BMI);
});


app.listen(port, function(){
    console.log("server started on port " + port);
});

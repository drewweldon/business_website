var express = require("express");

var bodyParser = require("body-parser"); // <- needed to use request body

var urlencodedParser = bodyParser.urlencoded({ extended: true });

var app = express();

app.use(bodyParser.json());

// app.use(express.static(__dirname + '/public'));

app.listen(8080, function() {
    console.log("Server running on port 8080");
});

app.post("/lawn-form", urlencodedParser, function (req, res) {
    console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
    console.log(req.body);
    res.json({response: 200});
});

app.get("/", function (req, res) {
    res.sendfile("index.html");
});    

app.get("/about", function (req, res) {
    res.sendfile("about.html")
});

app.get("/contact", function (req, res) {
    res.sendfile("contact.html")
});

app.get("/services", function (req, res) {
    res.sendfile("services.html")
});

app.get("/gallery", function (req, res) {
    res.sendfile("gallery.html")
});

// app.get("/css/style.css", function (req, res) {
//     res.sendfile("/CSS/style.css");
// }); 

app.get("/Images/grass.png", function (req, res) {
    res.sendfile("./Images/grass.png");
}); 

app.get("/Images/logo.jpg", function (req, res) {
    res.sendfile("./Images/logo.jpg");
}); 

app.get("/Images/wgga.gif", function (req, res) {
    res.sendfile("./Images/wgga.gif");
}); 

app.get("/Images/patio.JPG", function (req, res) {
    res.sendfile("./Images/patio.JPG");
}); 

app.get("/Images/lathambefore.jpg", function (req, res) {
    res.sendfile("./Images/lathambefore.jpg");
}); 

app.get("/Images/lathamafter.jpg", function (req, res) {
    res.sendfile("./Images/lathamafter.jpg");
}); 

app.get("/Images/curb.JPG", function (req, res) {
    res.sendfile("./Images/curb.JPG");
}); 

app.get("/Images/slater.jpg", function (req, res) {
    res.sendfile("./Images/slater.jpg");
}); 

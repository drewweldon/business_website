var express = require("express");

var bodyParser = require("body-parser"); // <- needed to use request body

var urlencodedParser = bodyParser.urlencoded({ extended: true });

var app = express();

app.use(bodyParser.json());

// app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000, function() {
    console.log("Server running on port 5000");
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

app.get("/img/grass.png", function (req, res) {
    res.sendfile("./img/grass.png");
}); 

app.get("/img/logo.jpg", function (req, res) {
    res.sendfile("./img/logo.jpg");
}); 

app.get("/img/wgga.gif", function (req, res) {
    res.sendfile("./img/wgga.gif");
}); 

app.get("/img/patio.JPG", function (req, res) {
    res.sendfile("./img/patio.JPG");
}); 

app.get("/img/lathambefore.jpg", function (req, res) {
    res.sendfile("./img/lathambefore.jpg");
}); 

app.get("/img/lathamafter.jpg", function (req, res) {
    res.sendfile("./img/lathamafter.jpg");
}); 

app.get("/img/curb.JPG", function (req, res) {
    res.sendfile("./img/curb.JPG");
}); 

app.get("/img/slater.jpg", function (req, res) {
    res.sendfile("./img/slater.jpg");
}); 

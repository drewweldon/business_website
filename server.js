var express = require("express");

var bodyParser = require("body-parser"); // <- needed to use request body

var urlencodedParser = bodyParser.urlencoded({ extended: true });

var app = express();

app.use(bodyParser.json());

// app.use(express.static(__dirname + '/public'));

const { Client } = require('pg')
var x = {
    user: "dtlylwefvejdfx",
    password: "506768297a78afdc6a2992de5964639b8682cc2c47183a1836549bfb21d3371b",
    host: "ec2-52-0-155-79.compute-1.amazonaws.com",
    port: 5432,
    database: "dbmrdrpa00turf",
    ssl: {
        rejectUnauthorized: false
    },
    url: "postgres://dtlylwefvejdfx:506768297a78afdc6a2992de5964639b8682cc2c47183a1836549bfb21d3371b@ec2-52-0-155-79.compute-1.amazonaws.com:5432/dbmrdrpa00turf"
};
const client = new Client(x);

var DbUtil = {

    addCustomer: function(values) {
        var sql = 'INSERT INTO Customers(first_name, last_name, email, phone_number, street_address, services, comments) VALUES($1, $2, $3, $4, $5, $6, $7);';
        client.connect();
        client.query(sql, values, (err, res) => {
            if (err) {
                console.error("Error saving data")
            }
            else {
            }
        })
    }
};

var Util = {
    convertToPSQL: function(values) {
        var newStr = '{';
        values.forEach(element => {
            newStr += element + ','
        });
        return newStr.substring(0, newStr.length - 1) + '}'
    }
};

app.listen(process.env.PORT || 5000, function() {
    console.log("Server running on port 5000");
});

app.post("/lawn-form", urlencodedParser, function (req, res) {
    console.log(req.body);
    var values = [];
    values.push(req.body['firstName']);
    values.push(req.body['lastName']);
    values.push(req.body['email']);
    values.push(parseInt(req.body['Phone Number']));
    values.push(req.body['Street Adress']);
    values.push(Util.convertToPSQL(req.body['Services']));
    values.push('');
    DbUtil.addCustomer(values);
    // res.json({response: 200});
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

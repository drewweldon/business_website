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
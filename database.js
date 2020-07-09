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

client.connect().then(client => {

}).catch(error => {
    console.log("something went wrong!!!");
    console.log(error);
});
client.query('SELECT * FROM Customers;', (err, res) => {
        if (err) {
            console.log("something went horribly wrong!!!!!");
        } else {
            console.log(res.rows[0]);
        }
    });
console.log("Success");
//client.query('select * from customers');
//(async () => {
//  await client.connect()
//  console.log("I have a successful database connection");
//  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//  console.log(res.rows[0].message) // Hello world!
//  await client.end()
//})()
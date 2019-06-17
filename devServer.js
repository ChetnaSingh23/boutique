var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


var employees = [
    {
        id: 1,
        name: "Venkat",
        designation: "CEO",
        age: 32,
        sex: "Male",
        description: "Lorem ipsum dolor sit",
        image: "data:image/jpeg;base64,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"   
    }, {
        id: 2,
        name: "Abhi",
        designation: "Software Engineer",
        age: 25,
        sex: "Male",
        description: "Lorem ipsum dolor sit",
        image: "https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"   
    }, {
        id: 3,
        name: "Madhura",
        designation: "Software Engineer",
        age: 24,
        sex: "Female",
        description: "Lorem ipsum dolor sit",
        image: "https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"   
    }
];

const botique_women = [
    {
        product_name:"kurti",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/81FQXxrH2HL._UY445_.jpg",
        available_sizes:["xs", "s", "m", "l", "xl"],
        price: 250,
        colour: "red multicolour",
        material: "cotton",
        product_availability: true,
        availability_count:10
    },
    {
        product_name:"kurti",
        product_image: "https://5.imimg.com/data5/WS/OI/MY-479445/designer-kurtis-500x500.jpg",
        available_sizes:["xs", "s", "m", "l", "xl"],
        price: 500,
        colour: "dark blue",
        material: "cotton",
        product_availability: true,
        availability_count:10
    }
];

const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com"
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/employees', function(req, res) {
   res.send(employees);
});
app.get('/employees/:id', function (req, res) {
    var employee = employees.filter(function(employee) { return employee.id == req.params.id})[0];
    res.send(employee);
});
app.post('/addemployee', function(req, res) {
    var allIds = employees.map(function(employee) { return employee.id});
    var nextId = Math.max.apply(Math, allIds) + 1;
    console.log(req.body);
});
app.get('/women', function(req,res) {
    console.log(`getting women products, ${req}, ${res}`);
    res.send(botique_women);
    
});
app.get('/user', (req,res) => {
    console.log('getting user profile', req, res);
    res.send(user);
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});
app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});

const express = require('express');
const router = express.Router();
var sql = require("mssql");

// declare axios for making http requests
var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');

//Initiallising connection string
var dbConfig = {
    user: "portaluser",
    password: "MerckApp1@",
    server: "localhost",
    database: "moviedb"
};



//Function to connect to database and execute query
var executeQuery = function (res, query) {
    sql.connect(dbConfig, (err) => {
        if (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else {
            console.log("Successfuly Connected to the Database :- ");
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, rs) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                    sql.close();
                }
                else {
                    console.log("Response Sent Successfuly- ");
                    res.send(rs);
                    sql.close();
                }
            });
        }
    });
}


var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

// Get all posts
router.post('/sendEmail', (req, res) => {
    let temp = req.body;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sairamreddy512@gmail.com',
            pass: 'Sram@225',
            ssl: true
        }
    });

    readHTMLFile(__dirname + '/TicketBookingConfimrationMaill.html', function (err, html) {
        var template = handlebars.compile(html);
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var replacements = {
            BookingID: "WM7KN5D",
            Amount: 100 * parseInt(temp.NumberOfSeats),
            Quantity: temp.NumberOfSeats,
            AmountPaid: 100 * parseInt(temp.NumberOfSeats),
            Date: dateTime,
            MovieName: temp.MovieName,
            showTime: temp.ShowTime,
            NumberOfSeats: temp.NumberOfSeats,
            SeatNumbers: temp.SeatNumbers
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: 'sairamreddy512@gmail.com',
            to: temp.Name,
            subject: 'Your Tickets Are Confirmed!',
            text: temp.NumberOfSeats + " " + temp.SeatNumbers,
            html: htmlToSend
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send(info.response);
            }
        });
    });
});

// Get all posts
router.post('/sendParkingEmail', (req, res) => {
    let temp = req.body;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sairamreddy512@gmail.com',
            pass: 'Sram@225',
            ssl: true
        }
    });

    readHTMLFile(__dirname + '/TicketConformationMailParking.html', function (err, html) {
        var template = handlebars.compile(html);
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var replacements = {
            BookingID: "WM7KN5D",
            Amount: "100",
            Quantity: "1",
            AmountPaid: "100",
            Date: dateTime
        };
        var htmlToSend = template(replacements);

        var mailOptions = {
            from: 'sairamreddy512@gmail.com',
            to: temp.Name,
            subject: temp.Sub,
            html: htmlToSend
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send(info.response);
            }
        });
    });
});


//GET API
router.get("/user", (req, res) => {
    console.log("Request Recived for the Get User");
    var query = "select * from [user]";
    executeQuery(res, query);
});

//POST API
router.post("/user", (req, res) => {
    console.log("Request Recived for the ADD User");
    let username = req.body.UserName;
    let password = req.body.Password;
    let email = req.body.Email;
    let bookings = req.body.Bookings;
    var query = "INSERT INTO [user] ( ID, UserName, Password, Email, Bookings ) VALUES (  '1' ," + "'" + username + "'" + ",  " + "'" + password + "'" + ", " + "'" + email + "'" + ", " + "'" + bookings + "'" + ")";
    executeQuery(res, query);
});

//PUT API
router.put("/user/:id", (req, res) => {
    console.log("Request Recived for the Update User");
    var query = "UPDATE [user] SET Name= " + req.body.Name + " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    executeQuery(res, query);
});

// DELETE API
router.delete("/user/:id", (req, res) => {
    console.log("Request Recived for the Delete User");
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    executeQuery(res, query);
});


module.exports = router;
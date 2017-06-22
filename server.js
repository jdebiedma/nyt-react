var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var History = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 9000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));


var databaseUri = "mongodb://localhost/nytreact";

if (process.env.MONGODB_URI) {

    mongoose.connect(process.env.MONGODB_URI);

} else {

    mongoose.connect(databaseUri);
}


// MongoDB Configuration configuration (Change this URL to your own DB)

var db = mongoose.connection;

var Article = require("./models/Article");

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


// Rest of the API Calls and such

app.get("/api", function(req, res) {

    Article.find({}).limit(5).exec(function (err, doc) {
        if(err){
            console.log(err);
        }
        else {
            console.log("Results:", doc);
            res.send(doc);
        }
    });
});

app.post("/api", function (req, res){

   Article.create({
        url: req.body.url,
        title: req.body.title,
        author: req.body.author
   }, function (err) {
       if (err) {
           console.log(err);
       }
       else {
           res.send("Article Saved!");
           console.log("Article: Saved!");
       }
   });
});



// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
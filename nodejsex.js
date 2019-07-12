/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});*/

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.createCollection("songdetails", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("music");
 var myobj = [
 { songname:'Tahniye Thananthaaniye',film:'Rythm',musicDirector:'A.R.Rahman',singer:'Shangar mahadevan'},
 { songname:'Evano oruvan',film:'Alai payuthe',musicDirector:'A.R.Rahman',singer:'Swarnalatha'},
 { songName:'Roja poonthottam',film:'Kannukkul Nilavu',musicDirector:'Illaiyaraja',singer:'unnikirshnan.Anuradha Sriram'},
 {  songName:'Vennilave Venninalve Vinnaithandi',film:'Minsara Kanavu',musicDirector:'A.R.Rahman',singer:'Hariharan Sadhana sargam'},
 {  songName:'Sollamal Thottu Chellum Thendral',film:'Dheena',musicDirector:'Yuvan Shankar Raja',singer:'Hariharan'},  ];
 dbo.collection("songdetails").insertMany(myobj, function(err, res) {
   if (err) throw err;
       console.log("Number of documents inserted: " + res.insertedCount);
       db.close();
     });
   });
   */




/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var query = {musicDirector : "A.R.Rahman"  };
  dbo.collection("songdetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*//*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var query = ({ $and:[{musicDirector:"A.R.Rahman"},
  { "singer" : "Swarnalatha"}] });
  dbo.collection("songdetails").find(query).toArray(
    function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*//*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myquery = { songname:'Tahniye Thananthaaniye' };
  dbo.collection("songdetails").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = { songname:'Kaadhalea Kaadhalea',film:'96',musicDirector:'Govind Vashatha',singer:'Chinmayi'};
  dbo.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var query = ( { $and:[{  film: 'Dheena',singer: 'Hariharan' }]});;
  dbo.collection("songdetails").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}, { projection: { _id: 0, singer: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

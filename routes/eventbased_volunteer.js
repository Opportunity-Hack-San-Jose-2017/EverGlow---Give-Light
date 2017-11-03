var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoSessionConnectURL = "mongodb://root:root@ds229435.mlab.com:29435/user_db";

	var walkathon_volunteer = function(req,res){
  

	MongoClient.connect(mongoSessionConnectURL, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    myCollection = db.collection('user_db');




	myCollection.find({
    "$and": [
        {
            "City": "San Jose"
        },
        {
            "$or": [
                {
                    "T": "Y"
                },
                {
                    "E": "Y"
                },
                {
                    "G": "Y"
                }
            ]
        }
    ]
})
  .toArray(function(err,ans1){

  
  if(err) {
            	console.log(err);
            	return;
            	}
				
  res
              .status(200)
              .json({"test":ans1});
               db.close();
  
  });
  
  });
}


var lunch_volunteer = function(req,res){
  

	MongoClient.connect(mongoSessionConnectURL, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    myCollection = db.collection('user_db');




	myCollection.find({
    "$and": [
        {
            "City": "San Jose"
        },
        {
            "$or": [
                {
                    "P": "Y"
                },
                {
                    "G": "Y"
                },
                {
                    "H": "Y"
                }
            ]
        }
    ]
})
  .toArray(function(err,ans1){

  
  if(err) {
            	console.log(err);
            	return;
            	}
				
  res
              .status(200)
              .json({"test":ans1});
               db.close();
  
  });
  
  });
}

var fundraiser_volunteer = function(req,res){
  

	MongoClient.connect(mongoSessionConnectURL, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    myCollection = db.collection('user_db');




	myCollection.find({
    "$and": [
        {
            "City": "San Jose"
        },
        {
            "$or": [
                {
                    "T": "Y"
                },
                {
                    "E": "Y"
                },
                {
                    "G": "Y"
                },
                {
                    "Y" : "Y"
                }
            ]
        }
    ]
})
  .toArray(function(err,ans1){

  
  if(err) {
            	console.log(err);
            	return;
            	}
				
  res
              .status(200)
              .json({"test":ans1});
               db.close();
  
  });
  
  });
}

exports.walkathon_volunteer = walkathon_volunteer;
exports.lunch_volunteer = lunch_volunteer;
exports.fundraiser_volunteer = fundraiser_volunteer;

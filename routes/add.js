var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	console.log('addFriend is running!');
	data.friends.push({
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	})
	res.render('add',{
		friends: data.friends,
	});
 }

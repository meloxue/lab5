var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
	var newfriend =
		{
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people",			
		}
	data.friends.push(newfriend);
	// Your code goes here
		console.log(newfriend);
	res.render("index.handlebars" , data);
};
 
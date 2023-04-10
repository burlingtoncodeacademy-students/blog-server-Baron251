const router = require("express").Router();

const db = require("../api/blog.json")

const fs = require("fs")

//      1      2    
router.get("/posts", (req, res) => {
	try {//       3           4
		res.status(200).json({db});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});
/* 
    1. Router method for postman
    2. Route in postman (http://localhost:4000/posts)
    3. Status 200; When status is this (everything's okay), try to get .json({db})
    4. Using .json method and getting back the database object `{}`

*/

// Finding a single post based on it's post_id
// 			 1
router.get("/:postId", (req, res) => {
	try { //			2
		let { postId } = req.params;
		// Filtering through the database by post_id, checking each post_id to see if it's equal to the req.params (aka, see if it's equal to postId)
		//					  3		  4				2.5
		let result = db.filter((i) => i.post_id == postId);
		res.status(200).json({
			status: `Found item at id: ${postId}`,
			result: result[0].post_id,
		});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});
/* 
	1. The `:` allows us to find specific posts or objects in a database
	2. Relating to 2.5, this is a field in postman
	2.5 We will find a post_id equal to what we put into postman
	3. We are filtering through the db. It does not matter what goes here, as long as it is used again where number 4 is. This assigns a label to the objects
	4. Look at every objects post_id, and display the post_id if it's equal to what we inputted in postman.
*/

router.post("/add-post", (req, res) => {
	try {
		const newPost = req.body;
		console.log(newPost);
		fs.readFile("./api/blog.json", (err, data) => {
			if (err) throw err;
			const db = JSON.parse(data);
			db.push(newPost);
			fs.writeFile("./api/blog.json", JSON.stringify(db), (err) =>
				console.log(err)
			);
		});
		res.status(200).json({
			status: "New post added",
			newPost,
		});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});
module.exports = router;
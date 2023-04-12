const router = require("express").Router();

<<<<<<< HEAD
=======
const { title } = require("process");
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
const db = require("../api/blog.json");

const fs = require("fs");

<<<<<<< HEAD
// GETing all posts
router.get("/posts", (req, res) => {
	try {
		// We want all the posts in the json, so we make the response the json file.
=======
// let postArr = [];

// const displayBlogPost = (post) => {
// 	const singlePost = document.querySelector(".one-post");

// 	let card = document.createElement("div")
// 	let body = document.createElement("div");
// 	let title = document.createElement("h4");
// 	let author = document.createElement("h5");
// 	let btn = document.createElement("a");

// 	card.className = "card"
// 	card.style.width = "18rem"
// 	card.className = "card-body"
// 	title.className = "post-title"
// 	title.textContent = post.title;
// 	author.className = "post-author"
// 	author.textContent = post.author
// 	body.className = "post-text"
// 	body.textContent = post.body
// 	btn.className = "btn view-post"
// 	btn.textContent = "View Post(s)"
// 	btn.onclick = () => {
// 		postArr.push(post)
// 	}

// 	title.appendChild(title);
// 	author.appendChild(author)
// 	body.appendChild(body)
// 	btn.appendChild(btn)
// 	singlePost.appendChild(card)
// };

// GETing all posts
router.get("/posts", (req, res) => {
	try {
				
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
		res.status(200).json({ db });
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});
// Finding a single post based on it's post_id
router.get("/:postId", (req, res) => {
	try {
		let { postId } = req.params;
		// Filtering through the database by post_id, checking each post_id to see if it's equal to the req.params (aka, see if it's equal to postId)
<<<<<<< HEAD
		// Also turning it into an array that we could index(see ../public/onePost.js, line 12)
		let post = db.filter((i) => i.post_id == postId);
		res.status(200).send({
			status: `Found item at id: ${postId}`,
			post,
			// ? Works with onePost.js when not sending json
			// `<h1>${post[0].title}</h1>`
=======
		let result = db.filter((i) => i.post_id == postId);
		res.status(200).json({
			status: `Found item at id: ${postId}`,
			result: result[0].post_id,
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
		});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});

router.post("/add-post", (req, res) => {
	try {
		const { title, author, body } = req.body;

		const newPostId = Number(db.length + 1);

<<<<<<< HEAD
		// Only reason the `post_id` has a value is because we're making it here in the controller rather than in postman
=======
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
		const newPost = {
			post_id: newPostId,
			title,
			author,
			body,
		};

<<<<<<< HEAD
=======
		// console.log(newPost);
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
		fs.readFile("./api/blog.json", (err, data) => {
			if (err) throw err;

			const db = JSON.parse(data);

<<<<<<< HEAD
			// We are making the posts new `post_id`, and making sure it's not the same as any others within the json

			let currentIDs = [];
			// For each object in the db, we will push the objects `post_id` into the currentIDs array
=======
			let currentIDs = [];

>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
			db.forEach((obj) => {
				currentIDs.push(obj.post_id);
			});

			if (currentIDs.includes(newPostId)) {
				let maxValue = Math.max(...currentIDs);
<<<<<<< HEAD
				// The newPostId will equal the number of IDs in the array, + 1
				newPostId = maxValue + 1;
				newPost.post_id = newPostId;
			
			}
			
=======
				newPostId = maxValue + 1;
				newPost.post_id = newPostId;
			}

>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
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

router.put("/:postId", (req, res) => {
	try {
<<<<<<< HEAD
=======
		console.log(req.params);
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
		const id = Number(req.params.postId);
		const post = req.body;

		fs.readFile("./api/blog.json", (err, data) => {
			if (err) throw err;
			const db = JSON.parse(data);
			let result;
			db.forEach((e, i) => {
				if (e.post_id == id) {
					db[i] = post;
					result = post;
<<<<<<< HEAD
					// Where the actual updating happens. Everything before this is the same as finding a single post by its post_id.
=======
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
					fs.writeFile("./api/blog.json", JSON.stringify(db), (err) =>
						console.log(err)
					);
				}
			});
			result
				? res.status(200).json({
						status: ` ID: ${id} was successfully updated`,
						object: result,
				  })
				: res.status(404).json({ status: `ID: ${id} was not found.` });
		});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});

router.delete("/:postId", (req, res) => {
	try {
		const id = Number(req.params.postId);

		fs.readFile("./api/blog.json", (err, data) => {
			if (err) throw err;

			const db = JSON.parse(data);
<<<<<<< HEAD
			// Filtering through the db, until we find what `post_id` is equal to our input in postman.
			const filteredDB = db.filter((e) => e.post_id !== id);
			// This makes a new array without the specified post_id(item). Then overwrites (deletes) the original array.
=======

			const filteredDB = db.filter((e) => e.post_id !== id);

>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe
			fs.writeFile("./api/blog.json", JSON.stringify(filteredDB), (err) =>
				console.log(err)
			);

			res.status(200).json({
				status: `ID: ${id} was successfully deleted.`,
			});
		});
	} catch (err) {
		res.status(500).send({
			err: err.message,
		});
	}
});

module.exports = router;

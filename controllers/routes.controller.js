const router = require("express").Router();

const { title } = require("process");
const db = require("../api/blog.json");

const fs = require("fs");

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

router.post("/add-post", (req, res) => {
	try {
		const { title, author, body } = req.body;

		const newPostId = Number(db.length + 1);

		const newPost = {
			post_id: newPostId,
			title,
			author,
			body,
		};

		// console.log(newPost);
		fs.readFile("./api/blog.json", (err, data) => {
			if (err) throw err;

			const db = JSON.parse(data);

			let currentIDs = [];

			db.forEach((obj) => {
				currentIDs.push(obj.post_id);
			});

			if (currentIDs.includes(newPostId)) {
				let maxValue = Math.max(...currentIDs);
				newPostId = maxValue + 1;
				newPost.post_id = newPostId;
			}

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
		console.log(req.params);
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

			const filteredDB = db.filter((e) => e.post_id !== id);

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

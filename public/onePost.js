// Change number at end of url to `2` to get other post
const url = "http://localhost:4000/routes/1";

const log = console.log;

const getOnePost = async () => {
	let res = await fetch(url);

	let result = await res.json();

	log(result.post);
	const onePost = result.post[0];

	// Unlike allPosts.js, we don't need to do a forEach, because we're looking for one post rather than all.
	// ? Giving the json a suit to wear in html. This is DOM.
	// Variables(Elements)
	let title = document.createElement("h1");
	let author = document.createElement("h3");
	let text = document.createElement("p");
	// Inner Text
	title.innerText = `${onePost.title}`;
	author.innerText = `${onePost.author}`;
	text.innerText = `${onePost.body}`;
	// Appending the children
	document.body.appendChild(title);
	document.body.appendChild(author);
	document.body.appendChild(text);
};

getOnePost();

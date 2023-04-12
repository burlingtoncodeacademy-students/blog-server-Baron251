const url = "http://localhost:4000/routes/posts";
<<<<<<< HEAD
const log = console.log;
=======


>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe

const getAllPosts = async () => {
	let res = await fetch(url);
	let result = await res.json();
<<<<<<< HEAD

	const posts = result.db;

	// For each object in the db, we are creating an element. The variable `title` will have the "h1" tag, `author will have "h3", and `text` will have "p". Then each of those variables will have innerText assigned to a element in the json using dot notation and string inerpolation. Finally we appendChild for each variable (We make them visible in html.)
	posts.forEach((post) => {
		// ? Gives the JSON a body in HTML. This is DOM.
		// Variables(Elements)
		let title = document.createElement("h1");
		let author = document.createElement("h3");
		let text = document.createElement("p");
		// Inner Text
		title.innerText = `${post.title}`;
		author.innerText = `${post.author}`;
		text.innerText = `${post.body}`;
		// Appending the children
		document.body.appendChild(title);
		document.body.appendChild(author);
		document.body.appendChild(text);
	});
};

getAllPosts();
=======
    
    console.log(result.db)

    const posts = result.db

    
    posts.forEach(post => {
        let titles = document.getElementsByClassName('post-title')
        // console.log(post.title)
        // titles = post.title
        console.log(titles)
    });
};

getAllPosts()
>>>>>>> 372c19b126488e3df9f8a4e0b1ca8c761d4a1ebe

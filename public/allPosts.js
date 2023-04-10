const url = "http://localhost:4000/routes/posts";



const getAllPosts = async () => {
	let res = await fetch(url);
	let result = await res.json();
    
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
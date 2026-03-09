const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

fetch("posts.json")
.then(res => res.json())
.then(posts => {

const post = posts.find(p => p.id == postId);

document.getElementById("post-title").textContent = post.title;
document.getElementById("post-date").textContent = post.date;
document.getElementById("post-content").textContent = post.content;
document.getElementById("post-image").src = post.image;

});

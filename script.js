// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click',()=>{
  navLinks.classList.toggle('active');
});

// Load Posts Dynamically from JSON
fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    const postsContainer = document.getElementById('posts');
    data.forEach(post=>{
      const postCard = document.createElement('div');
      postCard.classList.add('post-card');
      postCard.innerHTML = `
        <img src="${post.image}" alt="Blog Image">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <div class="post-meta">
            <span>By ${post.author}</span>
            <span>${post.date} · ${post.readTime}</span>
          </div>
          <a href="post.html?id=${post.id}">Read More →</a>
        </div>
      `;
      postsContainer.appendChild(postCard);
    });
  });

const Redis = require('ioredis');
const redis = new Redis();
document.getElementById('loginButton').addEventListener('submit', async function(event) {
  event.preventDefault();
  const userID = document.getElementById('userID').value;
  const password = document.getElementById('password').value;
  const storedPassword = await redis.get(userID);
  if (storedPassword === password) {
    document.write('Login successful!');
    window.location.href = 'user_page.html';
  } else {
    document.write('Invalid user ID or password!');
  }
});
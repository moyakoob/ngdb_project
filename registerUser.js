const redis = new Redis();
document.getElementById('registerButton').addEventListener('click', async function(event) {
  event.preventDefault();
  const userID = document.getElementById('userID').value;
  const password = document.getElementById('password').value;
  const userExists = await redis.exists(userID);
  if (userExists === 1) {
    document.getElementById('errorMessage').style.display = 'block';
  } else {
    await redis.set(userID, password);
    document.write('User registered:', userID);
    document.getElementById('errorMessage').style.display = 'none';
  }
});
const redis = new Redis(); // Connect to Redis (assuming it's running on localhost)

document.getElementById('searchButton').addEventListener('click', async function(event) {
  event.preventDefault();
  const orderID = document.getElementById('orderID').value;
  const orderExists = await redis.exists(orderID);
  const resultMessage = document.getElementById('resultMessage');
  if (orderExists === 1) {
    resultMessage.textContent = 'Go to WR1';
  } else {
    resultMessage.textContent = 'Not yet received';
  }
});
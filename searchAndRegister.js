const redis = new Redis();
document.getElementById('searchButton').addEventListener('click', async function(event) {
  event.preventDefault();
  const searchInput = document.getElementById('searchItem').value;
  const searchResult = await redis.get(searchInput);
  if (searchResult) {
    document.write('Item found:', searchResult);
  } else {
    document.write('Item not found');
  }
});
document.getElementById('registerButton').addEventListener('click', async function(event) {
  event.preventDefault();
  const orderID = document.getElementById('orderID').value;
  const orderExists = await redis.exists(orderID);
  if (orderExists === 1) {
    document.write('Order ID already exists. Error: Duplicate');
  } else {
    await redis.set(orderID, 'wr1');
    document.write('Order ID registered:', orderID);
  }
});
const axios = require('axios');

async function getUser() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching user: ${error}`);
  }
}

getUser();
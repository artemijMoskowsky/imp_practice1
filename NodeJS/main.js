const axios = require('axios');

async function getUser() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    console.log("Response ids:")
    console.log(response.data.map(e => e.id));
  } catch (error) {
    console.error(`Error fetching user: ${error}`);
  }
}

getUser();
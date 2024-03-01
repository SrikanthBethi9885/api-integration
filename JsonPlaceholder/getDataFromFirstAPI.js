const axios = require('axios');

// Function to get data from the first API
async function getDataFromFirstAPI() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log(response.data)
    return response.data; // Assuming the data is in JSON format
  } catch (error) {
    console.error('Error fetching data from the first API:', error.message);
    throw error;
  }
}
module.exports.getDataFromFirstAPI = getDataFromFirstAPI;
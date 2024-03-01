const axios = require('axios');
async function postDataToSecondAPI(payload) {
    console.log('Request Payload:', payload);
    try {
        
      const response = await axios.post('http://localhost:5000/api/addCustomers', payload, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers needed for the second API
        },
      });
      console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);
      return response.data; // Assuming the response data is in JSON format
    } catch (error) {
      console.error('Error posting data to the second API:', error.message);
      throw error;
    }
    
  }
  module.exports.postDataToSecondAPI=postDataToSecondAPI;
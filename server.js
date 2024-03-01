const express = require('express');
const { getDataFromFirstAPI } = require('./JsonPlaceholder/getDataFromFirstAPI');
const { postDataToSecondAPI } = require('./LocalPost/postDataToSecondAPI');
const app = express();

const port = 3001;

async function main() {
  try {
    // Step 1: Get data from the first API
    const firstAPIDataList = await getDataFromFirstAPI();
    // Ensure firstAPIDataList is an array before proceeding
    const dataArray = Array.isArray(firstAPIDataList) ? firstAPIDataList : [firstAPIDataList];
    
    // Step 2: Prepare payload 
    for (const firstAPIData of dataArray) {
        const payload = [{
        Id: firstAPIData.userId,
        name: firstAPIData.title,
        address: firstAPIData.body,
        customerid: firstAPIData.id,
      }];
      const response = await postDataToSecondAPI(payload);
      console.log('Response from the second API:', response);
    }
  } catch (error) {
    console.error('Error in the main process:', error.message);
  }
}
main();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

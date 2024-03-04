const axios = require('axios');
const fs = require('fs')

const filepath = './serviceReq.json'

async function getActivity(){
    try{
        const response=await axios.get('https://www.boredapi.com/api/activity')
        console.log(response.data)
    }catch(error){
        console.log(error)
    }
}
//getActivity()

function serviceRequest() {
    // Read the content of the JSON file
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // Parse the JSON data
        const jsonData = JSON.parse(data);
        const result = jsonData.map(item => {
            return item.serviceReqNumber
        })
        console.log(result)
        console.log(result.length)

    });
}

// Call the serviceRequest function
//serviceRequest();

function serviceRequest1() {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // Parse the JSON data
        const jsonData = JSON.parse(data);
        let serviceReqNumbers = [];
        for (let index = 0; index < jsonData.length; index++) {
            let element = jsonData[index];
            serviceReqNumbers.push(element.serviceReqNumber)
        }
        console.log(serviceReqNumbers)
        console.log(serviceReqNumbers.length)
    })
}
serviceRequest1()
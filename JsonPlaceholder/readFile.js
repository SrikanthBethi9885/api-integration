const fs = require('fs')

const fileContent = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContent)

fs.readFile('./file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})
//console.log(fileContent)
const res = fs.writeFileSync('./file.txt', 'Hello World')
console.log(res)
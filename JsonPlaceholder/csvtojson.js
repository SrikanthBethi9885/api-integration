const csv=require('csvtojson')
const fs=require('fs');
const filepath='./customers-100.csv'

async function get(){
    const customersjson=await csv().fromFile(filepath);
    //console.log(customersjson)
    let company=[];
    let country=[];
    let website=[];
    for(let index=0;index<customersjson.length;index++){
        let element=customersjson[index]
        company.push(element.Company);
        country.push(element.Country);
        website.push(element.Website)
    }
    console.log(country.length)
    const uniqueCountries = [...new Set(country)];
    console.log('uniqueCountries:', uniqueCountries.length);
    fs.writeFileSync('country.json',JSON.stringify(uniqueCountries,null,2));
    fs.writeFileSync('website.json',JSON.stringify(website,null,2))
}
get()

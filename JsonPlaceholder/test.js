const axios=require('axios')

async function getActivity(){
    try{
        const response=await axios.get('https://www.boredapi.com/api/activity')
        console.log(response.data)
    }catch(error){
        console.log(error)
    }
}
getActivity()
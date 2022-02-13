/**global  variable */
//create a new date instance dynamically whit js
let d =new Date();
// Personal API Key for OpenWeatherMap API
let baseURl = "http:api.openweathermap.org/data/forecast?zip=";
let apiKey = "&appid=4d4ae08339ca471314324f6c18374c";
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);
/* Function called by event listener */
function performAction(e){
    const newZip = document.getElementById('zip').Value;
    const feelings =document.getElementById('feelings').Value;
    getWeather(baseURl,newZip,apiKey)
    .then(function(data){
        console.log(data);
        /**add data to post requset */
        postData('/add',{data:d,temp:data.list[0].main.temp, content:feelings})
        updateUI();
    })

};
/* Function to GET Web API Data*/
const getWeather=async(baseURl,zip,key)=>{
try{
    const data =await res.json();
    return data;
}catch(errorr){
            console.log("error",error);
            //appropriately to post data
        }
}
/* Function to POST data */
const postData=async (url ='',data={})=>{
    console.log(data);
    const resoonse = await fetch(url,{
method:'POST',
credentials: 'same-origin',
headers:{
   'content-Type':'application/json',
},
body:JSON.stringify(data)
    });
    try{
        const newData =await Response.json();
        console.log(newDate);
       return newDate;
    }catch(error){
        console.log("error",error);
    }
}

/* Function to GET Project Data */
const updateUI=async()=>{
    const requset=await fetch('/weatherData');
    try{
        const allData=await requset.json();
        document.getElementById('date').innerHTML='Date:${allData[0].data}';
        document.getElementById('temp').innerHTML='Temperatur:${allData[0].temp}';
        document.getElementById('content').innerHTML='I feel: ${allData[0].content}';
    } catch(error){
        console.log("error",error);
    }
}
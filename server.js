// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port= 3000;
// Require Express to run server and routes
const express =require("express");
const bodyParser =require("bodyParser");
const cors =require("cors");

// Start up an instance of app
const app =express()
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
app.get("/weatherData", (a,b) =>{
    a.send(projectData)
})
app.post('/add',addData);
function addData(a,b){
    console.log(b.body);
    newEntry={
    date:req.body.date,
    temp:req.body.temp,
    content:req.body.content
    }
    projectData.push(newEntry);
}



// Setup Server
app.listen(port,()=>{
    console.log(" server is running in port:", port);
})
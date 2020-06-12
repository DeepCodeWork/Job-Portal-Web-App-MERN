const mongoose = require('mongoose');


//Connection URL for mongo atlas
const connectionURL = "mongodb+srv://jobportal:jobportal@job-portal-cluster-0-axqdb.mongodb.net/job-portal-database?retryWrites=true&w=majority";


//Connecting with the mongodb
mongoose.connect(connectionURL,
        {useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to database")
    }).catch((data)=>{
        console.log("Connection failed "+data);
})

const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")

//DB initiation
require('./db/mongodb');

//App init
const app = express();

//Setting up the port
const port = process.env.PORT || 3000;

// Middlewares
app.use(require('helmet')());
app.use(require('cors')());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// Right before app.listen()
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//routes
app.use('/api/employer', require('./routes/employer/employer'));







//Listening at dynamic port or 3000
app.listen(port,()=>{
    console.log("connected to port "+port);
});
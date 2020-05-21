const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')

const app = express();


//Define the port
const port = process.env.PORT || 5000;

//Allow CORS
app.use(cors());

//Initialize Body Parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

//Import Routes
const usersRoute = require('./routes/users');
const managerRoute = require('./routes/manager');

//Use Routes
app.use('/users', usersRoute);
app.use('/manager', managerRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


//Database Connection
mongoose.connect('mongodb+srv://root:bunny@cluster0-alh36.gcp.mongodb.net/OnlineFashionStore?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Database Connected Successfully!")
    })
    .catch((error) => {
        console.log(error)
    });

app.listen(port, () => {
    console.log("Server Started on port ", port);
});
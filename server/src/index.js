const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const cors = require('cors');
const {connectDB} = require('./config/db.config');
require('dotenv').config();
const v1ApiRoutes = require('./routes/index');

//routes imports

//middlewares
// app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//route middlewares
app.use('/api', v1ApiRoutes);

//server test route
app.get("/", (req, res) => {
    res.status(200).json({ message: "HGv2 server is running" })

})
//connection to database
connectDB();

//server listenng 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
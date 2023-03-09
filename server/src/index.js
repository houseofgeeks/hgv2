const express = require('express');
const app = express();
const PORT = 8000;
const dotenv= require('dotenv');
dotenv.config();
const {connectDB} = require('./database/database');
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
connectDB();

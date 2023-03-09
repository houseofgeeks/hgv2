const express = require('express');
const app = express();
const PORT = 8000;
const dotenv= require('dotenv');
const userRoutes = require('./src/routes/user_routes')
dotenv.config();
const {connectDB}=require('./src/database/database');
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
app.use(express.json());
connectDB();
app.use('/api/users',userRoutes);

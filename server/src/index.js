const express = require('express');
const app = express();
const PORT = 8000;
const dotenv= require('dotenv');
const userRoutes = require('./routes/user_routes');
const announcementRoutes = require('./routes/announcement_routes');
dotenv.config();
const {connectDB} = require('./database/database');
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
app.use(express.json());
connectDB();
app.use('/api/users',userRoutes);
app.use('/api/announcements',announcementRoutes);

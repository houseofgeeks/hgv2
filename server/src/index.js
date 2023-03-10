const express = require('express');
const app = express();
const PORT = 8000;
const dotenv= require('dotenv');
const userRoutes = require('./routes/user_routes');
const feedRoutes = require('./routes/feed_routes');
const {connectDB} = require('./database/database');
dotenv.config();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.use(express.json());

connectDB();

app.use('/api/users',userRoutes);
app.use('/api/feeds',feedRoutes);

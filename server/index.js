const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
const userRoutes = require("./routes/user_routes");
const announcementRoutes = require("./routes/announcement_routes");
const feedRoutes = require("./routes/feed_routes");
const fileUpload = require("express-fileupload");
const { connectDB } = require("./database/database");
const cors = require("cors");
const options = {
  origin: ["http://localhost:3000", "https://hgv2.vercel.app/"],
  useSuccessStatus: 200,
};
dotenv.config();
app.use(cors(options));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/feeds", feedRoutes);

app.use("/api/announcements", announcementRoutes);

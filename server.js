const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const { connection } = require("./config/database");
const dotenv = require("dotenv");
//Global Middlewares
dotenv.config({ path: "./config/.env" });
app.use(express.json());
connection();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

//Importing Routes

const uploadRoute = require("./routes/upload.route");
const likeRoute = require("./routes/like.route");
const commentRoute = require("./routes/comment.route");

//Implementing Routes

app.use("/api/v1", uploadRoute);
app.use("/api/v1/like", likeRoute);
app.use("/api/v1/comment", commentRoute);
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome",
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is up and running");
});

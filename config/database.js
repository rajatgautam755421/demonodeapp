const { connect } = require("mongoose");
//Connection to mongoDB through mongoose
const connection = () =>
  connect(
    "mongodb+srv://rajat:rajat12345@cluster0.m6swy.mongodb.net/upload",

    (error) => {
      if (!error) {
        console.log("Connected to DB");
      } else {
        console.log(error.message);
      }
    }
  );

module.exports = { connection };

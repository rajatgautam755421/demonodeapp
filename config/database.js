const { connect } = require("mongoose");
//Connection to mongoDB through mongoose
const connection = () =>
  connect(
    process.env.DB_CONNECTION,

    (error) => {
      if (!error) {
        console.log("Connected to DB");
      } else {
        console.log(error.message);
      }
    }
  );

module.exports = { connection };

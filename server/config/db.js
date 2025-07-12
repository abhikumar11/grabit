const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = () => {
     mongoose.connect(process.env.MONGODB_URI)
          .then(() => console.log("connected to database"))
          .catch((err) => {
               console.log("something went wrong", err.message);
               process.exit(1);
          });
};
module.exports = connectDb;

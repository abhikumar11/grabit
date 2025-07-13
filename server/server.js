const express = require("express");
const cors=require("cors");
const connectDb = require("./config/db");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
connectDb();

app.get("/api/ping", (req, res) => res.send("pong"));
app.use("/api", require("./routes"))
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})
require("dotenv").config();

const http = require("http");

const app = require("./app");

const connectDB =
require("./config/db");

connectDB();

const server =
http.createServer(app);

server.listen(
process.env.PORT,
()=>{
    console.log(
        `Server running on port ${process.env.PORT}`
    );
});
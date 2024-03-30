/*
 * Title: PCL CRM Dashboard Application
 * Description: API for administration
 * Author: Md Naim Uddin
 * Date: 25/03/2024
 *
 */

require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const main = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log(`server listening on ${port}`);
  });
};

main();

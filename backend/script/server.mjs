// import * as fs from "fs/promises";
import * as fs from "fs";
import * as http from 'http';
let route;
let data = {
    1:"hello world",
};
const port = 8000;
let file =fs.readFileSync('../data.json', "utf8");
let database = JSON.parse(file);

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","*"); // allows client to access data from server
    res.writeHead(200, { "Content-type": "text/html" });
    let flag = 0;
    if (flag === 0) {
      res.write(JSON.stringify(database));
      console.log(data);
      res.end();
    }
  })
  .listen(port, function () {
    console.log(`Server started at port ${port}`);
  });
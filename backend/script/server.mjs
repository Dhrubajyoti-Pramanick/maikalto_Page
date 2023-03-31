import * as fsPromise from "fs/promises";
import * as fs from "fs";
import * as http from 'http';

const port = 8080;
let file = fs.readFileSync('../data.json', "utf8");
let database = JSON.parse(file);

http
    .createServer(function (req, res) {
        try {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "*"); // allows client to access data from server
            res.writeHead(200, { "Content-type": "text/html" });
            let flag = 0;
            if (flag === 0) {
                res.write(JSON.stringify(database));
                res.end();
            }
            let formData = [];
            req.on("data", (formDataPieces) => {
                formData.push(formDataPieces);
            });
            req.on("end", () => {
                let formdata = Buffer.concat(formData).toString();
                if(req.url === '/form') {
                    let getData = async () => {
                        await fsPromise.appendFile("./formData.txt", formdata);
                    }
                    getData();
                } else if(req.url === '/email') {
                    let getData = async () => {
                        await fsPromise.appendFile("./emailData.txt", formdata);
                    }
                    getData();
                }
                
            })
            
            res.end();
        } catch (err) {
            console.log(err);
        }
    })
    .listen(port, function () {
        console.log(`Server started at port ${port}`);
    });
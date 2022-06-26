const http = require("http");
const vegetables = require("./vegetables.json");
const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/vegetables") {
    try {
      res.writeHead(200, { "Content-Type": "application/json" });
      const jsonString = fs.readFileSync("./vegetables.json", "utf-8");
      res.end(jsonString);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "page not found" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

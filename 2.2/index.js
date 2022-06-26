const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    if (req.method == "GET") {
      try {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);

        var year = Number(queryObject.year);
        var name = queryObject.name;
        console.log(name);
        let date = new Date();
        let curryear = date.getFullYear();
        var test = curryear - year;
        console.log(test);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<p>  hey ${name}  </p>`);
        res.write(`<p>  you are ${test} year old </p>`);
      } catch (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end({ error });
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end({ message: "please check the request method" });
    }
  })
  .listen(8080);

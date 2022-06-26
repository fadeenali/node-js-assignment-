const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    if (req.method == "GET") {
      try {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);

        var object = queryObject.object;
        var metric = queryObject.metric;
        var radios = queryObject.radios;

        console.log(object, metric, radios);

        if (object == "circle") {
          let area = (Math.PI * Math.pow(radios, 2)).toFixed(2);
          console.log(area);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(`<p> ${metric} of ${object} is ${area} </p>`);
          res.end();
        } else if (object == "sphere") {
          let volume = ((4 / 3) * Math.PI * Math.pow(radios, 3)).toFixed(2);
          console.log(volume);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(`<p> ${metric} of ${object} is ${volume} </p>`);
          res.end();
        }
      } catch (error) {
        res.write({ message: error });
        res.end();
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end({ message: "please check the request method" });
    }
  })
  .listen(8000);

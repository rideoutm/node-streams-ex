const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //   fs.readFile("./starter/test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //streams solution
  //   const readable = fs.createReadStream("./starter/tesst-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });

  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });

  //solution 3 - readableSource.pipe(writeableDestination)
  const readable = fs.createReadStream("./starter/test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("LISTENING ON PORT 8000");
});

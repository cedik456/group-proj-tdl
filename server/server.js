const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-type", "application/json");

  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/api/message" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Hello from the backend" }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Page not Found" }));
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

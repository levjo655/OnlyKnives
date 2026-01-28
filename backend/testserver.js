// testserver.js
import express from "express";

const app = express();
const PORT = 23456;

app.get("/", (req, res) => res.send("OK"));

app.listen(PORT, "127.0.0.1", () =>
  console.log(`✅ Express listening on ${PORT}`),
);

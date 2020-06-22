import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "World" });
});

app.listen(3333, () => {
  console.log("🚀 Server running on port 3333!");
});

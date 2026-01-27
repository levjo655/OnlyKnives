import express from "express";

const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
  console.log("Body received:", req.body);
  res.json({ received: req.body });
});

const PORT = 12345;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

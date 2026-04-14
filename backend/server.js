import express from "express";
import "dotenv/config";
import cors from "cors";
import knifePostRoutes from "./routes/knifePosts.js";
import usersRouter from "./routes/users.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/knife_posts", knifePostRoutes);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("OnlyKnives API running");
});

app.listen(port, () => {
  console.log(`🚀 API running on port ${port}`);
});

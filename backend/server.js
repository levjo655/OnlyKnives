import express from "express";
import userRouter from "./routes/users.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

const PORT = 23456;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`🚀 Express listening on 127.0.0.1:${PORT}`);
});

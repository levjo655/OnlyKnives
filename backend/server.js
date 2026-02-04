import express from "express";
import cors from "cors";
import userRouter from "./routes/users.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/users", userRouter);

const PORT = 23456;
app.listen(PORT, () => {
  console.log(`🚀 Express listening on port ${PORT}`);
});

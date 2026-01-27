import express from "express";
import userRouter from "./routes/users.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(4000, () => console.log("Server running on port 4000"));

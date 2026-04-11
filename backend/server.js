import express from "express";
import "dotenv/config";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";

import usersRouter from "./routes/users.js";

const app = express();
const port = process.env.PORT || 8080;

// --------------------
// Middleware
// --------------------
app.use(cors());
app.use(express.json());

// --------------------
// Auth0 JWT middleware
// --------------------
const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE, // https://api.onlyknives.com/
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: "RS256",
});

// --------------------
// Public routes
// --------------------
app.get("/", (req, res) => {
  res.send("OnlyKnives API running");
});

// --------------------
// Protected routes
// --------------------
app.use("/users", usersRouter); // users.js decides what is protected

// Example of fully protected route
app.get("/protected", jwtCheck, (req, res) => {
  res.json({
    message: "You are authenticated",
    user: req.auth.payload,
  });
});

app.listen(port, () => {
  console.log(`🚀 API running on port ${port}`);
});

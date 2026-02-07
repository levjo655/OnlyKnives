import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config"; // if using ES modules
import { auth } from "express-oauth2-jwt-bearer";

const app = express();

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "https://api.onlyknives.com/",
  issuerBaseURL: "https://dev-c75uake4disagurx.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
console.log(process.env);

// enforce on all endpoint

app.listen(port);

console.log("Running on port ", port);

import express from "express";
import bcrypt from "bcrypt";
const app = express();
import { auth } from "express-oauth2-jwt-bearer";

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: "https://api.onlyknives.com/",
  issuerBaseURL: "https://dev-c75uake4disagurx.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// enforce on all endpoints
app.use(jwtCheck);

app.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

app.listen(port);

console.log("Running on port ", port);

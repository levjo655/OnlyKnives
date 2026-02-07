import axios from "axios";
import "dotenv/config";

// Load from .env
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN; // e.g., dev-abc123.us.auth0.com
const CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
const AUDIENCE = process.env.AUTH0_AUDIENCE; // your API identifier

async function getAccessToken() {
  const tokenUrl = "https://dev-c75uake4disagurx.us.auth0.com/oauth/token";

  const payload = {
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE,
  };

  try {
    const res = await axios.post(tokenUrl, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data.access_token; // this is your Bearer token
  } catch (err) {
    console.error(
      "Failed to get access token:",
      err.response?.data || err.message,
    );
  }
}

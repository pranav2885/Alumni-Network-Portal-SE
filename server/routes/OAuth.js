const router = require("express").Router();
const axios = require("axios");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

router.get("/api/auth/callback/google", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ msg: "Authorization code is missing" });
  }

  try {
    // Get token from Google OAuth2
    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      null,
      {
        params: {
          code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URI,
        },
      }
    );

    // Get user info from Google using the access token
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.data.access_token}`,
        },
      }
    );

    let { given_name: displayName, email, picture: photoUrl } = userInfo.data;

    // Capitalize display name
    displayName = capitalizeFirstLetterOfEachWord(displayName);

    // Check if the user exists in the database
    let user = await User.findOne({ email });

    if (!user) {
      // If user does not exist, create a new one
      user = new User({ email, displayName, photoUrl });
      await user.save();
    }

    // Retrieve updated user data from the database
    const currentUser = await User.findOne({ email }).lean();

    // Create JWT token
    const jwt_access_token = jwt.sign(
      {
        _id: currentUser._id,
        email: currentUser.email,
        displayName: currentUser.displayName,
        photoUrl: currentUser.photoUrl,
        role: currentUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    // console.log(`JWT Token: ${jwt_access_token}`);
    // console.log(`${process.env.CLIENT_BASE_URI}/?token=${jwt_access_token}`)
    // Redirect the user with the JWT token as a query parameter
    res.redirect(`${process.env.CLIENT_BASE_URI}/?token=${jwt_access_token}`);
  } catch (error) {
    console.error(`Error during Google OAuth flow: ${error.message}`);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Function to capitalize first letter of each word
function capitalizeFirstLetterOfEachWord(str) {
  if (!str) return ""; // Handle undefined or null strings
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = router;

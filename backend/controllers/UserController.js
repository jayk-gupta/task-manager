const User = require("../models/User");

const { jwtAuthMiddleware, generateToken } = require("../jwt");

exports.loginUser = async (req, res) => {
    try {
        // extract username and password from body
        const { username, password } = req.body
        // Find the user in the database
        const user = await User.findOne({ username: username })
        // If user does not exists or password does not match
    } catch (error) {

        res.status(500).json({
            error: "An error occurred while logging in",
            details: error.message,
        });
    }
};
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }
    user = new User({ username, email, password });
    savedUser = await user.save();
    //   generate token
    const payload = {
      id: savedUser.id,
      username: savedUser.username,
    };
    console.log(JSON.stringify(payload));
    const token = generateToken(payload);
    res.status(201).json({
      response: savedUser,
      token: token,
      messgae: "user registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred while regsitering user",
      details: error.message,
    });
  }
};
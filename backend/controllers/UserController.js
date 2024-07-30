const User = require("../models/User");

const { jwtAuthMiddleware, generateToken } = require("../jwt");
// LOGIN USER
exports.getAllUsers = async (req, res) => {
  try {
    const users =await User.find()
    if (!users) {
       res.status(404).json({
         msg:"no users found"
       });
    } else {
      res.status(200).json(users);
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred",
      details: error.message,
    });
  }
}
exports.loginUser = async (req, res) => {
  try {
    // extract username and password from body
    const { username, password } = req.body;
    // Find the user in the database
    const user = await User.findOne({ username: username });
    // If user does not exists or password does not match
    if (!user || !(user.comparePassword(password))) {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }
      const payload = {
          id: user.id,
          username:user.username
      }
      const token = generateToken(payload)
      //   return token
      res.json({token})
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while logging in",
      details: error.message,
    });
  }
};
// REGISTER USER
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
      console.log(savedUser);
    //   generate token
    const payload = {
      id: savedUser.id,
      username: savedUser.username,
    };
    console.log(JSON.stringify(payload));
    const token = generateToken(payload); 
    console.log("token is:"+token);
    res.status(201).json({
      response: savedUser,
      token: token,
      messgae: "user registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred while registering user",
      details: error.message,
    });
  }
};

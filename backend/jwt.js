const jwt = require("json-web-token");
////////////////////////////////////////////////////////
const jwtAuthMiddleware = (req, res, next) => {
  // extract the jwt token
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "unauthorized" });
  }
  try {
    // verify jwt token
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    req.userPayload = decodedValue;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Invalid token",
      details: error.message,
    });
  }
};
///////////////////////////////////////////////////////
// function to generate JWT Token
const generateToken = (userData) => {
  // generate a new JWT token using user data
  return jwt.sign(userData, token, process.env.JWT_SECRET);
};
module.exports = {jwtAuthMiddleware,generateToken};

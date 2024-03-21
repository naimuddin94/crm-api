const User = require("../models/userSchema");
const createToken = require("../lib/createToken");

const authentication = () => async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username or email
    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user) {
      // User not found
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      // Passwords don't match
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Passwords match, create authentication token
    const token = createToken({
      email: user.email,
      role: user.role,
    });

    // Send the auth token in the response
    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .send({ role: user.role, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

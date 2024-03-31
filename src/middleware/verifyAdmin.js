const User = require("../models/userSchema");

const verifyAdmin = async (req, res, next) => {
  try {
    const isAdmin = req.user.role === "Admin";
    if (!isAdmin) {
      return res.status(403).send({ message: "forbidden access" });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = verifyAdmin;

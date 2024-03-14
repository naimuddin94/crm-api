const createToken = require("./createToken");

require("dotenv").config();

const createAuthCookie = (req, res, next) => {
  try {
    const user = req.body;
    const token = createToken(user);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
    next();
  } catch (err) {
    next(err);
  }
};

const clearUserCookie = (req, res) => {
  const email = req.body;
  res
    .clearCookie("token", {
      maxAge: 0,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ message: "cleared" });
};

module.exports = { createAuthCookie, clearUserCookie };

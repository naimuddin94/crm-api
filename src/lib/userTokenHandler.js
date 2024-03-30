const createToken = require("./createToken");

require("dotenv").config();

const createAuthCookie = (req, res, next, userResponse) => {
  try {
    const token = createToken({
      email: userResponse.email,
      role: userResponse.role,
    });

    // Set the cookie with the JWT
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ message: "Login successfully", user: userResponse });
  } catch (err) {
    next(err);
  }
};

const clearUserCookie = (req, res) => {
  res
    .clearCookie("token", {
      maxAge: 0,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ message: "cleared" });
};

module.exports = { createAuthCookie, clearUserCookie };

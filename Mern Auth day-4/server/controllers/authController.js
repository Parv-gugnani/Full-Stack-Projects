const User = require("../models/user");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, pasword } = req.body;
    //
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // password
    if (!password || !password.length < 6) {
      return res.json({
        error: "password must be at least 6 characters",
      });
    }
    // check
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken already",
      });
    }

    const user = await User.create({ name, email, password });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { test, registerUser };

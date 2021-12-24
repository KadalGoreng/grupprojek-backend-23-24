const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;

const jwt = require("jsonwebtoken");

const User = require("../models/user");

class UserController {
  static async getUsers(req, res) {
    try {
      const usersList = await User.find();
      res.status(200).send(usersList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async createUser(req, res, next) {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });
    const newUser = new User({ name, email, password });
    try {
      await newUser.save();
      const token = getSignedToken(newUser);
      res.status(200).json({
        token,
      });
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(403).json({
          error: {
            message: "invalid email/password",
          },
        });
      const isValid = await user.isPasswordValid(password);
      if (!isValid)
        return res.status(403).json({
          error: { message: "invalid email/password" },
        });
      const token = getSignedToken(user);
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

getSignedToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    key,
    { expiresIn: "1h" }
  );
};

module.exports = UserController;

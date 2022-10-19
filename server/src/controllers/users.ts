import {Response, Request} from 'express';
const bcrypt = require("bcryptjs");
const jwtToken = require("jsonwebtoken");
const User = require("../models/user");

const signin = async (req: Request, res:Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      res.status(404).json({ message: "Invalid Credentials" });

    const token = jwtToken.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req: Request, res:Response) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist." });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ name, email, password: hashedPassword });
    const token = jwtToken.sign(
      { name: result.name, email: result.email, id: result._id },
      "test",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  signup,
  signin,
};

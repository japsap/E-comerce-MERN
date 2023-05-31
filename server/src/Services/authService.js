const User = require("../Schema/User");
const AppError = require("../utils/AppError");
const jwt = require('../utils/jsonwebtoken');

exports.getUsername = (username) => User.findOne({ username });

exports.getUserEmail = (email) => User.findOne({ email });

exports.getUser = (userId) => User.findById(userId);



exports.register = (
  username,
  email,
  password,
  userPfp,
  bio,
) => User.create({ username, email, password, userPfp, userPfp, bio });



exports.login = async (email, password) => {
  const existingUser = await this.getUserEmail(email);
  const passwordd = await existingUser.comparePasswords(password);

  if (!existingUser) {
    throw new AppError("Wrong email", { existingUser });
  }

  if (!passwordd) {
    throw new AppError("Wrong password", { existingUser });
  }

  const secret = "0823r5bsdfdgkljb89y234biojadnfg";
  const payload = {
    _id: existingUser._id,
    username: existingUser.username,
    email: existingUser.email,
    userPfp: existingUser.userPfp,
    bio: existingUser.bio,
    isAdmin: existingUser.isAdmin,
  };

  const token = await jwt.sign(payload, secret);

  return token;
};

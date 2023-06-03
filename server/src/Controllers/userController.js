const authService = require("../Services/authService");
const User = require("../Schema/User");

exports.getUser = async (req, res) => {
  const user = await authService.getUser(req.params.userId);
  try {
    res.status(201).json({ status: 201, user });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
  

};

exports.postUpdateUser = async (req, res) => {
  const { userPfp, userId } = req.body;

  await authService
    .updateUser(userId, {
      userPfp,
    })
    .then(() =>
      res
        .status(201)
        .json({ status: 201, message: "Profile Succesfully updated" }),
    )
    .catch((err) => res.status(201).json({ message: err.message }));
};

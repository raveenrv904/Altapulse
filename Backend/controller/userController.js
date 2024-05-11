const User = require("../model/userModel");

const postUser = async (req, res) => {
  const { name, brandRequirement, competitors } = req.body;

  const user = await User.create({ name, brandRequirement, competitors });
  res.status(200).json({ user });
};

const getUser = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findOne({ _id: userId });

  res.status(200).json({ user });
};

module.exports = {
  postUser,
  getUser,
};

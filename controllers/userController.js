const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { firstName } = req.body;

    console.log(firstName);
    const newUser = await User.create({
      firstName,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.log("Error in create user controller");

    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User no created",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();

    return res.json({
      success: true,
      message: "Users fetched",
      allUsers,
    });
  } catch (error) {
    console.log("Error in get user controller");

    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User not fetched",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { firstName } = req.body;

    const user = await User.findOne({
      where: {
        userId,
      },
    });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found!",
      });
    }

    user.firstName = firstName;

    await user.save();
    return res.json({
      success: true,
      message: "User updated",
      user,
    });
  } catch (error) {
    console.log("Error in update user controller");

    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User not updated",
    });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findOne({
      where: {
        userId,
      },
    });

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User not found!",
      });
    }

    return res.json({
      success: true,
      message: "user fetched",
      user,
    });
  } catch (error) {
    console.log("Error in get single user controller");
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User not fetched",
    });
  }
};

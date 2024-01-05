const user = require('../models/User');

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const existingUser = await user.findOne({ _id: id });

    if (!existingUser) {
      return res.status(404).json({
        message: 'User not found',
        data: null,
        error: true,
      });
    }

    const result = await user.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        message: 'User not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'User deleted',
      data: null,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    last_score,
    highScore
  } = req.body;

  try {
    const existingUser = await user.findOne({ _id: id });

    if (!existingUser) {
      return res.status(404).json({
        message: 'User not found',
        data: null,
        error: true,
      });
    }


    const result = await user.findByIdAndUpdate(id, { username, last_score, highScore }, { new: true });

    if (!result) {
      return res.status(404).json({
        message: 'User not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'User Updated',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await user.find();

    return res.status(200).json({
      message: 'Users list',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const createUser = async (req, res) => {
  const {
    username,
    password,
    last_score,
    highScore
  } = req.body;

  try {
    const existingUser = await user.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: 'username already exists',
        data: null,
        error: true,
      });
    }

    const result = await user.create({
      username,
      password,
      last_score,
      highScore
    });
    return res.status(201).json({
      message: 'User created',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await user.findById(id);

    if (result) {
      return res.status(200).json({
        message: 'User found',
        data: result,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'User not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};

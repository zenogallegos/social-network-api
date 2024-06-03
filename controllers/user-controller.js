const { User, Thought } = require("../models");

const userController = {
  // Get all users
  async getUsers(req, res) {
    try {
      const userData = await User.find().select("-__v");
      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Get a single user by ID
  async getSingleUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");

      if (!userData) {
        return res.status(404).json({ message: "No user found with this ID." });
      }

      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userData) {
        return res.status(404).json({ message: "No user found with this ID." });
      }

      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const userData = await User.findOneAndDelete({ _id: req.params.userId });

      if (!userData) {
        return res.status(404).json({ message: "No user found with this ID." });
      }

      // Bonus: Remove the user's thoughts (if you choose to implement)

      res.json({ message: "User successfully deleted!" });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Additional functions for managing friends will follow this pattern
};

module.exports = userController;

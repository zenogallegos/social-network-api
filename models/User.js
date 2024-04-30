const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    thought: [thoughtSchema],
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
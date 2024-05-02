const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    thought: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function() {return this.friends.length});
const User = model('user', userSchema);

module.exports = User;
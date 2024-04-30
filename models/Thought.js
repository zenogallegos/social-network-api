const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    reaction: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;

const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionType: {
      type: String,
      required: true,
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
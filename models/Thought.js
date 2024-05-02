const { Schema, model, Types } = require("mongoose");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userName: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function() {return this.reaction.length});
const Thought = model("thought", thoughtSchema);

module.exports = Thought;

const connection = require(`../config/connection`);
const { User, Thought } = require(`../models`);

connection.on('error', (err) => err);

connection.once("open", async () =>
    await User.insertMany([
      {
        userName: "Zeno",
        email: "zeno@gmail.com",
        thoughts: [
          {
            thoughtText: "hello",
            userName: "Zeno",
            reactions: [
              {
                reactionBody: "nice",
                userName: "Zeno",
              },
            ],
          },
        ],
      },
    ])
);

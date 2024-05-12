const connection = require(`../config/connection`);
const { User, Thought } = require(`../models`);

connection.on("error", (err) => err);

connection.once("open", async () => {
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  const thoughts = await Thought.insertMany([
    {
      thoughtText: 'Hello',
      userName: 'Zeno',
      reaction: [
        {
          reactionBody: 'crazy',
          userName: 'Zeno',
        }
      ]
    },
    {
      thoughtText: 'Hi',
      userName: 'Alex',
      reaction: [
        {
          reactionBody: 'Fantastic',
          userName: 'Alex',
        }
      ]
    },
    {
      thoughtText: 'Nice',
      userName: 'Rylee',
      reaction: [
        {
          reactionBody: 'Mind boggling',
          userName: 'Rylee',
        }
      ]
    },
]);

const users = await User.insertMany([
    {
      username: 'Rylee',
      email: 'rylee@gmail.com',
      thoughts: [thoughts[0]._id, thoughts[1]._id],
      friends: []
    },
    {
      username: 'Alex',
      email: 'alex@gmail.com',
      thoughts: [thoughts[0]._id, thoughts[1]._id],
      friends: []
    },
    {
      username: 'Zeno',
      email: 'zeno@gmail.com',
      thoughts: [thoughts[0]._id, thoughts[1]._id],
     friends: []
    },
  ]);
});
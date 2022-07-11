const { User, Assets, Liabilities } = require("../models");

const resolvers = {
  Query: {
    assets: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Assets.find(params).sort({ createdAt: -1 });
    },
    liabilities: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Liabilities.find(params).sort({ createdAt: -1 });
      },

    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("assets")
        .populate("liabilities");
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("assets")
        .populate("liabilities");
    },
  },
};

module.exports = resolvers;

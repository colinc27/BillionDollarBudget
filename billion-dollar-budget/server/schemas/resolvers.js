const { AuthenticationError } = require("apollo-server-express");
const { User, Assets, Liabilities, ExpectedLiabilities } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate("assets")
          .populate("liabilities")
          .populate("expectedLiabilities");   
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("assets")
        .populate("liabilities")
        .populate("expectedLiabilities");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("assets")
        .populate("liabilities");
    },
    assets: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Assets.find(params).sort({ createdAt: -1 });
    },
    assetById: async (parent, { _id }) => {
      //const params = username ? { username } : {};
      return Assets.findOne({_id});
    },
    assetsPerMonth: async (parent, { username,monthName,year}) => {
      return Assets.findOne({username,monthName,year});
    },
    liabilities: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Liabilities.find(params).sort({ createdAt: -1 });
    },
    liabilitiesPerMonth: async (parent, { username,monthName,year }) => {
      return Liabilities.findOne({username,monthName,year});
    },
    expectedLiabilities: async (parent, { username }) => {
      const params = username ? { username } : {};
      return ExpectedLiabilities.find(params).sort({ createdAt: -1 });
    },
    expectedLiabilitiesPerMonth: async (parent, { username,monthName,year }) => {
      return ExpectedLiabilities.findOne({username,monthName,year});
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });   
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }   
      const correctPw = await user.isCorrectPassword(password);   
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }   
      const token = signToken(user);
      return { token, user };
    },
    addAssets: async (parent, {salary,monthName,year}, context) => {
      if (context.user) {
        const assets = await Assets.create({username: context.user.username,salary: salary,monthName: monthName,year: year});
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { assets: assets._id} },
          { new: true }
        );
    
        return assets;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    updateAssets: async (parent, {_id,salary}, context) => {
      if (context.user) {
        console.log(salary);
       const assets = await Assets.findByIdAndUpdate(
          { _id: _id },
          { salary: salary},
          { new: true }
        );   
        return assets;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAssets: async (parent, {_id}, context) => {
      if (context.user) {
    
       const assets = await Assets.findByIdAndDelete(
          { _id: _id }
        );
    
        return assets;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addLiabilities: async (parent, {rent,utilities,reoccurringBills,gas,food,monthName,year}, context) => {
      if (context.user) {
        const liabilities = await Liabilities.create({rent:rent,utilities:utilities,reoccurringBills:reoccurringBills,
          gas:gas,food:food,username: context.user.username,monthName:monthName,year:year});
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { liabilities: liabilities._id} },
          { new: true }
        );
    
        return liabilities;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    updateLiabilities: async (parent, {_id,rent,utilities,reoccurringBills,gas,food}, context) => {
      if (context.user) {
    
       const liabilities = await Liabilities.findByIdAndUpdate(
          { _id: _id },
          {rent:rent,utilities:utilities,reoccurringBills:reoccurringBills,gas:gas,food:food},
          { new: true }
        );
    
        return liabilities;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeLiabilities: async (parent, {_id}, context) => {
      if (context.user) {
    
       const liabilities = await Liabilities.findByIdAndDelete(
          { _id: _id }
        );
    
        return liabilities;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addExpectedLiabilities: async (parent, {rent,utilities,reoccurringBills,gas,food,monthName,year}, context) => {
      if (context.user) {
        const expectedLiabilities = await ExpectedLiabilities.create({rent:rent,utilities:utilities,reoccurringBills:reoccurringBills,
          gas:gas,food:food,username: context.user.username,monthName:monthName,year:year});
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { expectedLiabilities: expectedLiabilities._id} },
          { new: true }
        );
    
        return expectedLiabilities;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    updateExpectedLiabilities: async (parent, {_id,rent,utilities,reoccurringBills,gas,food}, context) => {
      if (context.user) {
    
       const expectedLiabilities = await ExpectedLiabilities.findByIdAndUpdate(
          { _id: _id },
          { rent:rent,utilities:utilities,reoccurringBills:reoccurringBills,gas:gas,food:food},
          { new: true }
        );
    
        return expectedLiabilities;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeExpectedLiabilities: async (parent, {_id}, context) => {
      if (context.user) {
    
       const expectedLiabilities = await ExpectedLiabilities.findByIdAndDelete(
          { _id: _id }
        );
    
        return expectedLiabilities;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
    
  }
};

module.exports = resolvers;

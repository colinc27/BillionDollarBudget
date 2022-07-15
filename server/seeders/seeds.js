// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const assetSeeds = require('./assetSeeds.json');
const db = require('../config/connection');
const { Assets, User } = require('../models');

db.once('open', async () => {
  try {
    await Assets.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < assetSeeds.length; i++) {
      const { _id, salaryUser } = await Assets.create(assetSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: salaryUser },
        {
          $addToSet: {
            assets: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
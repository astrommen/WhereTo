const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://user:whereto2020$$@ds237196.mlab.com:37196/heroku_4dg9rzs9", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });



const userSeed = [
  {
    name: "Bill",
    email: "bill@bill.com",
    password: "waewfeawf",
    vacations: []
  }
];

const vacaSeed = [
  {
    email: "bill@bill.com",
    name: "Vaawdawddver!",
    startDate: "2019-12-2",
    endDate: "2019-12-6",
    location: "Alaska",
    activities: ["camping", "biking", "hiking", "fishing"]
  },
  {
    "email": "bill@bill.com",
    "name": "Future!",
    "startDate": "2020-12-2",
    "endDate": "2020-12-6",
    "location": "Alaska",
    "activities": ["camping", "biking", "hiking", "fishing"]
  },
  {
    "email": "bill@bill.com",
    "name": "Vaawdawddver1!",
    "startDate": "2019-12-2",
    "endDate": "2019-12-6",
    "location": "Alaska",
    "activities": ["camping", "biking", "hiking", "fishing"]
  },
  {
    "email": "bill@bill.com",
    "name": "Vaawdawddver2!",
    "startDate": "2019-12-2",
    "endDate": "2019-12-6",
    "location": "Alaska",
    "activities": ["camping", "biking", "hiking", "fishing"]
  },
]


db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
  })
  .catch(err => {
    console.error(err);
  });



db.Vacation
  .deleteMany({})
  .then(data => {
    vacaSeed.forEach((item, idx, vacaSeed) => {
      db.Vacation
        .create(item)
        .then(dbModel => {
          db.User.findOneAndUpdate({ email: item.email }, { $push: { vacations: dbModel._id } }, { new: true }).then(data => {
            if (idx + 1 === vacaSeed.length) {
              mongoose.connection.close()
            }
          })
        })
    })
  }).catch(err => {
    console.log(err)
    process.exit(1)
  });


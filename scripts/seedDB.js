const mongoose = require("mongoose");
const db = require("../models");
var async = require('async');


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wheretoTEST", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });



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
    "email": "bill@bill.com",
    "name": "Vaawdawddver!",
    "startDate": "2019-12-2",
    "endDate": "2019-12-6",
    "location": "Alaska",
    "activities": ["camping", "biking", "hiking", "fishing"]
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
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Vacation
  .deleteMany({})
  .then(data => {
    // console.log(data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Vacation
  .create(vacaSeed)
  .then(dbModel => {
    console.log("ESfsef")
  })
  .catch(err => console.log(err));





// async.each(vacaSeed, function (data, callback) {
//   db.Vacation
//     .create(data)
//     .then(dbModel => {
//       console.log(data)
//       db.User.findOneAndUpdate({ email: data.email }, { $push: { vacations: dbModel._id } }, { new: true })
//     })
//     .catch(err => console.log(err));
// })



// vacaSeed.forEach(data => {

//   var promise = db.Vacation.create(data);
//   promise.then(function (jawbreaker) {
//     if (jawbreaker) {

//       console.log(jawbreaker)
//     }
//     // ...
//   })

  // console.log(data)
  // db.Vacation
  //   .create(data)
  //   .then(dbModel => {
  //     console.log(dbModel)
  //     console.log(data)
  //     db.User.findOneAndUpdate({ email: data.email }, { $push: { vacations: dbModel._id } }, { new: true })
  //   })
  //   .catch(err => console.log(err));

// })

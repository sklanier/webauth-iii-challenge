const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "steve",
          password: bcrypt.hashSync("pass", 12),
          department: "admin"
        },
        {
          username: "laura",
          password: bcrypt.hashSync("pass", 12),
          department: "admin"
        },
        {
          username: "tristan",
          password: bcrypt.hashSync("pass", 12),
          department: "clerk"
        },
        {
          username: "erica",
          password: bcrypt.hashSync("pass", 12),
          department: "friend"
        }
      ]);
    });
};
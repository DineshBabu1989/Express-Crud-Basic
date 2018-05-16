const express = require("express");
const router = express.Router();
const User = require("../../models/User");

//GET: http://localhost:3000/user/test
//DESC:TESTING ROUTE
//PUBLIC
router.get("/test", function(req, res) {
  res.send({ msg: "User Registration and Login page" });
});

//POST: http://localhost:3000/user/register
//DESC: POST ROUTE FOR REGISTRATION
//PUBLIC
router.post("/register", function(req, res) {
  //create an object for sending to db using body data
  const newUser = new User({
    name: req.body.name,
    email: req.body.email
  });
  //save it to the mongodb
  newUser
    .save()
    .then(user => {
      res.json({ user });
    })
    .catch(err => console.log(err));
});

//GET: http://localhost:3000/user/allposts
//DESC:GET ROUTE FOR GETTING ALL POSTS
//PUBLIC
router.get("/allposts", function(req, res) {
  //mongoose method to find all docs in the data base
  User.find({})
    .then(user => {
      res.json({ user });
    })
    .catch(err => console.log(err));
});

//PUT: http://localhost:3000/user/update/:id
//DESC:PUT ROUTE FOR UPDATING COLLECTIONS
//PUBLIC
router.put("/update/:id", function(req, res) {
  //mongoose method to find a record by id and update
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(user => {
      //make a new mongoose search before returning the response
      User.findOne({ _id: req.params.id }).then(user => {
        res.json({ user });
      });
    })
    .catch(err => console.log(err));
});

//DELETE: http://localhost:3000/user/delete/:id
//DESC:DELETE ROUTE FOR DELETING POSTS
//PUBLIC
router.delete("/delete/:id", function(req, res) {
  //mongoose method to find and delete a record by id
  User.findByIdAndRemove({ _id: req.params.id }).then(user => {
    res.json({ user });
  });
});

module.exports = router;

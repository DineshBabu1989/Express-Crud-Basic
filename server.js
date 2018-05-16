//imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//import secret key
const db = require("./config/keys").mongoURI;

//connect to mongodb using mongoose promise
mongoose
  .connect(db)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));

//create an express app
const app = express();

//Testing route display hello world on the route localhost:3000
app.get("/", function(req, res) {
  res.send("Hello World");
});

//create body parser middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//import routes from the routes folder
const User = require("./routes/api/users");
const Profile = require("./routes/api/profile");
const Posts = require("./routes/api/posts");

//create a new url and pass the imported route
app.use("/user", User);
app.use("/profile", Profile);
app.use("/posts", Posts);

//setting up port for production environment
const port = process.env.PORT || 3000;
//server listen
app.listen(port, function(req, res) {
  console.log(`server started on ${port}`);
});

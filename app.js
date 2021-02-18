const express = require("express");
const bodyParser = require("body-parser");
var _ = require('lodash');
const ejs = require("ejs");
const {title} = require("process");

const app = express();

app.use(express.static('public'));

const firstparagraph = "In sunt mollit occaecat excepteurVelit occaecat id officia sunt dolor officia pariatur qui excepteur aute.Sit commodo nisi sit nostrud anim duis ex sit enim Lorem labore incididunt.Ea reprehenderit aliqua magna sunt aute ea ipsum velit.Qui culpa tempor velit sunt consectetur aliquip Lorem ut officia amet minim anim est.";

const secondparagraph = "In sunt mollit occaecat excepteurVelit occaecat id officia sunt dolor officia pariatur qui excepteur aute.Sit commodo nisi sit nostrud anim duis ex sit enim Lorem labore incididunt.Ea reprehenderit aliqua magna sunt aute ea ipsum velit.Qui culpa tempor velit sunt consectetur aliquip Lorem ut officia amet minim anim est.";

const thirdparagraph = "In sunt mollit occaecat excepteurVelit occaecat id officia sunt dolor officia pariatur qui excepteur aute.Sit commodo nisi sit nostrud anim duis ex sit enim Lorem labore incididunt.Ea reprehenderit aliqua magna sunt aute ea ipsum velit.Qui culpa tempor velit sunt consectetur aliquip Lorem ut officia amet minim anim est.";


let newBlog = [];

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function (req, res) {

  res.render("home", {
    firstparagraph: firstparagraph,
    newBlog: newBlog
  });

});

app.get("/about", function (req, res) {

  res.render("about", {
    secondparagraph: secondparagraph
  });

});

app.get("/contact", function (req, res) {

  res.render("contact", {
    thirdparagraph: thirdparagraph
  });

});


app.get("/compose", function (req, res) {

  res.render("compose");

});

app.post('/compose', function (req, res) {

  const fullPost = {
    title: req.body.userInputTitle,
    post: req.body.userInputPost
  }

  newBlog.push(fullPost);
  res.redirect("/");
});



app.get("/posts/:searchedPost", function (req, res) {

  var searchedPost = _.lowerCase(req.params.searchedPost);

 

  newBlog.forEach(function(post) {

    var storedTitle = _.lowerCase(post.title);

   
   
    if ( storedTitle ==  searchedPost) {
      console.log("Match Found!");
    } else {
      console.log("Not Found!");
    }

  });

});

app.listen("3000", function () {
  console.log("server is running on port 3000");
});

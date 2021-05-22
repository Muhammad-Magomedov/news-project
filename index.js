const express = require("express");
const hbs = require("express-handlebars");

const app = express()
app.use(express.static('public'))

app.set("view engine", "handlebars")
app.engine("handlebars", hbs())



app.get("/", (req, res) => {
  res.render('home', {
    title: "home"
  })
})

app.listen(3010, () => {
  console.log("AIRANNN")
})
const express = require("express");
const hbs = require("express-handlebars");

const app = express()
app.use(express.static('public'))

const data = require("./data")

app.set("view engine", "handlebars")
app.engine("handlebars", hbs())



app.get("/", (req, res) => {
  res.render('home', {
    mainNews: data.news.slice(0, 2),
    sideBar: data.news.slice(2, data.news.length - 1),
    style: "css/style.css",
    logo: "css/logotype.svg"

  })
})

app.get('/sport/:id', (req, res) => {
  const filtr = data.news.filter(item => item.categoryId === Number(req.params.id))
  res.render('sport', {
    main: filtr.slice(0, 2),
    sideBar: filtr.slice(2, filtr.length),
    style: "css/style.css",
    logo: "css/logotype.svg"
  })
})

app.listen(3010, () => {
  console.log("AIRANNN")
})
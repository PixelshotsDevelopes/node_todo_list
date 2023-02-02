const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require("./views/date")
const port = 3000;
const items = ["Buy Food","Cook Food", "Eat Food"];
const workItems = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/",(req, res)=>{
   const day = date.getDate();

   res.render("list",{listTitle:day, newListItems:items, route: "/"});
})


app.post("/",(req, res)=>{
   const item = req.body.newItem;
   if(req.body.list === "Work"){
      workItems.push(item);
      res.redirect("/work")
   }else{
      items.push(item);
      res.redirect("/");
   }
});

app.get("/work", (req, res)=>{
   res.render("list",{listTitle:"Work List", newListItems:workItems})
})

app.get("/about", (req, res)=>{
   res.render("about")
})

app.listen(port,()=>{console.log(`express app listening on port ${port}`)});
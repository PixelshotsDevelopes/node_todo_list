const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;



app.set("view engine", "ejs");
app.get("/",(req, res)=>{
   let today = new Date();
   let currentDay = today.getDay();
   let date = today.getDate();
   let month = today.getMonth();
   let montharray = ["january", "february","march","april","may","june","july","augest","september","october","november","december"];
   //my try or my practice to show day as string like tuesday or anyday used array 
   let day = ["sunday","monday","tuesday","wednesday","thursday", "friday", "saturday"];
   if(currentDay === 6 || currentDay === 0){
      day[currentDay] = "weekend";
      res.render("list2",{kindofday:day[currentDay]});
   }else{
      // day = "weekdayyyyy";
      res.render("list2",{kindofday:day[currentDay],kindofdate:date,kindofmonth:montharray[month]});
   }
})

app.listen(port,()=>{console.log(`express app listening on port ${port}`)});
const express = require("express");

const app = express();
const port  = process.env.PORT || 8000;
app.use(express.static(__dirname));

app.listen(port,()=>{
    console.log("listening at 8000");
})
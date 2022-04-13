const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000


app.listen(PORT,()=>{
    console.log("Welcome, sorry for inconvinience will be back in  weeks "+ PORT);
})
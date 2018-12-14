require("dotenv").config();
const express = require("express"); 
const { json } = require('body-parser');
const massive = require("massive");

const app = express();

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log("Database connected");
})
app.use(json());


app.listen(4000, () => {
    console.log("Listening on 4000")
});
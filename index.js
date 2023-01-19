const express = require("express");
const app = express();
const cors = require("cors");
const todoController = require("./controller/todoController");

//set up template engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"));
app.use(cors());

//fire a controller
todoController(app);

//listen to port
app.listen(3000);

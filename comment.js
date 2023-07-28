// Create web sever - control + enter to retrieve copilot funsies
// 1. npm init -y
// 2. npm install express
// 3. npm install ejs
// 4. npm install body-parser
// 5. npm install mongoose
// 6. npm install method-override

// 1. require express
const express = require('express');
const app = express();
const port = 3000;

// 2. require body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// 3. require method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// 4. require mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comment',
/*
BruhCoin website.

Copyright (C) BruhCoin 2021. (http://bruhco.in/)
Licensed under GNU GPLv3
*/

const express = require('express');
const path = require('path');
const app = express();
const config = require('./data/config.json');

const api_base = require('./lib/api/base');

// Setup static paths
app.use('/assets', express.static(path.join(__dirname, "assets")));

// Create pages
app.use('/', api_base.createPugStaticHandler("./ui/pages/index.pug"));

app.listen(config.port, ()=>console.log("Bruhco.in service up and running!"));
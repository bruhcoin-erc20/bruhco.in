/*
BruhCoin website.

Copyright (C) BruhCoin 2021. (https://bruhco.in/)
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
app.get('/', api_base.createPugStaticHandler("./ui/pages/index.pug"));
app.get('/contract', api_base.createPugStaticHandler("./ui/pages/contract.pug", {
    contract: config.contract,
    decimals: 18,
    symbol: "BRUH"
}));

app.get('/faucet', api_base.createPugStaticHandler("./ui/pages/faucet.pug", {
    reward: "0.0000000001",
    timeout: 24
}));

// Error pages
app.use(api_base.createPugStaticHandler("./ui/pages/404.pug", {}, 404));

app.listen(config.port, ()=>console.log("Bruhco.in service up and running!"));
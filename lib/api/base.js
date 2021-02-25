/*
BruhCoin website.

Copyright (C) BruhCoin 2021. (https://bruhco.in/)
Licensed under GNU GPLv3
*/

const pug = require('pug');

/**
 * Creates a static pug handler.
 * @param {String} template The path of the template to use.
 * @param {*} replacer Key-value object with values to replace.
 */
function createPugStaticHandler(template, replacer = {}, statusCode = 200) {
    /**
     * The handler.
     * @param {import('express').Request} req The request.
     * @param {import('express').Response} res The response.
     */
    function handler(req, res) {
        res.contentType('html');
        res.statusCode = statusCode;
        res.write(pug.renderFile(template, replacer));
        res.end();
    }

    return handler;
}

module.exports = {
    createPugStaticHandler
}
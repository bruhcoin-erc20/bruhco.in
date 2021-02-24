const pug = require('pug');

/**
 * Creates a static pug handler.
 * @param {String} template The path of the template to use.
 * @param {*} replacer Key-value object with values to replace.
 */
function createPugStaticHandler(template, replacer = {}) {
    /**
     * The handler.
     * @param {import('express').Request} req The request.
     * @param {import('express').Response} res The response.
     */
    function handler(req, res) {
        res.contentType('html');
        res.statusCode = 200;
        res.write(pug.renderFile(template, replacer));
        res.end();
    }

    return handler;
}

module.exports = {
    createPugStaticHandler
}
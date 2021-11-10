/**
 * Title: Entrypoint of this project
 * Description: Utilities for JavaScript
 * Author: Samin Yasar
 * Date: 10/November/2021
 */

// Dependencies
const stringUtilities = require("./src/utilities/string");
const arrayUtilities = require("./src/utilities/array");

// Module scaffolding
const madeJS = { ...arrayUtilities, ...stringUtilities };

// Export module
module.exports = madeJS;

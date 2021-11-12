/**
 * Title: Entrypoint of this project
 * Description: Utilities for JavaScript
 * Author: Samin Yasar
 * Date: 10/November/2021
 */

// Dependencies
const arrayUtilities = require("./src/utilities/array");
const stringUtilities = require("./src/utilities/string");

// Module scaffolding
const casemate = { ...arrayUtilities, ...stringUtilities };

// Export module
module.exports = casemate;

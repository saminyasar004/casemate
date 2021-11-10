/**
 * Title: Utility for String
 * Description: All utilities for JavaScript String
 * Author: Samin Yasar
 * Date: 10/November/2021
 */

// Dependencies

// Module scaffolding
const stringUtilities = {};

/**
 * ? Camelcase method
 * return a camelcase format of the given string.
 *
 * @param {String} str - A string to be camelcase
 * @returns {String} - A camelcased string
 */
stringUtilities.camelCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        const splitted = string.split(/\s|_/gi);
        return `${splitted.slice(0, 1).map((el) => el.toLowerCase())}${splitted
            .slice(1)
            .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1).toLowerCase()}`)
            .join("")}`;
    }
    return "";
};

/**
 * ? Capitalize method
 * return a capitalize format of the given string.
 *
 * @param {String} str - A string to be capitalized
 * @returns {String} - A capitalized string
 */
stringUtilities.capitalize = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        return string
            .split(" ")
            .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1).toLowerCase()}`)
            .join(" ");
    }
    return "";
};

// Export module
module.exports = stringUtilities;

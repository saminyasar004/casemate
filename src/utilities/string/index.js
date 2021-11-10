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
 * ? camelCase method
 * return a camelcase format of the given string.
 *
 * @param {String} str - A string to be camelcase
 * @returns {String} - A camelcased string
 */
stringUtilities.camelCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        const splitted = string.split(/\s|_|-/gi);
        return `${splitted.slice(0, 1).map((el) => el.toLowerCase())}${splitted
            .slice(1)
            .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1).toLowerCase()}`)
            .join("")}`;
    }
    return "";
};

/**
 * ? capitalize method
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

/**
 * ? kebabCase method
 * convert a string to kebab case
 *
 * @param {String} str - The string to convert in kebab case
 * @returns {String} - The converted kebab case
 */
stringUtilities.kebabCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        return string
            .split("")
            .map((el) => {
                if (el === el.toUpperCase()) {
                    return `-${el.toLowerCase()}`;
                }
                return el;
            })
            .join("")
            .split(/\s|_|-/gi)
            .filter((el) => Boolean(el))
            .map((el) => el.toLowerCase())
            .join("-");
    }
    return "";
};

/**
 * ? endsWith method
 * check if `string` ends with the given target string
 * @param {String} str - The base string to inspect
 * @param {String} target - The targeted string to search for
 * @param {Number} position - The index number of the base string for search up to
 * @returns {Boolean} - Determine if the base string ends with targeted string.
 */
stringUtilities.endsWith = (str, target, position) => {
    const string = typeof str === "string" ? str.trim() : null;
    const targetString = typeof target === "string" ? target : null;
    const indexPosition = typeof position === "number" ? position : str.length;
    if (string && targetString && indexPosition) {
        return string.endsWith(targetString, indexPosition);
    }
    return false;
};

/**
 * ? escape method
 * Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
 * @param {String} str - The string to escape
 * @returns {String} - Returns the escaped string
 */
stringUtilities.escape = (str = "") => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
        };
        return string
            .split("")
            .map((el) => {
                if (entities[el]) {
                    return entities[el];
                }
                return el;
            })
            .join("");
    }
    return "";
};

/**
 * ? escapeRegExp method
 * Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
 *
 * @param {String} str - The string to escape
 * @returns {String} - The escaped string
 */
stringUtilities.escapeRegExp = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        const regExpCharacters = [
            "^",
            "$",
            "",
            ".",
            "*",
            "+",
            "?",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "|",
        ];
        return string
            .split("")
            .map((el) => {
                if (regExpCharacters.includes(el)) {
                    return `\\${el}`;
                }
                return el;
            })
            .join("");
    }
    return "";
};

// Export module
module.exports = stringUtilities;

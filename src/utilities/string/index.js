/**
 * Title: Utility for String
 * Description: All utilities for JavaScript String
 * Author: Samin Yasar
 * Date: 10/November/2021
 */

// Module scaffolding
const stringUtilities = {};

/**
 * ? capitalize method
 * return a capitalize format of the given string.
 *
 * @param {String} [str = ""] - A string to be capitalized
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
 * ? toUpper method
 * Converts string, as a whole, to uppercase.
 *
 * @param {String} str - The string to convert on uppercase
 * @returns {String} - The uppercased string
 */
stringUtilities.toUpper = (str) => {
    const string = typeof str === "string" ? str : "";
    if (string) {
        return string.toUpperCase();
    }
    return "";
};

/**
 * ? toLower method
 * Converts string, as a whole, to lowercase.
 *
 * @param {String} str - The string to convert on lowercase
 * @returns {String} - The lowercased string
 */
stringUtilities.toLower = (str) => {
    const string = typeof str === "string" ? str : "";
    if (string) {
        return string.toLowerCase();
    }
    return "";
};

/**
 * ? camelCase method
 * return a camelcase format of the given string.
 *
 * @param {String} [str = ""] - A string to be camelcase
 * @returns {String} - A camelcased string
 */
stringUtilities.camelCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        const splitted = string.split(/\s|_|-/gi).filter((el) => Boolean(el.length));

        return splitted.length > 1
            ? `${splitted.slice(0, 1).map((el) => el.toLowerCase())}${splitted
                  .slice(1)
                  .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1).toLowerCase()}`)
                  .join("")}`
            : splitted.join("");
    }
    return "";
};

/**
 * ? snakeCase method
 * Converts string to snake case.
 *
 * @param {String} [str = ""] - The string to convert
 * @returns {String} - Return the snake cased string
 */
stringUtilities.snakeCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        if (string === string.toUpperCase()) {
            return string
                .split(/\s|_|-/gi)
                .filter((el) => Boolean(el))
                .map((el) => el.toLowerCase())
                .join("_");
        }
        const splitted = string
            .split(/\s|-|_/gi)
            .filter((el) => !el.match(/\s|-|_/gi))
            .filter((el) => Boolean(el.trim()));
        return splitted.length > 1
            ? splitted.map((el) => el.toLowerCase()).join("_")
            : splitted
                  .map((el) =>
                      el
                          .split("")
                          .map((ch) => {
                              if (ch === ch.toUpperCase()) {
                                  return `_${ch.toLowerCase()}`;
                              }
                              return ch.toLowerCase();
                          })
                          .join("")
                  )
                  .join("");
    }
    return "";
};

/**
 * ? kebabCase method
 * convert a string to kebab case
 *
 * @param {String} [str = ""] - The string to convert in kebab case
 * @returns {String} - The converted kebab case
 */
stringUtilities.kebabCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        if (string === string.toUpperCase()) {
            return string
                .split(/\s|_|-/gi)
                .filter((el) => Boolean(el))
                .map((el) => el.toLowerCase())
                .join("-");
        }
        const splitted = string
            .split(/\s|-|_/gi)
            .filter((el) => !el.match(/\s|-|_/gi))
            .filter((el) => Boolean(el.trim()));
        return splitted.length > 1
            ? splitted.map((el) => el.toLowerCase()).join("-")
            : splitted
                  .map((el) =>
                      el
                          .split("")
                          .map((ch) => {
                              if (ch === ch.toUpperCase()) {
                                  return `-${ch.toLowerCase()}`;
                              }
                              return ch.toLowerCase();
                          })
                          .join("")
                  )
                  .join("");
    }
    return "";
};

/**
 * ? lowerCase method
 * convert a string to lower case
 *
 * @param {String} [str = ""] - The string to convert in lower case
 * @returns {String} - The converted lower case
 */
stringUtilities.lowerCase = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        if (string === string.toUpperCase()) {
            return string
                .split(/\s|_|-/gi)
                .filter((el) => Boolean(el))
                .map((el) => el.toLowerCase())
                .join(" ");
        }
        const splitted = string
            .split(/\s|-|_/gi)
            .filter((el) => !el.match(/\s|-|_/gi))
            .filter((el) => Boolean(el.trim()));
        return splitted.length > 1
            ? splitted.map((el) => el.toLowerCase()).join(" ")
            : splitted
                  .map((el) =>
                      el
                          .split("")
                          .map((ch) => {
                              if (ch === ch.toUpperCase()) {
                                  return ` ${ch.toLowerCase()}`;
                              }
                              return ch.toLowerCase();
                          })
                          .join("")
                  )
                  .join("");
    }
    return "";
};

/**
 * ? lowerFirst method
 * converts the first character of `string` to lower case
 *
 * @param {String} [str = ""] - The string to convert
 * @returns {String} - The converted string
 */
stringUtilities.lowerFirst = (str) => {
    const string = typeof str === "string" ? str.trim() : "";
    if (string) {
        const splittedStr = string.split(" ");
        return splittedStr.map((el) => `${el.charAt(0).toLowerCase()}${el.slice(1)}`).join(" ");
    }
    return "";
};

/**
 * ? startsWith method
 * Checks if string starts with the given target string.
 *
 * @param {String} [str = ""] - The string to inspect
 * @param {String} [target = ""] - The targetd string to search for
 * @param {Number} [position = number] - The index number of the base string for search up to
 * @returns {Boolean} - determine if the base string strarts with targeted string
 */
stringUtilities.startsWith = (str, target, position) => {
    const string = typeof str === "string" ? str.trim() : null;
    const targetString = typeof target === "string" ? target : null;
    const indexPosition = typeof position === "number" ? position : str.length;
    if (string && targetString && indexPosition) {
        return string.startsWith(targetString, indexPosition);
    }
    return false;
};

/**
 * ? endsWith method
 * check if `string` ends with the given target string
 * @param {String} [str = ""] - The base string to inspect
 * @param {String} [target = ""] - The targeted string to search for
 * @param {Number} [position = number] - The index number of the base string for search up to
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
 * ? split method
 * Splits string by separator.
 *
 * @param {String} str - The string to split
 * @param {RegExp|String} patt - The seperator patter to split by
 * @param {Number} limit - Splits string by separator.
 */
stringUtilities.split = (str, patt, limit) => {
    const string = typeof str === "string" ? str : "";
    const pattern = typeof patt === "string" || typeof patt === "object" ? patt : "";
    if (string) {
        const splitted = pattern.toString().split("/");
        try {
            if (splitted.length > 2) {
                const regExp = splitted.slice(1, splitted.length - 1).join("/");
                const flag = splitted[splitted.length - 1];
                const expression = new RegExp(regExp, flag);
                const splittedString = string.split(expression);
                const splitLimit = typeof limit === "number" ? limit : splittedString.length;
                return splittedString.slice(0, splitLimit);
            }
            const splittedString = string.split(patt);
            const splitLimit = typeof limit === "number" ? limit : splittedString.length;
            return splittedString.slice(0, splitLimit);
        } catch (err) {
            console.log(new Error(err));
            return [];
        }
    }
    return [];
};

/**
 * ? escape method
 * Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
 * @param {String} [str = ""] - The string to escape
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
 * @param {String} [str = ""] - The string to escape
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

/**
 * ? pad method
 * Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
 *
 * @param {String} [str = ""] - The string to pad
 * @param {Number} [len = 0] - The total length of modified string
 * @param {String} [chars = ""] - The string used as padding
 * @returns {String} - The padded string
 */
stringUtilities.pad = (str, len, chars) => {
    const string = typeof str === "string" ? str : "";
    const length = typeof len === "number" ? len : 0;
    const padCharacters = typeof chars === "string" ? chars : " ";
    if (string) {
        const strLength = string.length;
        const firstLength = Math.floor((length - strLength) / 2) + strLength;
        const lastLength = Math.ceil((length - strLength) / 2) + strLength;
        const paddedString = `${string.padStart(firstLength, padCharacters)}${string
            .padEnd(lastLength, padCharacters)
            .replace(string, "")}`;
        return paddedString;
    }
    return "";
};

/**
 * ? padStart method
 * Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.
 *
 * @param {String} [str = ""] - The string to pad
 * @param {Number} [len = 0] - The total length of modified string
 * @param {String} [chars = ""] - The string used as padding
 * @returns {String} - The padded string
 */
stringUtilities.padStart = (str, len, chars) => {
    const string = typeof str === "string" ? str : "";
    const length = typeof len === "number" ? len : 0;
    const padCharacters = typeof chars === "string" ? chars : " ";
    if (string) {
        return string.padStart(length, padCharacters);
    }
    return "";
};

/**
 * ? padEnd method
 * Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.
 *
 * @param {String} [str = ""] - The string to pad
 * @param {Number} [len = 0] - The total length of modified string
 * @param {String} [chars = ""] - The string used as padding
 * @returns {String} - The padded string
 */
stringUtilities.padEnd = (str, len, chars) => {
    const string = typeof str === "string" ? str : "";
    const length = typeof len === "number" ? len : 0;
    const padCharacters = typeof chars === "string" ? chars : " ";
    if (string) {
        return string.padEnd(length, padCharacters);
    }
    return "";
};

/**
 * ? parseInt method
 * Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.
 *
 * @param {String} [str = ""] - The string to convert
 * @param {Number} [radix = 10] - The radix to interpret value by
 * @returns {Number} - Returns the converted integer
 */
stringUtilities.parseInt = (str, radix) => {
    const string = typeof str === "string" ? str.trim() : "";
    const numberBase = typeof radix === "number" ? radix : 10;
    if (str) {
        return parseInt(string, numberBase);
    }
    return NaN;
};

/**
 * ? repeat method
 * Repeats the given string n times.
 *
 * @param {String} [str = ""] - The string to repeat
 * @param {Number} [n = 1] -The number of times to repeat the string
 * @returns {String} - The repeated string
 */
stringUtilities.repeat = (str, n) => {
    const string = typeof str === "string" ? str.trim() : "";
    const times = typeof n === "number" ? n : 1;
    if (string && times) {
        return string.repeat(times);
    }
    return "";
};

/**
 * ? replace method
 * Replaces matches for pattern in string with replacement.
 *
 * @param {String} [str = ""] - The string to modify
 * @param {RegExp|String} [patt = (RegExp|string)] - The pattern to replace.
 * @param {String} [repl = string] - The replacement string
 * @returns {String} - The replaced string
 */
stringUtilities.replace = (str, patt, repl) => {
    const string = typeof str === "string" ? str : "";
    const pattern = typeof patt === "string" || typeof patt === "object" ? patt : "";
    const replacementString = typeof repl === "string" ? repl : "";
    if (string) {
        const splitted = pattern.toString().split("/");
        try {
            if (splitted.length > 2) {
                const regExp = splitted.slice(1, splitted.length - 1).join("/");
                const flag = splitted[splitted.length - 1];
                const expression = new RegExp(regExp, flag);
                return string.replace(expression, replacementString);
            }
            return string.replace(patt, replacementString);
        } catch (err) {
            console.log(new Error(err));
            return string;
        }
    }
    return string;
};

// Export module
module.exports = stringUtilities;

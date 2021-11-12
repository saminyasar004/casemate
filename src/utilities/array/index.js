/**
 * Title: Utility for Array
 * Description: All utilities for JavaScript Array
 * Author: Samin Yasar
 * Date: 10/November/2021
 */

// Module scaffolding
const arrayUtilities = {};

/**
 * ? Chunk method
 * Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array - The array that will be splitted
 * @param {number} size - The size of every chunk
 * @returns {[Array]} - A new group of array
 */
arrayUtilities.chunk = (array, size) => {
    const baseArray = Array.isArray(array) ? JSON.parse(JSON.stringify(array)) : [];
    const splitSize = typeof size === "number" ? size : 0;
    if (baseArray && splitSize) {
        if (splitSize >= baseArray.length) {
            return baseArray;
        }
        const splittedArray = baseArray.reduce((acc, el, ind, arr) => {
            acc.push(arr.splice(0, splitSize));
            return acc;
        }, []);
        if (baseArray.length) {
            splittedArray.push(baseArray);
        }
        return splittedArray;
    }
    return [];
};

// Export module
module.exports = arrayUtilities;

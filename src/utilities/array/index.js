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
 * @param {Array} [array = []] - The array that will be splitted
 * @param {number} [size = 0 ] - The size of every chunk
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

/**
 * ? compact method
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {Array} [arr = []] - The array to compact
 * @returns {Array} - Return the new array of filtered values
 */
arrayUtilities.compact = (arr) => {
    const array = typeof arr === "object" ? arr : [];
    if (array) {
        return array.filter((el) => Boolean(el));
    }
    return [];
};

/**
 * ? concat method
 * Creates a new array concatenating array with any additional arrays and/or values.
 *
 * @param {Array} [arr = []] - The array to be concatinate
 * @param {String|Array|Number|Boolean|Object} [vals = ...] - The values to concatinate
 * @returns {Array} - The concatinated array
 */
arrayUtilities.concat = (arr, ...vals) => {
    const array = typeof arr === "object" ? arr : [];
    if (array) {
        return array.concat(...vals);
    }
    return [...vals];
};

/**
 * ? drop method
 * Creates a slice of array with n elements dropped from the beginning.
 *
 * @param {Array} [arr = []] - The array to query
 * @param {Number} [n = 1] - The number of elements to drop
 */
arrayUtilities.drop = (arr, n) => {
    const array = typeof arr === "object" ? arr : [];
    const index = typeof n === "number" ? n : 1;
    if (array) {
        return array.slice(index);
    }
    return [];
};

/**
 * ? dropRight method
 * Creates a slice of array with n elements dropped from the right.
 *
 * @param {Array} [arr = []] - The array to query
 * @param {Number} [n = 1] - The number of elements to drop
 */
arrayUtilities.dropRight = (arr, n) => {
    const array = typeof arr === "object" ? arr : [];
    const index = typeof n === "number" ? n : 1;
    if (array) {
        return array.reverse().slice(index).reverse();
    }
    return [];
};

// Export module
module.exports = arrayUtilities;

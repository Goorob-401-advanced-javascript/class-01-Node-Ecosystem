'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * Is this object ?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isObjest = (input) => {
  return typeof (input) === 'object';
};
/**
 * Based on a set of rules, is the input valid?
 * Is the object have keys ? 
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isThereKeys = (input) => {
  if (Object.keys(input)) { return true };
};
/**
* Based on a set of rules, is the input valid?
* Is the object have values ?
* @param input
* @param rules
* @returns {boolean}
*/
validator.isThereValues = (input) => {
  if (Object.values(input)) { return true };
};
/**
  /**
 * Based on a set of rules, is the input valid?
 * What is the type of values ?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.validateObjValueType = (input) => {
  return Object.values(input).every(val=> typeof val === 'string' || typeof val === 'number' || typeof val === 'object')
}
/**
* Based on a set of rules, is the input valid?
* Is the object have array ?
* @param input
* @param rules
* @returns {boolean}
*/
validator.validateObjValueIfArr = (input) => {
  return Object.values(input).every(val => typeof val === 'object')
};
/**
* Is this a string?
* @param input
* @returns {boolean}
*/
validator.arrHasAnValues = (input) => {
  Object.values(input).every(ele => {
  if (typeof ele === 'object') {
  if (ele.length > 0 ) {
     return true
      } else {
        return false
      } }
    })
}
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof (input) === 'string';
};
/**
 * Is this a num?
 * @param input
 * @returns {boolean}
 */
validator.isNum = (input) => {
  return typeof (input) === 'number';
};

/**
 * Is this a bool?
 * @param input
 * @returns {boolean}
 */
validator.isBooleen = (input) => {
  return typeof (input) === 'boolean';
};
/**
 * Is this a num?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
  return typeof (input) === 'object';
};

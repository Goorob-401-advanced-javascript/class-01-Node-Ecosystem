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
  return typeof(input)==='object';
};
/**
 * Based on a set of rules, is the input valid?
 * Is the object have array ?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isThereKeys= (input)=>{
    if(Object.keys(input)){return true};
    };
  /**
 * Based on a set of rules, is the input valid?
 * Is the object have array ?
 * @param input
 * @param rules
 * @returns {boolean}
 */  
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof(input.name) === 'string';
};

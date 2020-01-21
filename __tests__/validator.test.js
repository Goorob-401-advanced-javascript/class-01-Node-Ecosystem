'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(true).toBeFalsy();
  });

  it('arrays', () => {
    expect(true).toBeFalsy();
  });

  it('objects', () => {
    expect(true).toBeFalsy();
  });

  it('booleans', () => {
    expect(true).toBeFalsy();
  });

  it('functions', () => {
    expect(true).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    const fred = {
        id:38,
        name:'Freddy McCoder',
        age: 20 ,
        children:[],
      };
    expect(validator.isObjest(fred)).toBeTruthy();
  });
  it('validates if theres a key ', () => {
    const fred = {
        id:38,
        name:'Freddy McCoder',
        age: 20 ,
        children:[],
      };
    expect(validator.isThereKeys(fred)).toBeTruthy();
  });
  it('validates the proper types of object properties', () => {
    
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});
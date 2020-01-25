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
    // expect(validator.isNum(num)).toBeTruthy();
    // expect(validator.isString(arr)).toBeFalsy();
    // expect(validator.isString(obj)).toBeFalsy();
    // expect(validator.isString(func)).toBeFalsy();
    // expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let num = 6 ;
    expect(validator.isNum(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr =['hello',7];
    expect(validator.isObjest(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {name : 'goorob'};
    expect(validator.isObjest(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false ;
    expect(validator.isBooleen(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = ()=>{};
     expect(validator.isString(func)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {

  it('validates if the input is function ', () => {
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
    
    const fred = {
      id:38,
      name:'Freddy McCoder',
      age: 20 ,
   
    };
  
    expect(validator.validateObjValueType(fred)).toBeTruthy();
  });

  it('validates the proper types of object properties', () => {
    
    const fred = {
      id:38,
      name:'Freddy McCoder',
      age: 20 ,
      children:[],
    };
    expect(validator.isThereValues(fred)).toBeTruthy();
  });

  it('validates the types of values contained in an array', () => {
    const fred = {
      id:38,
      name:'Freddy McCoder',
      age: 20 ,
      children:[],
    };
    expect(validator.validateObjValueIfArr(fred.children)).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    const fred = {
      id:38,
      name:'Freddy McCoder',
      age: 20 ,
      children:[],
    };
    expect(validator.arrHasAnValues(fred)).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});
'use strict';

const validator = require('./lib/validator.js');

const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  };
  console.log(`susan is object : ${validator.isObjest(susan)} `);
  console.log(`susan object have keys : ${validator.isThereKeys(susan)}`);
  
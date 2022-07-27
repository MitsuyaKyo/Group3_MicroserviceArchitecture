'use strict';

const validate = require("validate.js");
const wrapper = require('../../../helpers/utils/wrapper');

const validateConstraints = async (values,constraints) => {
    if(validate(values,constraints)){
        return wrapper.error('Bad Request',validate(values,constraints),400);
    }else{
        return wrapper.data(true);
    }
}

const isValidParam = async (payload) => {
    let constraints = {};
    let values = {};

    constraints[payload.title] = {length: {minimum: 4}};
    constraints[payload.author] = {length: {minimum: 4}};
    constraints[payload.article_file] = {length: {minimum: 4}};


    values[payload.title] = payload.title;
    values[payload.author] = payload.author;
    values[payload.article_file] = payload.article_file;

    return await validateConstraints(values,constraints);
}

module.exports = {
    isValidParam: isValidParam
}
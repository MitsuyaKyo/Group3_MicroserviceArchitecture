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

    constraints[payload.idUser] = {length: {minimum: 4}};
    constraints[payload.email] = {length: {minimum: 4}};
    constraints[payload.username] = {length: {minimum: 4}};
    constraints[payload.password] = {length: {minimum: 4}};
    constraints[payload.name] = {length: {minimum: 4}};
    constraints[payload.phoneNumber] = {length: {minimum: 4}};
    constraints[payload.createdAt] = {length: {minimum: 4}};
    constraints[payload.updatedAt] = {length: {minimum: 4}};

    values[payload.idUser] = payload.idUser;
    values[payload.email] = payload.email;
    values[payload.username] = payload.username;
    values[payload.password] = payload.password;
    values[payload.name] = payload.name;
    values[payload.phoneNumber] = payload.phoneNumber;
    values[payload.createdAt] = payload.createdAt;
    values[payload.updatedAt] = payload.updatedAt;

    return await validateConstraints(values,constraints);
}

module.exports = {
    isValidParam: isValidParam
}
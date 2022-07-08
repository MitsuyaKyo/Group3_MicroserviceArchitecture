'use strict';

const validate = require("validate.js");
const wrapper = require('../../../helpers/utils/wrapper');
const Mongo = require('../../../helpers/databases/mongodb/db');
const MySQL = require('../../../helpers/databases/mysql/db');
const config = require('../../../infra/configs/global_config');

const validateConstraints = async (values,constraints) => {
    if(validate(values,constraints)){
        return wrapper.error('Bad Request',validate(values,constraints),400);
    }else{
        return wrapper.data(true);
    }
}

const isValidParamGetOneMockup = async (payload) => {
    let constraints = {};
    let values = {};
    constraints[payload.projectName] = {length: {minimum: 4}};
    constraints[payload.domainName] = {length: {minimum: 4}};
    constraints[payload.apiName] = {length: {minimum: 4}};
    values[payload.projectName] = payload.projectName;
    values[payload.domainName] = payload.domainName;
    values[payload.apiName] = payload.apiName;
    return await validateConstraints(values,constraints);
}

const isValidParamPostOneMockup = async (payload) => {
    let constraints = {};
    let values = {};
    constraints[payload.projectName] = {length: {minimum: 4}};
    constraints[payload.domainName] = {length: {minimum: 4}};
    constraints[payload.apiName] = {length: {minimum: 4}};
    values[payload.projectName] = payload.projectName;
    values[payload.domainName] = payload.domainName;
    values[payload.apiName] = payload.apiName;
    return await validateConstraints(values,constraints);
}

const ifExistMockup = async (payload) => {
    const projectName = payload.projectName;
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('mockup-event-store');
    const parameter = {"apiName": payload.apiName};
    const result = await db.findOne(parameter);
    return result;
}

const ifExistMockupMySQL = async (payload) => {
    const projectName = payload.projectName;
    const domainName = payload.domainName;
    const apiName = payload.apiName;
    const db = new MySQL(config.getDevelopmentDBMySQL());
    const query = `SELECT * FROM contract WHERE projectName='${projectName}' AND domainName='${domainName}' AND apiName='${apiName}';`;
    const result = await db.findData(query);
    return result;
}

module.exports = {
    isValidParamGetOneMockup: isValidParamGetOneMockup,
    isValidParamPostOneMockup: isValidParamPostOneMockup,
    ifExistMockup: ifExistMockup,
    ifExistMockupMySQL: ifExistMockupMySQL
}
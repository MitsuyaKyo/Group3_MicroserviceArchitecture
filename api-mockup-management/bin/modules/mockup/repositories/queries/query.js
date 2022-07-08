'use strict';

const Mongo = require('../../../../helpers/databases/mongodb/db');
const MySQL = require('../../../../helpers/databases/mysql/db');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');

const findOneMockup = async (parameter) => {
    parameter = {$and:[parameter]};
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('mockup-event-store');
    const recordset = await db.findOne(parameter);
    return recordset;
}

const findOneMockupMySQL = async (parameter) => {
    const db = new MySQL(config.getDevelopmentDBMySQL());
    const query = `SELECT mockup FROM contract WHERE projectName='${parameter.projectName}' AND 
                    domainName='${parameter.domainName}' AND apiName='${parameter.apiName}';`;
    const recordset = await db.findData(query);
    return recordset;
}

module.exports = {
    findOneMockup : findOneMockup,
    findOneMockupMySQL : findOneMockupMySQL
}
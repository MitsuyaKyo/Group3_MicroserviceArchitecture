'use strict';

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');

const findUsers = async (parameter) => {
    parameter = {$and:[parameter]};
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('users');
    const recordset = await db.findMany();
    return recordset;
}

const findOneUsers = async (parameter) => {
    parameter = {$and:[parameter]};
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('users');
    const recordset = await db.findOne(parameter);
    return recordset;
}

module.exports = {
    findUsers : findUsers,
    findOneUsers : findOneUsers
}
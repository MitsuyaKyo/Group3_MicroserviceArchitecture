'use strict';

const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');


const findManyArticle = async (parameter) => {
    parameter = {$and:[parameter]};
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('article');
    const recordset = await db.findMany();
    return recordset;
}

const findOneArticle = async (parameter) => {
    parameter = {$and:[parameter]};
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('article');
    const recordset = await db.findOne(parameter);
    return recordset;
}

module.exports = {
    findManyArticle,
    findOneArticle
}
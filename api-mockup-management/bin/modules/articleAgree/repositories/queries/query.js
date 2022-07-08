'use strict';

const Mongo = require('../../../../helpers/databases/mongodb/db');
const MySQL = require('../../../../helpers/databases/mysql/db');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const ObjectId = require('mongodb').ObjectId;

const findManyArticle = async (parameter) => {
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('article');
    const recordset = await db.findMany(parameter);
    return recordset;
}

const findById = async (id) => {
    const db = new Mongo(config.getDevelopmentDB());
    db.setCollection('article');
    const parameter = {
        _id: ObjectId(id)
    }
    const recordset = await db.findOne(parameter);
    return recordset;
}

module.exports = {
    findManyArticle,
    findById
}